const fs = require('fs-extra');
const path = require('path');
const postcss = require('postcss');
const themeConfig = require('../genThemeConfig/result.json');


const themeComponentsMap = {};
const themePropertiesMap = {};

const cssContent = fs.readFileSync(path.join(__dirname, '../../theme.css'), 'utf-8');
const root = postcss.parse(cssContent);
const _root = root.nodes.find((node) => node.type === 'rule' && node.selector === ':root');

let lastComponent;
let lastProp;

_root.nodes.forEach((node) => {
    if (node.type === 'comment') {
        if (node.raws.before && node.raws.before.includes('\n')) {
            if (node.text.includes('@component ')) {
                const cap = /@component\s+([\w-]+)(\s+@hidden)?/.exec(node.text.trim());
                const name = cap[1].trim();
                const hidden = !!cap[2];

                if ((!lastComponent || lastComponent.name !== name)) {
                    if (lastComponent) {
                        const {
                            name: componentName,
                            cssProperty
                        } = lastComponent;
                        themeComponentsMap[componentName] = cssProperty;
                    }

                    lastComponent = {
                        name,
                        cssProperty: {}
                    }
                    if (hidden) {
                        lastComponent = undefined;
                    }
                }
            }
        } else if (lastComponent) {
            if (node.text.trim() === '@hidden') { // Do not display this variable
                delete lastComponent.cssProperty[lastProp];
            } else if (node.text.includes('@type ')) { // Variable display and input type
                const cap = /@type\s+([\w-]+)/.exec(node.text.trim());
                lastComponent.cssProperty[lastProp].type = cap[1].trim();
            } else if (node.text.includes('@desc ')) { // Description
                const cap = /@desc\s+([\u4e00-\u9fa5|\w|,|\s|：|\#|(|)|(|)|\.|,]+)/.exec(node. text.trim());
                lastComponent.cssProperty[lastProp].desc = cap[1].trim()
            } else if (node.text.includes('@group ')) { // Grouping of variables
                const cap = /@group\s+([\S]+)/.exec(node.text.trim());
                lastComponent.cssProperty[lastProp].group = cap[1].trim();
            } else if (node.text.includes('@prefix ')) { // Variable prefix, convenient for sub-components to remove variable prefixes
                const cap = /@prefix\s+([\S]+)/.exec(node.text.trim());
                lastComponent.cssProperty[lastProp].prefix = cap[1].trim();
            } else if (node.text.includes('@depAttrs ')) { // Attributes this variable depends on
                const cap = /@depAttrs\s+(.*)/.exec(node.text.trim());
                lastComponent.cssProperty[lastProp].depAttrs = JSON.parse(cap[1] || '{}');
            } else if (node.text.includes('@excludeElTags ')) { // exclude elTag
                const cap = /@excludeElTags\s+([\S]+)/.exec(node.text.trim());
                lastComponent.cssProperty[lastProp].excludeElTags = cap[1].trim().split(',');
            } else if (node.text.includes('@excludeTags ')) { // Exclude components
                const cap = /@excludeTags\s+([\S]+)/.exec(node.text.trim());
                lastComponent.cssProperty[lastProp].excludeTags = cap[1].trim().split(',');
            } else if (node.text.includes('@title ')) {
                const cap = /@title\s+([\S]+)/.exec(node.text.trim());
                lastComponent.cssProperty[lastProp].title = cap[1].trim();
            } else if (node.text.includes('@depParentAttrs ')) { // The parent component attributes that this variable depends on
                const cap = /@depParentAttrs\s+(.*)/.exec(node.text.trim());
                lastComponent.cssProperty[lastProp].depParentAttrs = JSON.parse(cap[1] || '{}');
            } else if (node.text.includes('@depStaticStyles ')) { // Static style properties that this variable depends on
                const cap = /@depStaticStyles\s+(.*)/.exec(node.text.trim());
                lastComponent.cssProperty[lastProp].depStaticStyles = JSON.parse(cap[1] || '[]');
            }
        }
    } else if (node.type === 'decl') {
        themePropertiesMap[node.prop] = node.value;
        if (!lastComponent)
            return;
        lastComponent.cssProperty[node.prop] = {
            type: 'input'
        }
        lastProp = node.prop;
    }
});
if (lastComponent) {
    const {
        name: componentName,
        cssProperty
    } = lastComponent;
    themeComponentsMap[componentName] = cssProperty;
}

const resultPath = path.join(__dirname, './result.json');
const resultList = fs.readJSONSync(resultPath);

if(Array.isArray(resultList)) {
    resultList.forEach((result) => {
        const { toPosition, items } = result || {};
        if(toPosition === 'highLevelSetting') {
            if(Array.isArray(items)) {
                items.forEach((item) => {
                    const { name } = item || {};
                    const cssProperty = themeComponentsMap[name];
                    if(cssProperty) {
                        item.cssProperty = cssProperty;
                    }
                });
            }
        }
    })
}

fs.writeJsonSync(resultPath, resultList, {
    spaces: 4
});


const theme = {
    themeConfig: JSON.stringify(themeConfig),
};
fs.writeFileSync(path.join(__dirname, '../../dist-theme/theme.json'), JSON.stringify(theme, null, 4));

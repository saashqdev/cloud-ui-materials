export const addTreeLevel = function (data) {
    const arrayTreeAddLevel = (array, levelName = 'curIndex', childrenName = 'children') => {
        if (!Array.isArray(array))
            return [];
        const recursive = (array, level = 0) => {
            level++;
            return array.map((v, index) => {
                v[levelName] = level;
                const child = v[childrenName];
                if (child && child.length)
                    recursive(child, level);
                return v;
            });
        };
        return recursive(array);
    };
    arrayTreeAddLevel(data);
    return data;
};

export const listToTree = function (data, options) {
    const { valueField, parentField, childrenField } = options;

    // Map record it
    const nodes = {}; // Record<id, { entity }>
    data.forEach((item) => {
        const id = this.$at(item, valueField);
        if (id) {
            nodes[id] = item;
        }
    });

    const tree = [];
    data.forEach((item) => {
        const parentId = this.$at(item, parentField);
        const parent = nodes[parentId];
        // If there is no parentId or the parent does not exist, it will not be processed.
        if (!parentId || !parent) {
            tree.push(item);
        } else {
            if (!this.$at(parent, childrenField)) {
                this.$setAt(parent, childrenField, []);
            }

            this.$at(parent, childrenField).push(item);
        }
    });

    return tree;
};

const titleConfig = {
    'ql-header': 'Title',
    'ql-font': 'Font',
    'ql-size': 'Font Size',
    'ql-bold': 'Bold',
    'ql-italic': 'Italic',
    'ql-underline': 'Underline',
    'ql-strike': 'Strikethrough',
    'ql-color': 'Font Color',
    'ql-background': 'Font Background Color',
    'ql-script': 'Superscript/Subscript',
    'ql-align': 'Align',
    'ql-list': 'List',
    'ql-indent': 'Indent',
    'ql-link': 'Insert Link',
    'ql-image': 'Insert Picture',
    'ql-video': 'Insert Video',
    'ql-formula': 'Insert Formula',
    'ql-blockquote': 'Quote',
    'ql-code': 'Code',
    'ql-code-block': 'Code',
    'ql-clean': 'Clear Format',
    'ql-table': 'Table',
};

export function addQuillTitle() {
    const oToolBar = document.querySelector('.ql-toolbar'),
    aButton = oToolBar.querySelectorAll('button'),
    aSelect = oToolBar.querySelectorAll('.ql-picker');
    aButton.forEach(function (item) {
        if (item.className === 'ql-script') {
            item.value === 'sub' ? item.title = 'Subscript' : item.title = 'superscript';
        } else if (item.className === 'ql-indent') {
            item.value === '+1' ? item.title = 'Increase Indent' : item.title = 'Decrease indent';
        } else if (item.className === 'ql-list') {
            item.value === 'ordered' ? item.title = 'Number' : item.title = 'Bullet';
        } else if (item.className === 'ql-header') {
            item.title = item.value + "level" + titleConfig[item.classList[0]];
        } else {
            item.title = titleConfig[item.classList[0]];
        }
    });
    aSelect.forEach(function (item) {
        let tipTitle = item.classList[0];
        if (tipTitle === 'ql-align') {
            item.querySelectorAll('.ql-picker-item').forEach((listItem) => {
                 let alignValue = listItem.getAttribute('data-value')
                 if (alignValue === 'center') {
                    listItem.title = "Centered Alignment";
                } else if (alignValue === 'right') {
                    listItem.title = "Right Aligned";
                } else if (alignValue === 'justify') {
                    listItem.title = "Align Both Ends";
                } else {
                    listItem.title = "Left Aligned";
                }
            })
        }
        item.title = titleConfig[tipTitle];
    });
    // Replace the arrow svg of the drop-down box
    const fontPicker = document.querySelectorAll(".ql-font .ql-picker-label");
    const sizePicker = document.querySelectorAll(".ql-size .ql-picker-label");
    const dropIcon = `<svg width="6" height="4" viewBox="0 0 6 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 4L1.30337e-06 -1.47821e-06L6 -4.76837e-07L3 4Z" fill="#BFBFBF"/>
                    </svg>`;
    sizePicker.forEach((item) => {
        item.innerHTML = dropIcon;
    });
    fontPicker.forEach((item) => {
        item.innerHTML = dropIcon;
    });
}
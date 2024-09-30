<!-- The README.md is automatically generated based on api.yaml and docs/*.md for easy viewing on GitHub and NPM. If you need to modify, please view the source file -->

# LcapPrintPage Page Printing

- [Example](#example)
    - [Basic Usage](#Basic Usage)
    - [Turn on Automatic Download](#turn on automatic download)
    - [Modify the Generated File Type to Image](#Modify the generated file type to image)
    - [Control Printing DOM Elements](#Control printing DOM elements)
    - [Turn on PDF Pagination](#turn on pdf pagination)
    - [Set the Generated File Name](#Set the generated file name)
    - [Set Hidden Components](#sethidden components)
    - [Control Printing Width](#Control printing width)
    - [Control Printing Width, Automatically Adjust According to Page Width and Height] (#Control printing width, automatically adjust according to page width and height)
-[API]()
    - [Props/Attrs](#propsattrs)
    - [Events](#events)
    - [Methods](#methods)

**Other**

Print the current page content to generate PDF or pictures

## Example
### Basic Usage

``` html
<lcap-printPage></lcap-printPage>
```

### Turn on Automatic Download
``` html
<lcap-printPage :download=true></lcap-printPage>
```

### Modify the Generated File Type to Image
``` html
<lcap-printPage :download=true fileType="png"></lcap-printPage>
```

### Control Printed DOM Elements
``` html
<lcap-printPage :download=true printDOM="body"></lcap-printPage>
```

### Turn on PDF Pagination
``` html
<lcap-printPage :download=true canvasWidth="auto" canvasHeight="auto" :isNotFullPage=true></lcap-printPage>
```

### Set the Generated File Name
``` html
<lcap-printPage :download=true fileName="custom file name"></lcap-printPage>
```

### Set Hidden Components
``` html
<lcap-printPage :hidden=true></lcap-printPage>
```

### Control Printing Width
``` html
<lcap-printPage :download=true :canvasWidth=1200></lcap-printPage>
```

### Control the Printing Width and Automatically Adjust it According to the Page Width and Height
``` html
<lcap-printPage :download=true canvasWidth="auto" canvasHeight="auto"></lcap-printPage>
```

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| hidden | boolean | | `false` | Whether to display the print button |
| fileName | string | | `'File export'` | Set the file name for printing |
| printDOM | string | | `'body'` | Set the printed DOM node |
| isNotFullPage | boolean | | `false` | Whether the printed PDF is paginated |
| canvasWidth | number\|string | | `1000` | Set the width of the print file |
| canvasHeight | number\|string | | `800` | Set the height of the print file |
| download | boolean | | `false` | Whether to automatically download printed files |
| fileType | string | `[object Object]`<br/>`[object Object]` | `'pdf'` | Set the file type for printing |

### Events

#### @print

Triggered when printing

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.file | any | Returns the printed file stream |

Methods

#### printPage()

Print current page

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |


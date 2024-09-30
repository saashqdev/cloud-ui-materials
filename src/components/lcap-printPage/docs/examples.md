### Basic Usage

``` html
<lcap-printPage></lcap-printPage>
```

### Turn on automatic download
``` html
<lcap-printPage :download=true></lcap-printPage>
```

### Modify the generated file type to image
``` html
<lcap-printPage :download=true fileType="png"></lcap-printPage>
```

### Control printed DOM elements
``` html
<lcap-printPage :download=true printDOM="body"></lcap-printPage>
```

### Turn on PDF pagination
``` html
<lcap-printPage :download=true canvasWidth="auto" canvasHeight="auto" :isNotFullPage=true></lcap-printPage>
```

### Set the generated file name
``` html
<lcap-printPage :download=true fileName="custom file name"></lcap-printPage>
```

### Set hidden components
``` html
<lcap-printPage :hidden=true></lcap-printPage>
```

### Control printing width
``` html
<lcap-printPage :download=true :canvasWidth=1200></lcap-printPage>
```

### Control the printing width and automatically adjust it according to the page width and height
``` html
<lcap-printPage :download=true canvasWidth="auto" canvasHeight="auto"></lcap-printPage>
```

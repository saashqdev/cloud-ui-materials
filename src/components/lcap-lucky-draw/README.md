<!-- The README.md is automatically generated based on api.yaml and docs/*.md for easy viewing on GitHub and NPM. If you need to modify, please view the source file -->

# LcapLuckyDraw Nine Palaces Drawing

- [Example](#example)
    - [Basic Usage](#Basic Usage)
    - [Control the default lottery result pop-up window to be opened and closed by default, and the backfill text is the set prize name] (#Control the default lottery result pop-up window to be opened and closed by default - the backfill text is the set prize name)
    - [Directly pass in the specified lottery results, and the probability passed in below after setting is invalid] (# Directly pass in the specified lottery result, and the probability passed in below after setting is invalid)
    - [Controlling the lottery results by setting probabilities, the numerical values   can be simply understood as inventory, and each item will automatically calculate the proportion and convert it into probability] (#Controlling the lottery results by setting probabilities - The numerical values   can be simply understood as inventory, and each item will automatically calculate the proportion. Ratio converted into probability)
-[API]()
    - [Props/Attrs](#propsattrs)
    - [Events](#events)

**Other**

SaasHQ lottery set price

## Example
### Basic Usage

``` html
<lcap-lucky-draw
    block1_name=""
    block3_name="Prize 3"
    block4_name="Prize 4"
    block5_name="Award"
    block6_name="Prize 6"
    block7_name="Prize 7"
    block8_name="Prize 8"
    font_color="#FFFFFF"
    font_top_padding="20px"
    font_size="10px"
>
</lcap-lucky-draw>
```

### Controls the default lottery result pop-up window to be opened, closed by default, and the backfill text is the set prize name.

``` html
<lcap-lucky-draw
    block1_name=""
    block3_name="Prize 3"
    block4_name="Prize 4"
    block5_name="Award"
    block6_name="Prize 6"
    block7_name="Prize 7"
    block8_name="Prize 8"
    font_color="#FFFFFF"
    font_top_padding="20px"
    font_size="10px"
    :prize_popup=true
>
</lcap-lucky-draw>
```

### Directly pass in the specified lottery result. After setting, the probability passed in below will be invalid.

``` html
<lcap-lucky-draw
    block1_name="Prize 1"
    block2_name="Prize 2"
    block3_name="Prize 3"
    block4_name="Prize 4"
    block5_name="Prize 5"
    block6_name="Prize 6"
    block7_name="Prize 7"
    block8_name="Prize 8"
    font_color="#FFFFFF"
    font_top_padding="20px"
    font_size="20px"
    return_prize="Prize 4"
>
</lcap-lucky-draw>
```

### Control the lottery result by setting the probability. The value can be simply understood as inventory, and the proportion of each item will be automatically calculated and converted into probability.

``` html
<lcap-lucky-draw
    block1_name="Prize 1"
    block2_name="Prize 2"
    block3_name="Prize 3"
    block4_name="Prize 4"
    block5_name="Prize 5"
    block6_name="Prize 6"
    block7_name="Prize 7"
    block8_name="Prize 8"
    :block1_chance=10
    :block2_chance=10
    :block3_chance=10
    :block4_chance=10
    :block5_chance=10
    :block6_chance=10
    :block7_chance=10
    :block8_chance=10000
    font_color="#FFFFFF"
    font_top_padding="20px"
    font_size="20px"
>
</lcap-lucky-draw>
```

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| width | string | | `'375px'' | Set the width of the nine-square grid |
| height | string | | `'375px'' | Set the height of the nine-square grid |
| return_prize | string | | `''` | Prize information returned by the backend, the respective lottery probabilities are invalid after setting |
| prize_popup | boolean | | `false` | Whether to open the default winning popup window |
| background_color | string | | `''` | Set the background color (example: #FFFFFF) |
| start_img | image | | `''` | Set the lottery start button image |
| font_color | string | | `''` | Set the image color of all prize text |
| font_top_padding | string | | `'60px'` | Set the distance between the prize text and the top (default: 60px) |
| font_size | string | | `'22px'` | Set the distance between the prize text and the top (default: 22px) |
| block1_img | image | | `''` | Set the grid 1 prize image |
| block1_name | string | | `'Prize 1'` | Set the prize name of grid 1 |
| block1_chance | number | | `'10'' | Set the probability of winning prize 1 |
| block2_img | image | | `''` | Set the grid 2 prize image |
| block2_name | string | | `'Prize 2'' | Set the prize name of grid 2 |
| block2_chance | number | | `'10'' | Set the probability of winning prize 2 |
| block3_img | image | | `''` | Set the grid 3 prize image |
| block3_name | string | | `'Prize 3'' | Set the prize name for block 3 |
| block3_chance | number | | `'10'' | Set the probability of winning prize 3 |
| block4_img | image | | `''` | Set the grid 4 prize image |
| block4_name | string | | `'Prize 4'' | Set the prize name for block 4 |
| block4_chance | number | | `'10'' | Set the probability of prize 4 |
| block5_img | image | | `''` | Set the grid 5 prize image |
| block5_name | string | | `'Prize 5'` | Set the prize name for block 5 |
| block5_chance | number | | `'10'' | Set the probability of winning prize 5 |
| block6_img | image | | `''` | Set the grid 6 prize image |
| block6_name | string | | `'Prize 6'` | Set the prize name for block 6 |
| block6_chance | number | | `'10'' | Set the probability of winning prize 6 |
| block7_img | image | | `''` | Set the grid 7 prize image |
| block7_name | string | | `'Prize 7'` | Set the prize name for block 7 |
| block7_chance | number | | `'10'' | Set the probability of winning prize 7 |
| block8_img | image | | `''` | Set the grid 8 prize image |
| block8_name | string | | `'Prize 8'` | Set the prize name for block 8 |
| block8_chance | number | | `'10'' | Set the probability of winning prize 8 |

### Events

#### @start

Triggered at the beginning of the draw

#### @end

Triggered at the end of the lottery

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | any | Return prize |


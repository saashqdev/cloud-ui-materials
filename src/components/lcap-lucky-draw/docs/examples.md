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

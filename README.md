# Skywalker 🌌

Skywalker is a highly customizable CSS library that makes it easier to build awesome simple-looking websites.

**How it's done normally:**

```html
<style>
	.wrapper {
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
<div class="wrapper">
	<button>Show more</button>
</div>
```

**How it's done with Skywalker:**

```html
<div class="display_flex justify-content_center align-items_center">
	<!--<div class="d_f j-c_c a-i_c">-->
	<button>Show more</button>
</div>
```

Do more with less code! Skywalker is built to help you stay focused on writing your code and not worry about simple alignments or visuals.

## Display

|       Class name        | Shortcut |          Result          |
| :---------------------: | :------: | :----------------------: |
| `.display_inline-block` | `.d_i-b` | `display: inline-block;` |
|    `.display_block`     |  `.d_b`  |    `display: block;`     |
|     `.display_flex`     |  `.d_f`  |     `display: flex;`     |
|     `.display_none`     |  `.d_n`  |     `display: none;`     |

## Flexbox

|            Class name            |  Shortcut  |              Result               |
| :------------------------------: | :--------: | :-------------------------------: |
|      `.flex-direction_row`       |  `.f-d_r`  |      `flex-direction: row;`       |
|     `.flex-direction_column`     |  `.f-d_c`  |     `flex-direction: column;`     |
|        `.flex-wrap_wrap`         |  `.f-w_w`  |        `flex-wrap: wrap;`         |
|       `.flex-wrap_nowrap`        |  `.f-w_n`  |       `flex-wrap: nowrap;`        |
|    `.justify-content_center`     |  `.j-c_c`  |    `justify-content: center;`     |
| `.justify-content_space-around`  | `.j-c_s-a` | `justify-content: space-around;`  |
| `.justify-content_space-between` | `.j-c_s-b` | `justify-content: space-between;` |
|      `.align-items_center`       |  `.a-i_c`  |      `align-items: center;`       |
|    `.align-items_flex-start`     | `.a-i_f-s` |    `align-items: flex-start;`     |
|     `.align-items_flex-end`      | `.a-i_f-e` |     `align-items: flex-end;`      |

## Text

|          Class name          | Shortcut |            Result             |
| :--------------------------: | :------: | :---------------------------: |
|      `.text-align_left`      | `.t-a_l` |      `text-align: left;`      |
|     `.text-align_center`     | `.t-a_c` |     `text-align: center;`     |
|     `.text-align_right`      | `.t-a_r` |     `text-align: right;`      |
|     `.font-weight_bold`      | `.f-w_b` |     `font-weight: bold;`      |
|     `.font-style_italic`     | `.f-s_i` |     `font-style: italic;`     |
| `.text-decoration_underline` | `.t-d_u` | `text-decoration: underline;` |
| `.text-transform_uppercase`  | `.t-t_u` | `text-transform: uppercase;`  |
| `.text-transform_lowercase`  | `.t-t_l` | `text-transform: lowercase;`  |
| `.text-transform_capitalize` | `.t-t_c` | `text-transform: capitalize;` |

## Mouse

|     Class name      | Shortcut |        Result        |
| :-----------------: | :------: | :------------------: |
|  `.cursor_pointer`  |  `.c_p`  |  `cursor: pointer;`  |
|   `.cursor_auto`    |  `.c_a`  |   `cursor: auto;`    |
| `.user-select_auto` | `.u-s_a` | `user-select: auto;` |
| `.user-select_none` | `.u-s_n` | `user-select: none;` |

## You might also need

|    Class name     | Shortcut |               Result               |
| :---------------: | :------: | :--------------------------------: |
| `.hide_scrollbar` |  `.h_s`  |         _hides scrollbar_          |
|      `.rage`      |    -     | _performs shaking effect on hover_ |

## Versions

See list of every change made [here](VERSIONS.md).

## Notes

At this point the library is still under development and there is still a lot to cover. However, I believe that Skywalker can save you a lots of time that you can spend by procrastinating or debugging JavaScript 😘.

## Contribution

If you are unhappy about something, pull requests are highly welcomed.

## License

Licensed under the [MIT License](LICENSE).

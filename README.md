# Skywalker 🌌

Skywalker is a highly customizable CSS library that makes it easier to build awesome simple-looking websites.

**How it's done normally:**

```css
.wrapper {
	display: flex;
	justify-content: center;
	align-items: center;
}
```

```html
<div class="wrapper">
	<button>Show more</button>
</div>
```

**How it's done with Skywalker:**

```html
<div class="flex justify-center align-center">
	<button>Show more</button>
</div>
```

Do more with less code! Skywalker is built to help you stay focused on writing your code and not worry about simple alignments or visuals.

## Display

|  Full version   | Versions |          Result          |
| :-------------: | :------: | :----------------------: |
|    `.block`     |   `.b`   |    `display: block;`     |
| `.inline-block` |   `.i`   | `display: inline-block;` |
|     `.flex`     |   `.f`   |     `display: flex;`     |
|     `.none`     |   `.n`   |     `display: none;`     |

## Flexbox

|    Full version    |       Versions       |              Result               |
| :----------------: | :------------------: | :-------------------------------: |
|     `.column`      |     `.col`, `.c`     |     `flex-direction: column;`     |
|       `.row`       |         `.r`         |      `flex-direction: row;`       |
|      `.wrap`       |         `.w`         |        `flex-wrap: wrap;`         |
|     `.nowrap`      |        `.nw`         |       `flex-wrap: nowrap;`        |
| `.justify-center`  | `.justify-c`, `.j-c` |    `justify-content: center;`     |
| `.justify-between` | `.justify-b`, `.j-b` | `justify-content: space-between;` |
| `.justify-around`  | `.justify-a`, `.j-a` | `justify-content: space-around;`  |
|   `.align-start`   |  `.align-s`, `.a-s`  |    `align-items: flex-start;`     |
|    `.align-end`    |  `.align-e`, `.a-e`  |     `align-items: flex-end;`      |
|  `.align-center`   |  `.align-c`, `.a-c`  |      `align-items: center;`       |

## Margin

|   Full version   | Versions |      Result       |
| :--------------: | :------: | :---------------: |
| `.margin-auto-x` | `.m-a-x` | `margin: 0 auto;` |
| `.margin-auto-y` | `.m-a-y` | `margin: auto 0;` |
|  `.margin-auto`  |  `.m-a`  |  `margin: auto;`  |

## Text styling

|  Full version  |     Versions     |            Result             |
| :------------: | :--------------: | :---------------------------: |
|  `.text-left`  | `.txt-l`, `.t-l` |      `text-align: left;`      |
| `.text-center` | `.txt-c`, `.t-c` |     `text-align: center;`     |
| `.text-right`  | `.txt-r`, `.t-r` |     `text-align: right;`      |
|    `.bold `    |        -         |     `font-weight: bold;`      |
|  `.underline`  |        -         | `text-decoration: underline;` |

## Mouse

|   Full version    |     Versions     |        Result        |
| :---------------: | :--------------: | :------------------: |
|    `.pointer`     |  `.pointer-on`   |  `cursor: pointer;`  |
|  `.pointer-off`   |        -         |   `cursor: auto;`    |
|   `.selectable`   | `.selectable-on` | `user-select: auto;` |
| `.selectable-off` |        -         | `user-select: none;` |

## Bonuses

|   Full version    |      Versions      |               Result               |
| :---------------: | :----------------: | :--------------------------------: |
| `.hide-scrollbar` | `.h-s`, `.hide-sb` |         _hides scrollbar_          |
|      `.rage`      |         -          | _performs shaking effect on hover_ |

## Choose your Skywalker

Are you a perfectionist and want to start from scratch? Choose `dist/skywalker-fresh.min.css`. Otherwise choose `dist/skywalker.min.css`. The `-fresh` one removes default settings from every element.

## Contribution

If you are unhappy about something, pull requests are highly welcomed.

## License

Licensed under the [MIT License](LICENSE).

# Documentation

## CSS classes

|     Property      |      Value      |
| :---------------: | :-------------: |
|   `align-items`   |    `center`     |
|   `align-items`   |   `flex-end`    |
|   `align-items`   |  `flex-start`   |
|     `cursor`      |     `auto`      |
|     `cursor`      |    `pointer`    |
|     `display`     |     `block`     |
|     `display`     |     `flex`      |
|     `display`     |     `grid`      |
|     `display`     | `inline-block`  |
|     `display`     |     `none`      |
| `flex-direction`  |    `column`     |
| `flex-direction`  |      `row`      |
|    `flex-wrap`    |    `nowrap`     |
|    `flex-wrap`    |     `wrap`      |
|   `font-style`    |    `italic`     |
|   `font-weight`   |      `100`      |
|   `font-weight`   |      `200`      |
|   `font-weight`   |      `300`      |
|   `font-weight`   |      `400`      |
|   `font-weight`   |      `500`      |
|   `font-weight`   |      `600`      |
|   `font-weight`   |      `700`      |
|   `font-weight`   |      `800`      |
|   `font-weight`   |      `900`      |
|   `font-weight`   |     `bold`      |
|     `height`      |     `10vh`      |
|     `height`      |     `20vh`      |
|     `height`      |     `30vh`      |
|     `height`      |     `40vh`      |
|     `height`      |     `50vh`      |
|     `height`      |     `60vh`      |
|     `height`      |     `70vh`      |
|     `height`      |     `80vh`      |
|     `height`      |     `90vh`      |
|     `height`      |     `100vh`     |
| `justify-content` |    `center`     |
| `justify-content` | `space-around`  |
| `justify-content` | `space-between` |
|   `max-height`    |     `10vh`      |
|   `max-height`    |     `20vh`      |
|   `max-height`    |     `30vh`      |
|   `max-height`    |     `40vh`      |
|   `max-height`    |     `50vh`      |
|   `max-height`    |     `60vh`      |
|   `max-height`    |     `70vh`      |
|   `max-height`    |     `80vh`      |
|   `max-height`    |     `90vh`      |
|   `max-height`    |     `100vh`     |
|    `max-width`    |     `10vh`      |
|    `max-width`    |     `20vh`      |
|    `max-width`    |     `30vh`      |
|    `max-width`    |     `40vh`      |
|    `max-width`    |     `50vh`      |
|    `max-width`    |     `60vh`      |
|    `max-width`    |     `70vh`      |
|    `max-width`    |     `80vh`      |
|    `max-width`    |     `90vh`      |
|    `max-width`    |     `100vh`     |
|   `min-height`    |     `10vh`      |
|   `min-height`    |     `20vh`      |
|   `min-height`    |     `30vh`      |
|   `min-height`    |     `40vh`      |
|   `min-height`    |     `50vh`      |
|   `min-height`    |     `60vh`      |
|   `min-height`    |     `70vh`      |
|   `min-height`    |     `80vh`      |
|   `min-height`    |     `90vh`      |
|   `min-height`    |     `100vh`     |
|    `min-width`    |     `10vh`      |
|    `min-width`    |     `20vh`      |
|    `min-width`    |     `30vh`      |
|    `min-width`    |     `40vh`      |
|    `min-width`    |     `50vh`      |
|    `min-width`    |     `60vh`      |
|    `min-width`    |     `70vh`      |
|    `min-width`    |     `80vh`      |
|    `min-width`    |     `90vh`      |
|    `min-width`    |     `100vh`     |
| `pointer-events`  |     `auto`      |
| `pointer-events`  |     `none`      |
|    `position`     |   `absolute`    |
|    `position`     |     `fixed`     |
|    `position`     |   `relative`    |
|    `position`     |    `static`     |
|    `position`     |    `sticky`     |
|   `text-align`    |    `center`     |
|   `text-align`    |    `justify`    |
|   `text-align`    |     `left`      |
|   `text-align`    |     `right`     |
| `text-decoration` |     `none`      |
| `text-decoration` |   `underline`   |
| `text-transform`  |  `capitalize`   |
| `text-transform`  |   `lowercase`   |
| `text-transform`  |   `uppercase`   |
|   `user-select`   |     `auto`      |
|   `user-select`   |     `none`      |
|      `width`      |     `10vw`      |
|      `width`      |     `20vw`      |
|      `width`      |     `30vw`      |
|      `width`      |     `40vw`      |
|      `width`      |     `50vw`      |
|      `width`      |     `60vw`      |
|      `width`      |     `70vw`      |
|      `width`      |     `80vw`      |
|      `width`      |     `90vw`      |
|      `width`      |     `100vw`     |

## Custom classes

Skywalker also comes with a bunch of custom classes for the most common CSS cases.

### `.hide_scrollbar`

Hides both vertical and horizontal scrollbar.

### `.sw_background-image`

Used for fullscreen backgrounds.

- `background-position: center;`
- `background-repeat: no-repeat;`
- `background-size: cover;`

### `.sw_container`

Custom container for responsive resizing.

- `max-width: 50vw;`
- `margin: 0 auto;`

#### Breakpoints

| Page width | Container width |
| :--------: | :-------------: |
| `> 1200px` |     `50vw`      |
| `< 1200px` |     `60vw`      |
| `< 992px`  |     `70vw`      |
| `< 768px`  |     `80vw`      |
| `< 576px`  |     `85vw`      |

### `.sw_flex`

Used for quick center aligment using flexbox.

- `display: flex;`
- `justify-content: center;`
- `align-items: center;`

### `.sw_hr`

Custom `hr` tag.

- `margin: 1rem 0;`
- `border-bottom: 1px solid #e1e4e8;`

### `.sw_text-muted`

Equivalent of `.text-muted` class provided by Bootstrap.

- `opacity: 0.6;`

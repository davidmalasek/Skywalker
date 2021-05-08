<p align="center">
    <img src="./lib/skywalker-logo.png" alt="Skywalker logo" width="150" height="150">
</p>

Skywalker is a CSS library designed to speed up website development, and you can use it as little or as much as you want!

It comes with a set of classes named in CSS propery-value syntax with some extra custom classes. The main advantage is that you don't need to learn anything new and start using Skywalker right now.

On top of that, Skywalker also uses [Bootstrap](https://github.com/twbs/bootstrap) and [normalize.css](https://github.com/necolas/normalize.css/) for styling with a plenty of overrides.

## Main features 💡

### Shortcuts

There is a shortcut for every Skywalker class. For example, shortcut for `.display_flex` is `.d_f`, for `.justify-content_center` is `.j-c_c` and so on.

_Please see additional information about Shortcuts down below._

### Dark theme

Switch between themes by just adding `.sw_dark-theme` (or just `.sw_d-t`) class. This feature is currently under development and is not fully stable.

## Additional information 📄

### Shortcuts

Sometimes the class cannot be shortened completely, for example `.position_static` and `.position_sticky` will both result into ~~`.p_s`~~. In that case, the matching parts will remain untouched and everything else will be shortened. So the example above will result into `.p_static` and `.p_sticky`.

Are you already using shortcuts and cannot remember what some of them stand for? Don't worry. You can open up the Developer Tools in your browser and inspect the element with the unknown shortcut. There will be most likely displayed the full name next to the shortcut in the styles panel.

### Overrides

Skywalker is slightly overriding some settings set by either Bootstrap or normalize.css. Mainly, the [Inter Font Family](https://github.com/rsms/inter/) is used instead of **Native font stack** set by Bootstrap.

## Documentation 📚

If you want to try out Skywalker in your project, go ahead and download the minifed file in the `/dist` directory. The documentation is available [here](DOCS.md).

## License 📜

Project is licensed under the [MIT License](LICENSE).

### [Bootstrap](https://github.com/twbs/bootstrap)

Licensed under the [MIT License](https://github.com/twbs/bootstrap/blob/main/LICENSE).

### [normalize.css](https://github.com/necolas/normalize.css/)

Licensed under the [MIT License](https://github.com/necolas/normalize.css/blob/master/LICENSE.md).

### [Inter Font Family](https://github.com/rsms/inter/)

Licensed under the [SIL Open Font License](https://github.com/rsms/inter/blob/master/LICENSE.txt)

_Both development and production source codes include original code with license info intact._

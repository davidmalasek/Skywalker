# Versions

## 1.2.

- this document has been added to keep track of every change made
- removed `-fresh` version (some default CSS settings are now overriden by default)
- changed naming convention (see below)
- because of the name conv. change, now there is only **1 shortcut** per class (see example below)
- added basic `text-transform` classes

### Notes

As the library expands, some of the shortcuts start to override each other, thats why the naming convention has been changed. This may also improve your experience as a begginer, because the class names now represent both properties and values in full length.

**Explanation:**

- `-` (dash) serves as a separator between words
- `_` (underscore) serves as a separator between properties and values

**Before:**

|    Class name     |       Shortcut       |           Result           |
| :---------------: | :------------------: | :------------------------: |
| `.justify-center` | `.justify-c`, `.j-c` | `justify-content: center;` |

**Now:**

|        Class name         | Shortcut |           Result           |
| :-----------------------: | :------: | :------------------------: |
| `.justify-content_center` | `.j-c_c` | `justify-content: center;` |

### ...

This document is being updated since version **1.2.**

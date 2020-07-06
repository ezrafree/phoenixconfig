# My Phoenix Config

This is my modified version of the Phoenix macOS window manager config found at [github.com/fabiospampinato/phoenix](https://github.com/fabiospampinato/phoenix)

In my setup I have three 2150x1440 resolution monitors, if you do not then the "Move Window to Screen" commands will almost certainly not work for you without some modification, due to a fair amount of hardcoded maths. When I'm using my laptop without the monitors connected, I instead use the "Move Window to Space" commands.

## Install

Install Phoenix

```sh
brew cask install phoenix
```

Allow Phoenix to control your system

```none
System Preferences > Security & Privacy > Accessibility
```

Download and install Karabiner Elements from [pqrs.org/osx/karabiner/](https://pqrs.org/osx/karabiner/)

### Install Phoenix Config

Download this repository to the config directory:

```sh
git clone https://github.com/ezrafree/phoenixconfig.git ~/.config/phoenix/
```

Copy the example config:

```sh
cp config.example.js config.js
```

Edit the first line of `config.js` to set your file path:

```js
const path = "/Users/yourusername/.config/phoenix";
```

Create a `~/.phoenix.js` config file and specify the path to `phoenix.js`:

```js
require("/Users/yourusername/.config/phoenix/phoenix.js");
```

## Debugging

If you run into problems, you can follow the logs with:

```sh
log stream --process Phoenix
```

## Usage

### Sides

| Shortcut  | Description                             |
| --------- | --------------------------------------- |
| `⇪` + `↑` | Move window to the top side of screen   |
| `⇪` + `→` | Move window to the right side of screen |
| `⇪` + `↓` | Move window to the bottom side          |
| `⇪` + `←` | Move window to the left side            |

### Quadrant Corners

| Shortcut  | Description                            |
| --------- | -------------------------------------- |
| `⇪` + `q` | Move window to the top-left corner     |
| `⇪` + `w` | Move window to the top-right corner    |
| `⇪` + `a` | Move window to the bottom-left corner  |
| `⇪` + `s` | Move window to the bottom-right corner |

### Percentage Corners

| Shortcut            | Description                                   |
| ------------------- | --------------------------------------------- |
| `⇪` + `shift` + `a` | Move window to the custom top-left corner     |
| `⇪` + `shift` + `s` | Move window to the custom top-right corner    |
| `⇪` + `shift` + `d` | Move window to the custom bottom-left corner  |
| `⇪` + `shift` + `f` | Move window to the custom bottom-right corner |

### Halves

| Shortcut            | Description                          |
| ------------------- | ------------------------------------ |
| `⇪` + `[`           | Move window to left half of screen   |
| `⇪` + `]`           | Move window to right half of screen  |
| `⇪` + `shift` + `[` | Move window to top half of screen    |
| `⇪` + `shift` + `]` | Move window to bottom half of screen |

### Vertical Thirds

| Shortcut  | Description                |
| --------- | -------------------------- |
| `⇪` + `1` | Move window to the 1st row |
| `⇪` + `2` | Move window to the 2nd row |
| `⇪` + `3` | Move window to the 3rd row |

### Horizontal Thirds

| Shortcut  | Description                   |
| --------- | ----------------------------- |
| `⇪` + `4` | Move window to the 1st column |
| `⇪` + `5` | Move window to the 2nd column |
| `⇪` + `6` | Move window to the 3rd column |

### Expand

| Shortcut                | Description                               |
| ----------------------- | ----------------------------------------- |
| `⇪` + `space`           | Toggle window expansion to fill the space |
| `⇪` + `shift` + `space` | Toggle window expansion to fullscreen     |

### Switch Spaces

| Shortcut                      | Description                       |
| ----------------------------- | --------------------------------- |
| `⇪` + `shift` + (1 through 9) | Switch to spaces one through nine |
| `⇪` + `tab`                   | Switch to the next space          |
| `⇪` + `shift` + `tab`         | Switch to the previous space      |

> Note: To switch to spaces one through nine, you'll need to configure these shortcuts in System Preferences under `Keyboard > Shortcuts`.

### Move Window to Space

| Shortcut            | Description                           |
| ------------------- | ------------------------------------- |
| `⇪` + `shift` + `[` | Move focused window to previous space |
| `⇪` + `shift` + `]` | Move focused window to the next space |

### Move Window to Screen

| Shortcut                | Description                                |
| ----------------------- | ------------------------------------------ |
| `⇪` + `shift` + `left`  | Move focused window to screen on the left  |
| `⇪` + `shift` + `right` | Move focused window to screen on the right |

### Alfred Space Switcher

| Shortcut  | Description              |
| --------- | ------------------------ |
| `⇪` + `⇪` | Lauch the space switcher |

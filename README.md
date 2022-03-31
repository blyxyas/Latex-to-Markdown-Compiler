# Latex to Markdown Compiler

<img src="https://raw.githubusercontent.com/Blyxyas/Latex-to-Markdown-Compiler/master/images/logo.png" />
This is a latex to markdown compiler.

## Usage

Open the target file, open the command palette (With *<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd>* In Windows & Linux, or *<kbd>⌘</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd>* for MacOS), and select Search for **`Compile Latex`**. That's it! It will replace all you latex formulas with the HTML tags that will render them.

## Features

<small>(All this formulas were compiled using the compiler)</small>
Use `$` to open an inline math formula. Like this!

(View the source for this formulas in the [Latex file](https://github.com/Blyxyas/Latex-to-Markdown-Compiler/blob/master/formulas.tex))

This is an inline formula <img src="https://render.githubusercontent.com/render/math?math=\bbox[%230d1117]{\color{%23fff}{E%3Dmc%5E2}}" /> which means that I can keep writing in this line.

You can also use `$$` to open a block math formula.
<h3 align="center"><img src="https://render.githubusercontent.com/render/math?math=\bbox[%230d1117]{\color{%23fff}{F_g%3D%5Cfrac%7BGm_1m_2%7D%7Bd%5E2%7D}}" /></h3>



The blocks are centered and are rendered with a `h3` tag.

## Installation

You can install it from the Command palette using <kbd>Command</kbd> + <kbd>P</kbd> and writing `ext install Blyxyas.latexcompilar`, You can also search for `Blyxyas.latexcompiler` in the integrated Marketplace in Visual Studio Code. **(You can also install it in Visual Studio)**.

### Building it yourself

**You can get the latest version installing it with a VSIX file.**
This is not recommended, see [Installation](#Installation) to install it the recommended way.

1. Clone the repo


```bash
git clone https://github.com/Blyxyas/Latex-to-Markdown-Compiler.git
```

2. Install the `vsce` CLI tool ([Node.js](https://nodejs.org/en/) required)

```bash
npm install -g vsce
```

3. Build the package


```bash
vsce package
```

4. Install it from VSIX

-  1. Open Command Palette (<kbd>Command</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd>)
-  2. Search `Install from VSIX`
-  3. Point to the VSIX file.

Or you can also use the CLI


```bash
code --install-extension PACKAGENAME.vsix
```

\[Replace `PACKAGENAME` to the name of the build you made.]

## Configuration

- `textColor`: Changes the color of the text
- `backgroundColor`: Changes the color of the background

You can use HEX Codes (E.g. `#333`) or a name (e.g. `red`)

## Details

* **You can use `\` to escape the `$` character.**

* The HTML tags for the blocks will be added at the final `$$` of the block. **Everything between the first `$$` and the last `$$` will be removed!**

**Don't do**
```latex
<h3 align="center"><img src="https://render.githubusercontent.com/render/math?math=\bbox[%23101414]{\color{%23fff}{%20BLOCK%20%24%24%60%60%60%2a%2aDo%2a%2a%60%60%60latex}}" /></h3>




BLOCK

```
# Latex to Markdown Compiler

![Pacakge Logo](https://github.com/Blyxyas/Latex-to-Markdown-Compiler/blob/master/images/logo.png)
This is a latex to markdown compiler.

## Usage

Open the target file, open the command palette (With <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd> In Windows & Linux, or <kbd>⌘</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd> for MacOS), and select Search for **`Compile Latex`**. That's it! It will replace all you latex formulas with the HTML tags that will render them.

## Features

<small>(All this formulas were compiled using the compiler)</small>
Use `$` to open an inline math formula. Like this!

(View the source for this formulas in the [Latex file](https://github.com/Blyxyas/Latex-to-Markdown-Compiler/blob/master/formulas.tex))

This is an inline formula <img src="https://render.githubusercontent.com/render/math?math=E=mc%5E2" />, which means that I can keep writing in this line.

You can also use `$$` to open a block math formula.



<h3 align="center"><img src="https://render.githubusercontent.com/render/math?math=F_g%20=%20%5Cfrac%7BG%20m_1%20m_2%7D%7Bd%5E2%7D" /></div>

All blocks are centered and are rendered with a `h3` tag.


## Details

* **You can use `\` to escape the `$` character.**

* The HTML tags for the blocks will be added at the final `$$` of the block. **Everything between the first `$$` and the last `$$` will be removed!**

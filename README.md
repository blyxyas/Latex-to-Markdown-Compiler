# Simple Markdown Compiler

This is a simple markdown compiler.

## Usage

Open the target file, open the command palette (With <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd> In Windows & Linux, or <kbd>⌘</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd> for MacOS), and select Search for **`Compile Latex`**. That's it! It will replace all you latex formulas with the HTML tags that will render them.

## Features


Use `$` to open an inline math formula. Like this!

(View the source for this formulas in the [Latex file](formulas.tex))

This is an inline formula $E=mc^2$, which means that I can keep writing in this line.

You can also use `$$` to open a block math formula.

$$
F_g = \frac{G m_1 m_2}{d^2}
$$

All blocks are centered and are rendered with a `h3` tag.


## Details

* **You can use `\` to escape the `$` character.**

* The HTML tags for the blocks will be added at the final `$$` of the block. **Everything between the first `$$` and the last `$$` will be removed!**

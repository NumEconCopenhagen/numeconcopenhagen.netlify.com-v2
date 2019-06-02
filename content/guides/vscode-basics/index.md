---
title: "Running Python in VSCode"
markup: "mmark"
---

This is a short guide on how to use **Visual Studio Code** (VSCode). Our recommendation is that you for larger projects write your functions and classes as modules in VSCode, and only use Jupyter notebooks for presenting the results.

## 1. Execute Python file


The following step-by-step guide show you how to create a file, write some Python code, and exectute it.

1. **Open folder to work in**: <kbd>Ctrl</kbd>+<kbd>K</kbd>, <kbd>Ctrl</kbd>+<kbd>O</kbd>
2. **Create new file**: <kbd>Ctrl</kbd>+<kbd>N</kbd>
3. **Save new file**: <kbd>Ctrl</kbd>+<kbd>S</kbd> (write e.g. test.py)
4. **Write code**: Write the following lines of code:

    {{< highlight python "linenos=table" >}}
    message = 'hello world'
    print(message)
    {{< / highlight >}}

5. **Exectue file**: <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> + `Python: Run Python File in Terminal`

**Note**: The bottom-left corner should say *Python 3.x 64-bit {'base': conda}* when you have a .py file open. Else click on what ever else it says and choose this. 

## 2. Interactive session

 1. Selecet first line of code + <kbd>Shift</kbd>+<kbd>Enter</kbd> (interactive session launched)
 2. Select second line of code + <kbd>Shift</kbd>+<kbd>Enter</kbd> (code is executed)
 3. In the interactive window write `print(message)` and run with <kbd>Shift+Enter</kbd>
 
 *Note:* You can also select multiple lines to run.

## 3. Find errors in your code

1. **Write code**: Write the following lines of code:

    {{< highlight python "linenos=table" >}}
    message = 'hello world'
    print(message)      
    print(messages) 
    {{< / highlight >}}

2. Save file: <kbd>Ctrl</kbd>+<kbd>S</kbd>
3. Show all errors: <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>M</kbd> 
4. Move the cursor to a line in the python file
5. Find next error: <kbd>F8</kbd> 

## 4. Short-cuts

Use short-cuts for _changing view_:

* New window: <kbd>Ctrl</kbd>+<kbd>N</kbd>
* Open window: <kbd>Ctrl</kbd>+<kbd>O</kbd>
* Close window: <kbd>Ctrl</kbd>+<kbd>F4</kbd>
* Toggle window: <kbd>Ctrl</kbd>+<kbd>tab</kbd>
* Locate symbol: <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>O</kbd>
* Go to symbol: <kbd>F12</kbd> (just peak <kbd>Alt</kbd>+<kbd>F12</kbd>)
* Go to line: <kbd>Ctrl</kbd>+<kbd>G</kbd>
* Zoom: <kbd>Ctrl</kbd>+<kbd>+</kbd> / <kbd>Ctrl</kbd>+<kbd>-</kbd>
* Zen mode: <kbd>Ctrl</kbd>+<kbd>K</kbd>,<kbd>Z</kbd> 

Use smart short cuts for _editing_:

* Move current line: <kbd>Alt</kbd>+<kbd>&uparrow;</kbd> / <kbd>&downarrow;</kbd>
* Copy current line: <kbd>Alt</kbd>+<kbd>Shift</kbd>+<kbd>&uparrow;</kbd> / <kbd>&downarrow;</kbd>
* Cut current line: <kbd>Ctrl</kbd>+<kbd>X</kbd>
* Indent line: <kbd>Tab</kbd>    
* Deindent line: <kbd>Shift</kbd>+<kbd>Tab</kbd>    
* Fold/unfold:
    * single block: <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>´</kbd>  / <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>å</kbd>
    * all: <kbd>Ctrl</kbd>+<kbd>K</kbd>, <kbd>Ctrl</kbd>+<kbd>1</kbd> / <kbd>Ctrl</kbd>+<kbd>K</kbd>, <kbd>Ctrl</kbd>+<kbd>J</kbd>
* Toggle commment: <kbd>Ctrl</kbd>+<kbd>'</kbd> 
* Select multiple occurances: <kbd>Ctrl</kbd>+<kbd>D</kbd> (undo: <kbd>Ctrl</kbd>+<kbd>U</kbd>)
* Select columns: <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>Alt</kbd>

**Change settings** <kbd>Ctrl</kbd>+<kbd>,</kbd>

**Change short cuts?** <kbd>Ctrl</kbd>+<kbd>K</kbd>, <kbd>Ctrl</kbd>+<kbd>S</kbd>

## More infromation

* [Debugging in VSCode](/guides/vscode-debug)
* [Official guides from Microsoft](https://code.visualstudio.com/docs/getstarted/introvideos)
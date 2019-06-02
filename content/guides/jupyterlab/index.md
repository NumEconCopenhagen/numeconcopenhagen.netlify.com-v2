---
title: "Running Python in JupyterLab"
---

JupyterLab is an awesome way of combining text and code in the same framework. This is a short guide on how to use JupyterLab. If you haven't seen JupyterLab before it looks like this: 

{{< figure src="jupyterlab.gif" width="75%" class="text-center">}}

## 1. Starting JupyterLab

_[For installation of JupyterLab see step 1b [here](/guides/python-setup/)]_

1. Open the program **Terminal** (Mac) or **Anaconda Prompt** (Windows)
2. Paste in `jupyter lab` + <kbd>Enter</kbd>

Hopefully, you will experience that you browser automatically opens a new tab looking something like this:

{{< figure src="jupyterlab-open.gif" width="75%" class="text-center">}}

## 2. Creating a notebook

In the *Launcher* tab you create a new Jupyter notebook by pressing the *Python 3* bottom under *Notebook*. Notebooks consists of two types of cells:

1. Code cells with Python code
2. Markdown cells with text (see the guide [Writing markdown](/guides/markdown))

When inside a cell you are in `edit mode`, when not you are in `command mode`.

The most important notebook commands are:

* Movements: Arrows and scrolling
* Run cell and advance: <kbd>Shift</kbd>+<kbd>Enter</kbd>
* Run cell: <kbd>Ctrl</kbd>+<kbd>Enter</kbd>
* Enter edit mode: <kbd>Enter</kbd>
* Enter command mode: <kbd>Ctrl</kbd>+<kbd>M</kbd>
* Change to markdown cell: <kbd>M</kbd> (only in command mode)
* Change to code cell: <kbd>Y</kbd> (only in command mode)

In the left-panel on JupyterLab you can e.g. access:

1. File Browser: To open existing notebooks anywhere on your computer.
2. Running Terminals and Kernels: To shutdown terminals and kernels.
3. Command Palette: To see a list of possible commands.
4. Table of Contents: To see links to sections based on headings (#, ##, ###).

The **interface of JupyterLab** is explained in detail [here](https://jupyterlab.readthedocs.io/en/stable/user/interface.html).

The use of **Jupyter notebooks** in JupyterLab is explained in detail [here](https://jupyterlab.readthedocs.io/en/stable/user/notebook.html).

## 3. Variable inspector
A very nice feature of JupyterLab is that it has a variable inspector that visualize vectors, DataFrames and matrices. You can open it by right-clicking in a notebook and choose "Open Variable Inspector". It looks like this:

{{< figure src="jupyterlab-variable-inspector.gif" width="75%" class="text-center">}}

## 4. Shortcuts

Other good-to-know standard short-cuts are:

* Only in command mode:
   * Create new cell above: <kbd>A</kbd>
   * Create new cell below: <kbd>B</kbd>
   * Cut cell: <kbd>X</kbd>
   * Copy cell: <kbd>C</kbd>
   * Paste cell: <kbd>V</kbd>
   * Delete cell: <kbd>D</kbd>+<kbd>D</kbd>
   * Toggle sidebar: <kbd>Ctrl</kbd>+<kbd>B</kbd>
   * Restart kernel: <kbd>0</kbd>+<kbd>0</kbd>
* Single-document mode: <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>D</kbd>
* Autocomplete (when writing code): <kbd>Tab</kbd>
* Show tooltip: <kbd>Shift</kbd>+<kbd>Tab</kbd> (used when inside function)
  
**Advanced:** Additionally, you can create customized short-cuts. Open settings with <kbd>Ctrl</kbd>+<kbd>,</kbd>. In the `User Overrides` tab paste in the followng:

```
{
    "runmenu:restart-and-run-all": {
      "selector": "[data-jp-code-runner]",        
      "command": "runmenu:restart-and-run-all",
      "keys": [
        "Ctrl Space"
      ]
    },     
    "notebook:move-cell-up": {
      "selector": ".jp-Notebook:focus",
      "command": "notebook:move-cell-up",
      "keys": [
        "Ctrl ArrowUp"
      ]
    },
    "notebook:move-cell-down": {
      "selector": ".jp-Notebook:focus",
      "command": "notebook:move-cell-down",
      "keys": [
        "Ctrl ArrowDown"
      ]
    }, 
    "application:toggle-presentation-mode": {
      "selector": "body",
      "command": "application:toggle-presentation-mode",
      "keys": [
        "Ctrl Shift P"
      ]
    }, 
    "notebook:line-numbering": {
      "selector": ".jp-Notebook.jp-mod-commandMode",        
      "command": "viewmenu:line-numbering",
      "keys": [
        "Ctrl Shift K"
      ]
    }    
}
```

You now have access to the following short-cuts:

1. Restart kernal and run all cells: <kbd>Ctrl</kbd>+<kbd>Space</kbd>
2. Toggle presentation mode: <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd>
3. Toggle line numbers: <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>K</kbd>
4. Move cell up: <kbd>Ctrl</kbd>+<kbd>&uparrow;</kbd> (only in command mode)
5. Move cell down: <kbd>Ctrl</kbd>+<kbd>&downarrow;</kbd> (only in command mode)

## Next guide

[Running Python in VSCode](/guides/vscode-basics)

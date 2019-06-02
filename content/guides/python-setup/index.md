---
title: "Installing Python and VSCode"
---

To follow this course you need:

1. A **Python enviroment** (we will use [Anaconda](https://www.anaconda.com))
2. A **text editor** (we will use [VSCode](https://code.visualstudio.com/), alternatives are [Sublime](https://www.sublimetext.com/), [Atom](https://atom.io/), and [PyCharm](https://www.jetbrains.com/pycharm/))
3. A **git enviroment**

A step-by-step guide is provided below. <br>
  
## Step 1: Install Anaconda

**Note:** The installation might fail if your computer username contains a space or special characters (æ, ø, å, ê, â, î, ô, û, ä, ö, ë, ï, ü, ÿ etc.). The easiest solution is to change your username (otherwise you need to install Anaconda on a path *not* containing your user name).

**Step 1a: Main**

1. Download Anaconda Python 3.7 from <https://www.anaconda.com/download/>
2. Run the installer (custom settings are fine)

**Step 1b: JupyterLab (with extensions)**

1. Open the program **Terminal** (Mac) or **Anaconda Prompt** (Windows)
2. Paste in `conda install -c conda-forge jupyterlab nodejs ipympl` + <kbd>Enter</kbd>
3. Paste in `jupyter labextension install @jupyterlab/toc @jupyter-widgets/jupyterlab-manager jupyter-matplotlib` + <kbd>Enter</kbd>

## Step 2: VSCode

1. Download VSCode from <https://code.visualstudio.com/>
2. Run the installer (custom settings are fine)
3. Open **VSCode**
4. Press <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd>
5. Paste in `Extensions: Install Extensions` + <kbd>Enter</kbd>
6. In the left panel: Search for and install the following extensions (if not already installed):
    * Anaconda Extensions Pack
    * Python  
7. Press <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> again
8. Paste in `Python: Select Interpreter` + <kbd>Enter</kbd> + choose the Anaconda distribution you installed above
9. If on Windows: <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> + paste in `Terminal: Select Default Shell` + <kbd>Enter</kbd> + choose `Command Prompt`

## Step 3: Install Git

1. Go to [GitHub.com](https://github.com/) and sign up
2. Download git from https://git-scm.com/
3. Run installer with all the custom settings
4. Open the program **Terminal** (Mac) or **Anaconda Prompt** (Windows) (close and open it again if already open) 
5. Paste in `jupyter labextension install @lckr/jupyterlab_variableinspector` + <kbd>Enter</kbd>

## Next guide

[Running Python in JupyterLab](/guides/jupyterlab)

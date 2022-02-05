---
title: "Installing Python and VSCode"
---

&nbsp;

To follow this course you need:

1. A **Python enviroment** (we will use [Anaconda](https://www.anaconda.com))
2. A **git enviroment**
3. A **text editor** (we will use [VSCode](https://code.visualstudio.com/), alternatives are [Sublime](https://www.sublimetext.com/), [Atom](https://atom.io/), and [PyCharm](https://www.jetbrains.com/pycharm/))

<br />A step-by-step guide is provided below.
  
&nbsp;

### Step 1: Install Anaconda

<br />**Note:** The installation might fail if your computer username contains a space or special characters (æ, ø, å, ê, â, î, ô, û, ä, ö, ë, ï, ü, ÿ etc.). The easiest solution is to change your username (otherwise you need to install Anaconda on a path *not* containing your user name).

**Step 1a: Main**

1. Download Anaconda Individual Edition Python 3.9 from <https://www.anaconda.com/products/individual>
2. Run the installer (default settings are fine)

&nbsp;

**Step 1b: JupyterLab extensions**

Open the program **Anaconda Prompt** (Windows) or **Terminal** (Mac).
Paste in following commands and hit <kbd>Enter</kbd> one by one:

1. `conda update --all`
2. `conda install -c conda-forge nodejs`
3. `conda install -c conda-forge ipympl`
4. `conda install -c conda-forge ipywidgets`
<!-- 3. Paste in `conda install nodejs ipympl` + <kbd>Enter</kbd> -->
<!-- 4. Paste in `jupyter labextension install @jupyterlab/toc @jupyter-widgets/jupyterlab-manager jupyter-matplotlib` + <kbd>Enter</kbd> (it may take a while to complete) -->

&nbsp;


### Step 2: Install Git and JupyterLab Git extension

&nbsp;

**Git**
1. Go to [GitHub.com](https://github.com/) and sign up
2. Download git from https://git-scm.com/
3. Run installer with all the custom settings

**JupyterLab Git extension**

Open the program **Anaconda Prompt** (Windows) or **Terminal** (Mac) (close and open it again if already open) and paste in: 
* `conda install -c conda-forge jupyterlab jupyterlab-git` + <kbd>Enter</kbd>

&nbsp;

### Step 3: Install variable inspector for JupyterLab

<!-- &nbsp; -->
Open the program **Anaconda Prompt** (Windows) or **Terminal** (Mac) and paste in

* `pip install lckr-jupyterlab-variableinspector` + <kbd>Enter</kbd>

&nbsp;
### Step 4: VSCode

&nbsp;

1. Download VSCode from <https://code.visualstudio.com/>
2. Run the installer (default settings are fine)
3. Open **VSCode**
4. Press <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd>
5. Paste in `Extensions: Install Extensions`  and hit <kbd>Enter</kbd>
6. In the left panel: Search for and install the following extension (if not already installed):
    * Python (by Microsoft, see also the [marketplace website](<https://marketplace.visualstudio.com/items?itemName=ms-python.python>))
7. Press <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> again
8. Paste in `Python: Select Interpreter` + <kbd>Enter</kbd> + choose the one where Anaconda3 is in the path (unless you have installed Python outside of Anaconda and want to use that installation).
9. If on Windows: <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> + paste in `Terminal: Select Default Shell` hit <kbd>Enter</kbd> and choose `Command Prompt`

&nbsp;

### Next guide

<br /> [Running Python in JupyterLab](/guides/jupyterlab)

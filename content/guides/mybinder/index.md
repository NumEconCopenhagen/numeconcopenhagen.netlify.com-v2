---
title: "Creating an interactive version of your code (mybinder.org)"
---

[mybinder.org](https://mybinder.org/)^[The documentation is available [here](https://mybinder.readthedocs.io/en/latest/index.html).] is an awesome way of sharing your Python code and Jupyter notebooks in a GitHub repository by creating an interactive environment, where other people can run (but not change) your code without having Python installed.

## The most simple setup

1. Go to mybinder.org
2. Paste the link to your GitHub repository
3. Under `Path to a notebook file` change from `File` to `URL` and write `lab`
4. Press launch - wait and a JupyterLab session will launch
5. Save the resulting mybinder.org link
6. Share the mybinder.org link with others

## Including dependencies

To include depencies (e.g. _numpy_ and _matplotlib_) you repository need to have a folder called `/binder` in its root directory. This folder must contain a `environment.yml` file with lists of the dependencies. Your `projects-2019-YOURGROUPNAME` repository automatically includes this, and most likely you do not need to change it. For an example of a `environment.yml` file see [here](https://github.com/NumEconCopenhagen/numeconcopenhagen-2019/blob/master/binder/environment.yml). 

**Advanced**: To activate extensions for JupyterLab you additionally need a `postBuild` file. For an example see [here](https://github.com/NumEconCopenhagen/numeconcopenhagen-2019/blob/master/binder/postBuild). 

## Example

{{< figure src="mybinder.gif" width="100%" class="text-center" >}}

## Installing dependencies on-the-fly

In a Jupyter Notebook, a package can always be installed on-the-fly by `!conda install [package1 ...]` (if it is availible on conda) or otherwise by `!pip install [package1 ...]`. 
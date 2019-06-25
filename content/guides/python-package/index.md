---
title: "Distributing python code"
---
Code becomes much more valuable when others can use it. Python provides a very easy and neat way of 
sharing code through python packages. 

We will go through a very minimal example of creating a small python package.

The first thing you should do is to create an empty repository on github.

<img src="https://github.com/NumEconCopenhagen/NumEconCopenhagen.netlify.com-v2/raw/master/content/guides/python-package/creating-repo.gif" alt="creating-repo" width="80%"/>
<br />
<br />

The next thing we need to do is to clone the repository to our computer to add some python code

<img src="https://github.com/NumEconCopenhagen/NumEconCopenhagen.netlify.com-v2/raw/master/content/guides/python-package/cloning-repo.gif" alt="cloning-repo" width="80%"/>
<br />
<br />

The next thing we need to do is to create a folder that contains the code we want to share. In Python you 
name this folder the same as you want to name you package. For instance, we are going to share a function
that prints hello. Hence, we create a folder naming it `name`. Furthermore, we need to add a file 
called `__init__.py` to tell python that this folder is indeed a python module.

<img src="https://github.com/NumEconCopenhagen/NumEconCopenhagen.netlify.com-v2/raw/master/content/guides/init-package/init-package.gif" alt="cloning-repo" width="80%"/>
<br />
<br />

Then we need to create the function we are going to share. We create a file named `hello.py` in the 
`hello` folder. Thus, our directory looks like this

```
minimalpythonpackage/
    hello/
        __init__.py
        hello.py
```

<img src="https://github.com/NumEconCopenhagen/NumEconCopenhagen.netlify.com-v2/raw/master/content/guides/python-package/fun-creation.gif" alt="fun-creation" width="80%"/>
<br />
<br />

If, we launch `ipython` we can now import the module `hello`.

<img src="https://github.com/NumEconCopenhagen/NumEconCopenhagen.netlify.com-v2/raw/master/content/guides/python-package/importing.gif" alt="importing" width="80%"/>
<br />
<br />

In the gif we load the function `hello` from the package `hello` and use the `hello` module. Thus, if the directory structure had been

```python
minimalpythonpackage/
    hello1/
        __init__.py
        hello2.py
```

we would have used the syntax

```python
 from hello1.hello2 import hello
```

Finally, we need to tell `Python` or rather `pip` how to install the package. 
We therefore need to create a setup.py file.

<img src="https://github.com/NumEconCopenhagen/NumEconCopenhagen.netlify.com-v2/raw/master/content/guides/python-package/setup.gif" alt="setup" width="80%"/>
<br />
<br />

We now need to publish the package

<img src="https://github.com/NumEconCopenhagen/NumEconCopenhagen.netlify.com-v2/raw/master/content/guides/python-package/installing.gif" alt="setup" width="80%"/>
<br />
<br />

Finally, you can add a `README.md` file that give instruction about how to use the package. 

A `README.md` file will be shown when you enter the a repository at github.com.
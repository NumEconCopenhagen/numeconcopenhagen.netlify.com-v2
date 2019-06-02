---
title: "Using git in VSCode"
---

This is a short guide on how to use **git** in **Visual Studio Code** (VSCode). The purpose of git is to allow you to easily share your code with collaborators and track the changes each of you make.

**Note:** We assume you have already signed up for GitHub and installed git on your computer. Otherwise, see step 2 in this [guide](/guides/python-setup/).

## 1. Create your first repository

1. Go to [GitHub.com](https://github.com/) and sign in
2. In the lefthand sidebar click on:<br>
    {{< figure src="new.png" width="5%" >}}
3. Choose a repository name
4. In *Add .gitignore* choose *Python*
5. In *Add a license* choose e.g. *MIT License*
6. Click *Create repository*
7. Copy the URL  

{{< figure src="createRepo.gif" width="100%" class="text-center" >}}

## 2. Clone your first repostiory

<kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> + run `git: clone` + write link to repository (from e.g. step 1)

## 3. Work with your first repostiory

1. Open folder with repository (e.g. the one you just cloned in step 2)
2. Download existing changes: <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> + run `git: sync`
3. Make some changes, add/remove files, etc. (it does not matter whether it is done in VSCode, JypterLab or from your OS)
4. Upload new changes: 
  
    1. <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> + run `git: commit all` (choose "Always" if there is a pop-up)
    2. Write commit message
    3. <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> + run `git: sync` (choose "OK, don't show again" if there is a pop-up)
    
<p style="font-size: 20px;"><strong>IMPORTANT NOTE</strong>: To avoid merge conflicts always download existing changes, before you make new ones. This reduces the risk of merge conflicts, where you and your collaborators have changed the same lines of code</p>

{{< figure src="GitCloneCommit.gif" width="100%" class="text-center" >}}

## 4. Merge conflicts

*Skip this if you are a first time user of git*

If you get a **merge conflict**:

1. Resolve conflicts by point-and-click (don't save the file)
2. <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> + run `git: stage all changes`
3. <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> + run `git: commit all`
4. <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> + run `git: sync`
5. Save the file
6. <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> + run `git: commit all`
7. <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> + run `git: sync`

**Problems?** You can undo last commit with `git: undo last commit`

**Worst case:** Make a new clone of the repository and redo the changes file-by-file.
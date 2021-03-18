---
title: "Using git in VSCode"
---

&nbsp;

This is a short guide on how to use **git** in **Visual Studio Code** (VSCode). The purpose of git is to allow you to easily share your code with collaborators and track the changes each of you make.

**Note:** We assume you have already signed up for GitHub and installed git on your computer. Otherwise, see step 3 in this [guide](/guides/python-setup/).

&nbsp;

### 1. Create your first repository

&nbsp;

###### 1.1 If you are the creator of the repository:

1. Go to [GitHub.com](https://github.com/) and sign in
2. Follow [this invitation link](https://classroom.github.com/g/AntGyHF2) to create a group repo in class 2021
3. Create a new team - see bottom of page. Provide the name you want for the team - this will be your permanent group name. 
4. Click **Create team** and wait a moment or two.
5. Now your team's repo has been created following a template design that everyone should use. And you are the only member so far.  

<!-- 2. In the lefthand sidebar click on: <img src="https://github.com/NumEconCopenhagen/NumEconCopenhagen.netlify.com-v2/raw/master/content/guides/vscode-git/new.png" alt="new" width="30"/>
3. Provide a repository name
4. In *Repository template* choose *NumEconCopenhagen/example-2021*
4. Add a description of the repository for good measure 
4. Choose the *Private* option. 
6. Click *Create repository*
7. Copy the URL from your new repository   -->

&nbsp;

###### 1.2 If a group member has already created your team/repository:  

1. Go to [GitHub.com](https://github.com/) and sign in
2. Follow [this invitation link](https://classroom.github.com/g/AntGyHF2) to see all teams in the current class.
3. Find your specific group.
4. Click join group.
5. You are now a group member. (Note: each group can at most have 4 members) 

&nbsp;

###### 1.3 You can also **invite** members to you team:

1. Go to your repository page
2. Go to **Settings** 
3. Choose **Manage access** in the left pane
4. Click the green button **Invite teams or people** 
5. Search for your team members by their Github id.  

&nbsp;

Note: using the template will ensure that you have a .gitignore file and that you are under the MIT open access license. 

&nbsp;
<!-- 
<img src="https://github.com/NumEconCopenhagen/NumEconCopenhagen.netlify.com-v2/raw/master/content/guides/vscode-git/create-repo.gif" alt="create-repo" width="80%"/>
<br />
<br />
 -->
### 2. Clone your first repostiory

<br /><kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> + run `git: clone` + write link to repository (from e.g. step 1)

&nbsp;

### 3. Work with your first repostiory

&nbsp;

1. Open folder with repository (e.g. the one you just cloned in step 2)
2. Download existing changes: <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> + run `git: sync`
3. Make some changes, add/remove files, etc. (it does not matter whether it is done in VSCode, JypterLab or from your OS)
4. Upload new changes: 
  
    1. <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> + run `git: commit all` (choose "Always" if there is a pop-up)
    2. Write commit message
    3. <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> + run `git: sync` (choose "OK, don't show again" if there is a pop-up)
    
&nbsp;

<p style="font-size: 20px;"><strong>IMPORTANT NOTE</strong>: To avoid merge conflicts always download existing changes, before you make new ones. This reduces the risk of merge conflicts, where you and your collaborators have changed the same lines of code</p>
<!-- 
<img src="https://github.com/NumEconCopenhagen/NumEconCopenhagen.netlify.com-v2/raw/master/content/guides/vscode-git/git-clone-commit.gif" alt="git-clone-commit" width="80%"/>
<br />
<br /> -->

### 4. Video guides for working with Git
1. Victor and Christian create a repository and push their project to it [here](https://youtu.be/nWFeHsCAtpE).
2. A short explanation of important concepts and commands in Git, also found in L05, can be seen [here](https://youtu.be/XqxcvWcpEtI).
3. In [this video](https://youtu.be/Aa-qQwNwak0), you'll see some examples of how to make additional commits to the project that Victor and Christian had uploaded. Also, solving merge conflicts. 


### 5. Merge conflicts

<br />*Skip this if you are a first time user of git*

If you get a **merge conflict**:

1. Resolve conflicts by point-and-click (don't save the file)
2. <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> + run `git: stage all changes`
3. <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> + run `git: commit all`
4. <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> + run `git: sync`
5. Save the file
6. <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> + run `git: commit all`
7. <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> + run `git: sync`

&nbsp;

**Problems?** You can undo last commit with `git: undo last commit`

**Worst case:** Make a new clone of the repository and redo the changes file-by-file.
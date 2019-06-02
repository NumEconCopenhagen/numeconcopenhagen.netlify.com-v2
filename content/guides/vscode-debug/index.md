---
title: "Debugging in VSCode"
---

This is a short guide on how to use the **debugger** in **Visual Studio Code** (VSCode). The debugger allows you to stop the execution of your program at a breakpoint you choose, and then go through the code line-by-line to investigate the behavior of your program in detail. This is very beneficial for locating bugs (errors).

1. **Add breakpoint:** <kbd>F9</kbd> (*not on empty line*)
2. **Start:** <kbd>F5</kbd>
3. **Steps:** 

    1. **Into**: <kbd>F11</kbd> (go into functions)
    2. **Over**: <kbd>F10</kbd> (go over functions)  
    3. **Out**: <kbd>Shift</kbd>+<kbd>F11</kbd> (continue until current function is finished)
  
4. **Continue:** <kbd>F5</kbd> (to next breakpoint)
5. **Stop:** <kbd>Shift</kbd>+<kbd>F5</kbd>

**Tutorial:**

1. Write the following code

    {{< highlight python "linenos=table" >}}
    def f(a,b):
        a += 2
        b += 2
        g(a,b)

    def g(a,b):
        a += 1
        b += 1

    a = 0
    b = 0

    f(a,b)
    f(a,b)
    f(a,b)
    f(a,b)
    f(a,b)
    print(a,b)
    {{< / highlight >}}

2. Add breakpoint on line 11
3. Start debugger
4. Experiment with stepping into, over and out
5. Notice that the "Variables" window show the current values of all variables
6. Open the debug console with <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>Y</kbd> 
7. Try writing e.g. `a+2`

{{< figure src="vscode-debug-gif.gif" width="75%" class="text-center" attr="The terminal and browser after you've executed the command `jupyter notebook`">}}


**Bonus info:** 

1. It also stops at errors.
2. Breakpoints can be made conditional (right click on it in list or by line number)

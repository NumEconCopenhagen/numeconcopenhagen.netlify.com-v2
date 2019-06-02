---
title: "Searching for answers using Google and StackOverflow"
---

Learning to program can be difficult and annoying. This guide aims at helping you to help yourself. First of all, learning to program does not mean that you should remember all features of a language, but rather that you are able to quickly solve the problems you come across. 

The far most important skill for an efficient programmer is to be good at googling because google answers _all_ your questions. 

## An example

Let us consider an example. Say, that I create the following string and store it in a variable.

{{< highlight python "linenos=table" >}}
# Creating a string, and stores is as `s`
s = "thisisastring"

# Let's try to replace `t` at index 0 with `k` and see what happens
s[0] = "k"
{{< / highlight >}}

This results in the following:

{{< highlight python "linenos=table" >}}

>>> # Creating a string, and stores is as `s`
... s = "thisisastring"
>>>
>>> # Let's try to replace `t` at index 0 with `k` and see what happens
... s[0] = "k"
Traceback (most recent call last):
  File "<stdin>", line 2, in <module>
TypeError: 'str' object does not support item assignment
{{< / highlight >}}

Python tells us that we made a `TypeError`, and that `str` objects doesn't support item assignment. At first, these seems not very helpful because without prior programming experience this does not make sense. But let us try to see what happens if copy the line, and see what google suggest us. 

{{< figure src="google-str-object-assign-error.gif" width="100%" class="text-center" attr="A Jupyter Notebook">}}

As we see the first example seems rather advanced, so we continue to the second suggestion. Here we see that _Python_ doesn't allow us to change already created strings, but we are able to create a new string from slices of strings. Thus, this would result in what we tried to achieve.

{{< highlight python "linenos=table" >}}
# Assign `thisisastring` to the variable `s`
s = "thisisastring"

# Concatenate "k" with all characters from the string s from index 1 
# and until the end of the string to the variable `s2`
s2 = "k" + s[1:]
s2
{{< / highlight >}}

Executing the code yields:
{{< highlight python "linenos=table" >}}

>>> s = "thisisastring"
>>>
>>> # Concatenate "k" with all characters from the string s from index 1 
>>> # and until the end of the string to the variable `s2`
... s2 = "k" + s[1:]
>>> s2
'khisisastring'
{{< / highlight >}}

## Conclusion

The best way to seek answers to your questions is to google the error codes. The forum [StackOverflow](https://stackOverflow.com) was created to answer questions related to programming.

The second point to emphasize is that search engines tends to remove all special characters. This means that if you search for some code most of the code will be deleted. Therefore it is important to either search for the error code or words that identifies the problem.

Finally, google tends to be better at finding the right StackOverflow issue than StackOverflows search engine, so you would probably rather google your issues than searching for the answer on StackOverflow.

**Still not finding an answer?** Ask your question in the course forum using GitHub issues, [see this guide](/guides/github-issues).

**Asking questions on StackOverflow:** You can ask your questions on StackOverflow and someone will most probably answer them, but please make sure that you have ensured that the question has not been asked before. Some programmers tends to be rather angry if someone asks a question that has been answered earlier on.
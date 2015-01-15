InflectionDearYoungerMe
=======================

Everytime you work on a task, create a new branch for it. This helps you make sure that you don't break the current master branch, and you can isolate all your code to just your own.

Before your task
-----------------
Here is how you create a new branch:
1. `git checkout master` if you aren't already on master.
2. `git pull` so you can get the latest code.
3. `git checkout -b [new_branch_name]` so you can create a new branch named `[new_branch_name]` (replace `[new_branch_name]` with any name that makes sense.) Note: `-b` is the flag that lets you create a new branch. If you forget to type `-b` then git will complain.
4. You should now be on your new branch. Type `git branch` to verify where you are.
5. Start coding!

During your task
----------------
Try to organize your thinking so that you can make changes or write code in small steps. When you think you have made a change or written a piece of code that is "correct" and you feel comfortable saving your progress, here's how to do a commit:

1. `git status` to see what files you've changed.
2. `git add .` to add all of the files you want to save your progress on (yes, that's a dot at the end).
2. `git commit -m "some message here"` to commit your changes (meaning, saving your progress).


After your task
---------------
When you're done, you want to "sync" your branch, meaning update the remote repo, here's what you do:

In the git client:
1. Click "sync" or "publish"

On the terminal:
1. `git status` to see if you have any uncommited changes. If you do, commit them (see During your task above)
2. `git push origin HEAD` to "push" up your branch
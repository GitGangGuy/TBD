# Contributing

Wether you're experiencing a bug, have an idea or want to suggest a feature, opening an issue is the very first thing to do. This allows you to gather feedback from others, makes automation easy and organizes development.
Note that we have a [Code of Conduct](CODE_OF_CONDUCT.md), please follow it in all your interactions with the project.

## Trunk based development

This repository follows the guidelines of [Trunk based development](https://trunkbaseddevelopment.com/). We use the 'scalable' approach of branching off and merging into master using issues and pull requests (details on this can be found in the section below). Make sure to **never rebase or squash**, as the former breaks other peoples local development on your feature branch and both do not keep a clean history of where commits in master originated from. Here are some `yarn` scripts we use to help you out:

-   `yarn do:sync`: Stashes any uncommited changes, pulls remote changes for the current branch and adds remote branch tracking to untracked local branches
-   `yarn do:commit`: Commits all changes with a [conventional commit](https://github.com/commitizen/cz-cli) message using [commitizen](https://github.com/commitizen/cz-cli)
-   `yarn do:push`: Push local commits to the remote repository (our repository if you have push access or your fork)
-   `yarn do:master`: Merge any changes from master into the current branch, using a conventional commit message. This is only needed when hotfixes or dependent features from master need to be applied to the current branch. Note that updating the current branch just for the associated pull request to pass is done automatically.

## It starts with an issue

0. If your feature proposal isn't fully finished yet, consider allowing others to contribute in Discussions.
1. Check if an existing issue already addresses what you came for. You can use the GitHub issues search bar for this; don't forget to remove the `is:open` filter to also see closed issues from the past.
2. We do not accept support questions in the issue section. They will be closed automatically and will not be read.
3. Please fill out one of the issue templates as good as you can. They provide valuable information to us.
4. Once a contributor feels like he wants to tackle the issue, he can assign himself to it. This will automatically create an issue branch like `<ISSUE-NUMBER>-<SUBJECT>`, ready to be pushed to.
5. Once the assigned contributor pushes to the created branch, a draft pull request is opened so others can follow and comment on the implementation progress.
6. The pull request might become out-of-date with master. A bot should automatically resolve this before merging.
7. Once the PR is ready to be merged, consider adding reviewers. Then convert the draft pull request into a regular pull request by clicking on "Ready for review".
8. A bot will automatically update the branch and merge it into master, assuming all tests & reviews have passed.
9. If the PR has been merged, the issue is closed. If the PR has been closed, the issue remains open.

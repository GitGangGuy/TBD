<h1 align="center" style="font-size: 45px; border: none; padding: 0; margin: 0;">🦥 TBD 🎋</h1>
<h3 align="center"style="margin: 10px;">Your trunk based git development cli</h3>
<p align="center" style="margin: 0; padding: 0;">
  <a href="LICENSE.md"><img src="https://img.shields.io/github/license/GitGangGuy/TBD" alt="GitHub license badge" /></a>
  <a href="#"><img src="https://img.shields.io/github/commit-activity/m/GitGangGuy/TBD" /></a>
  <a href="#"><img src="https://img.shields.io/github/last-commit/GitGangGuy/TBD" /></a>
</p>
<hr style="height: 2px; margin: 5px;" />
<p align="center">
  <a href="#introduction">Introduction</a> •
  <a href="#usage">Usage</a> •
  <a href="#recommendations">Recommendations</a> •
  <a href="#plans">Plans</a> •
  <a href="#license">License</a>
</p>

## Introduction

TBD is a [trunk based development](https://trunkbaseddevelopment.com/) frontend for git, providing a command-line interface to perform common git operations like syncing, merging, pulling and pushing without the hassle and uniformly in every single contributors environment. It has been designed to work well with trunk based development workflows using short-lived feature branches and some additional features such as provider-specific issue and PR integration are already planned. It comes with integrated [conventional commit](https://www.conventionalcommits.org/en/v1.0.0/) support, enforcing [unromantic]() and understandable commit messages using [commitizen](https://github.com/commitizen/cz-cli).

## Usage

The following commands are provided by `tbd`:
 - `tbd sync`: Syncs all remote changes into your local branches and vice-versa. Calls `tbd pull` and `tbd push` internally
 - `tbd pull`: Automagically pulls all remote changes to your local environment with rebasing. It will also delete all local branches deleted on remote, track all locally untracked branches from remote, and create any branches locally that have been created on remote.
 - `tbd push`: Pushes local changes to its remote branch. If the local branch is untracked, it will run `tbd pull` before pushing, which attempts to track a same-named remote branch. If this fails, TBD will abort.
 - `tbd update`: Merges changes from master into the current feature branch. This intentionally doesn't rebase to avoid breaking the commit history for others.
 - `tbd commit`: Stages all unstaged changes and commits them using commitizen and conventional commits

## Recommendations

The following GitHub apps from others complete the development experience:
 - [Semantic pull requests](https://github.com/zeke/semantic-pull-requests) - Enforce semantic commit PR title and commits
 - [Auto merge](https://github.com/bobvanderlinden/probot-auto-merge) - Automatically merge PRs that are ready
 - [Create issue branch](https://github.com/robvanderleek/create-issue-branch) - Automatically create an issue branch when somebody is assigned to an issue

## Plans

The following commands are planned for the future:
 - `tbd issue`: Open an issue detailing a new feature or bugfix
 - `tbd create`: Create a feature branch from an issue in the remote repository
 - `tbd commit`: Add functionality to automatically create a draft pull request in the remote repository once pushing
 - `tbd review`: Convert the draft pull request assigned to the branch into a regular pull request, ready for review
 - `tbd merge`:  Merge the regular pull request associated with the current branch into master if all checks have passed

 ## License

This project is licensed under the GNU Lesser General Public License (`GNU LGPL`).<br />
It is free software: you can redistribute it and/or modify it under the terms of the GNU Lesser General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version. This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Lesser General Public License for more details. A copy of the GNU Lesser General Public License Version 3 should be distributed along with this program [here](LICENSE.md). If not, see [https://www.gnu.org/licenses/](https://www.gnu.org/licenses/).
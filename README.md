<h1 align="center" style="font-size: 45px; border: none; padding: 0; margin: 0;">🦥 TBD 🎋</h1>
<h3 align="center"style="margin: 10px;">TBD makes trunk based development in your GitHub repositories easy</h3>
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

TBD is a [trunk based development](https://trunkbaseddevelopment.com/) app for GitHub, providing deep integration with trunk-based development workflows for your GitHub projects. It enforces [conventional commit](https://www.conventionalcommits.org/en/v1.0.0/) messages, a common [ISSUE->PR workflow](wiki/Workflow.md) and traceability from a commit back to its original issue. It aims to replace most other workflow-related GitHub apps with one unified solution.

## Setup

This project is still under development and hasn't been published to GitHub's marketplace yet. Stay tuned!  
Here are some instructions for local development or self-hosting:

### Development

I use yarn!

```sh
# Install dependencies
yarn

# Run the bot in dev mode
yarn dev
# To run in production: yarn prod
```

### Deployment

Deploy using Docker:

```sh
# Build container
docker build -t tbd-probot .

# Start container
docker run -e APP_ID=<app-id> -e PRIVATE_KEY=<pem-value> tbd-probot
```

## License

This project is licensed under the GNU Affero General Public License (`GNU AGPL 3.0-only`).<br />
It is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, version 3. This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details. A copy of the GNU Affero General Public License Version 3 should be distributed along with this program [here](LICENSE.md). If not, find it on [the official GNU license website](https://www.gnu.org/licenses/).

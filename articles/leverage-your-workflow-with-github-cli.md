---
id: 1f18b5ac-1811-4f62-b9f6-4e8dd1a395ca
title: Leverage your workflow with Github CLI
description: Let's explore the benefits of using Github Cli and walk you through some of its most useful features. I'll also show you how to get started with Github Cli and provide some tips for using it effectively.
slug: leverage-your-workflow-with-github-cli
publishedAt: 2023-05-02T03:45:00.000Z
---

As a programmer, I like to make my work easier and faster. I especially enjoy using the terminal for everything. Github Cli is a command-line interface (CLI) for Github that allows you to perform common Github actions directly from your terminal. With GitHub CLI you can,

* View, create, clone, and fork repositories
* Create, close, edit, and view issues and pull requests
* Review, diff, and merge pull requests
* Run, view, and list workflows
* Create, list, view, and delete releases
* Create, edit, list, view, and delete gists
* List, create, delete, and connect to a codespace

In this blog, I'll explore the benefits of using Github Cli and walk you through some of its most useful features. I'll also show you how to get started with Github Cli and provide some tips for using it effectively.

## Managing repositories with GitHub CLI

Managing repositories with GitHub CLI is a breeze. You can create new repositories, clone repositories, and even fork repositories directly from your terminal. You can also view information about repositories, such as their description, stars, and forks.

Github CLI also allows you to perform other common repository tasks, such as creating and managing branches, merging pull requests, and more.

## Creating repositories with GitHub CLI

Creating a new repository with Github CLI is straightforward. First, navigate to the directory where you want your new repository to be created. Then, use the following command:

```batchfile
# create a repository interactively
gh repo create

# create a new remote repository and clone it locally
gh repo create my-project --public --clone

# create a remote repository from the current directory
gh repo create my-project --private --source=. --remote=upstream
```

To create a new repository using Github CLI, you need to give it a name and description and specify whether it should be private or public.

Once you provide all the information, Github CLI will create the new repository and download it to your computer. You can then start working on your project and upload your changes to Github using standard Git commands.

## Cloning Repository with Github CLI

Cloning repositories with Github CLI is as easy as running the following command in your terminal:

```batchfile
gh repo clone [repository]
```

To clone a repository, replace `[repository]` with the name of the repository you want to clone. You can also use the `-d` or `--clone` option followed by the desired directory name to specify where to clone the repository.

This command lets you clone the repository to your computer so you can make changes and work together on the project with others.



```batchfile
# Cloning a repository using OWNER/REPO syntax.
~/Projects$ gh repo clone cli/cli

# Using github url
~/Projects/my-project$ gh repo clone https://github.com/cli/cli
```

## For managing repositories



```batchfile
# Delete a GitHub repository.
gh repo delete [<repository>]
# Fork a GitHub repository current directory
gh repo fork [<repository>]
# Fork a GitHub repository in 
gh repo fork [<dir>]
# List repositories by owner
gh repo list [<owner>] [flags]
# sets the default remote repository to use when querying the GitHub API
gh repo set-default [<repository>] [flags]
# sync the current repository with the main repository
gh repo sync [<destination-repository>] [flags]
```

## Managing pull requests

Using GitHub CLI can help you save time by managing issues and pull requests directly from your terminal. With GitHub CLI, you can create, view, and manage issues and pull requests, review pull requests, comment on issues, and assign tasks to other users.

```batchfile
# View pull requests
gh pr view [number]

# Check out a pull request in git
gh pr checkout {<number> | <url> | <branch>} [flags]

# Show CI status for a single pull request.
gh pr checks

# Close pull request
gh pr close {<number> | <url> | <branch>} [flags]

# View changes in a pull request.
gh pr diff [<number> | <url> | <branch>] [flags]

# List pull requests
gh pr list [flags]
```

## Managing GitHub issues

GitHub CLI can help you manage issues in your repository. You can create, view, and manage issues directly from your terminal. You can also add labels, assignees, and milestones to issues, and close and reopen them.



```batchfile
# Create an issue
gh issue create

# Close an issue
gh issue close <number>

# Reopen an issue
gh issue reopen <number>

# List and filter issues in this repository
gh issue list [flags]

# List the labels of an issue
gh issue list-labels [<number>]

# Add a label to an issue
gh issue add-label <label> [<number>]

# Remove a label from an issue
gh issue remove-label <label> [<number>]

# Assign an issue to a user
gh issue assign <username> [<number>]

```

Managing issues using GitHub CLI is straightforward and can save you a lot of time.

Github CLI is a helpful tool that can simplify your work and make it faster. With its command-line interface, you can do common Github actions right from your terminal, saving time and increasing productivity. It has features to manage repositories, pull requests, or issues, making work easier. Try it out and see how it can improve your workflow.

## Resources

* [https://cli.github.com/manual/gh_issue](https://cli.github.com/manual/gh_issue)
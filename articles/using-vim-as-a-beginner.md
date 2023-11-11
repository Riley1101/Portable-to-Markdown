---
id: 254d29a0-90ad-45a4-ad72-5760206227da
title: Using Vim as a beginner
description: Let's talk about some of the basic motions in Vim and how you can start practicing it as a beginner.
slug: using-vim-as-a-beginner
publishedAt: 2023-04-27T18:23:00.000Z
---

## Introduction

Vim is a popular and powerful text editor used by developers, system administrators, and other advanced users. It was created in the early 1990s by Bram Moolenaar, who wanted to build a text editor that was more user-friendly and powerful than the ones available at that time. Vim is an improved version of the Unix text editor Vi, and although it is mostly used on Unix-based systems, it can also be used on other platforms.

Vim has a unique way of editing called modal editing. It lets you switch between different modes for different tasks. The most common modes are Normal mode, Insert mode, and Visual mode. Each mode gives you different commands and features. You can also change Vim a lot with plugins and settings. This makes Vim a powerful tool for many things.

Using Vim promotes a keyboard-centric coding style that improves your efficiency and productivity. You can navigate your code faster by avoiding the mouse and using Vim's powerful keyboard shortcuts to move around your document, select the text, and perform actions. By keeping your hands on the keyboard, you can maintain focus and speed up your workflow.

## Modes in Vim

### Normal Mode

When you first open Vim, you'll be in Normal mode. This is the default mode and it's used for navigating and manipulating text. In normal mode, you'll mostly use your cursor to move around. Here are some of the most commonly used commands in Normal mode. You can go back to Normal mode from other modes with the `Esc` key.

### Visual Mode

Visual mode is used for selecting and manipulating blocks of text. You can enter Visual mode by pressing `v `in Normal mode. Once you're in Visual mode, you can use the same movement commands as in Normal mode to select text.

### Insert Mode

Insert mode lets you add new text to your document. You'll use it most often when coding in Vim. To enter `i`. To start typing in the document, press the `i` key while in Normal mode. This will take you to Insert mode, where you can type like you would in any other text editor.

## Vim Motions

In Vim, you can use motions to move the cursor around the document quickly and precisely. Motions are commands that you type using one or more keys, like melodies. They allow you to perform different types of movements with varying lengths and degrees of precision.

One thing I like about Vim is how it lets you combine those motion melodies to finish your daily tasks quickly and easily. Some of the basic motions in Vim allow you to move the cursor around the document quickly and precisely.

- `h`,, `j`, `k`, `l`: Move the cursor left, down, up, and right, respectively.
- `A`: Mode the cursor at the end of the line
- `$`: Move the cursor to the end of the current line.
- `gg`: Move the cursor to the first line of the document.
- `G`: Move the cursor to the last line of the document.
- `w`: Move the cursor to the beginning of the next word.
- `b`: Move the cursor to the beginning of the previous word.
- `e`: Move the cursor to the end of the current word.
- `%`: Move the cursor to the matching opening or closing bracket, parenthesis, or brace.
- `0`: Move the cursor to the beginning of the current line.

At first, when using Vim, try to get familiar with the basics of motion.

One of the great things about Vim motion is that you can combine them with numbers.

For instance, you can use numbers before movement commands to repeat them. If you want to move down 5 lines, type `5j`. If you want to move to the beginning of the 10th word on the current line, type `10w`. By combining modifiers and counts with basic motions, you can perform complex movements in your document with just a few keystrokes.

Try copying the following snippet and moving your cursor around in Vim to get a feel for how Vim's motion commands work. It's a maze and plus signs are walls.

```javascript
___________________________________
| _____ |   | ___ | ___ ___ | |   | |
| |   | |_| |__ | |_| __|____ | | | |
| | | |_________|__ |______ |___|_| |
| |_|   | _______ |______ |   | ____|
| ___ | |____ | |______ | |_| |____ |
|___|_|____ | |   ___ | |________ | |
|   ________| | |__ | |______ | | | |
| | | ________| | __|____ | | | __| |
|_| |__ |   | __|__ | ____| | |_| __|
|   ____| | |____ | |__ |   |__ |__ |
| |_______|_______|___|___|___|_____|
```

> Typing in Vim feels like playing a game.

While learning Vim, it's important not to try to remember every motion you just learned. Instead, try to use them one by one slowly and you will get a feel for the motions. Typing in Vim feels like playing a game, so don't be afraid to experiment and try new things. You will be able to use more and more motions as you progress.

## Editing in Vim

In Vim, you will be editing text most of the time in insert mode.

There are several ways to enter insert mode in Vim. One of the most commonly used methods is to press the `i` key. Another way to enter insert mode is to press `a` key, which will insert text after the current cursor position which you will find yourself using most of the time.

Similarly, `I` and `A` keys can be used to insert text at the beginning and end of the current line, respectively. In addition to these basic methods, Vim also provides other ways to enter insert mode, such as using the `s` key to delete the character under the cursor and enter insert mode, or using the `S` key to delete the current line and enter insert mode.

Overall, Vim offers a variety of options for entering insert mode, depending on your needs and preferences. I personally like to practice adding and removing text in a markdown file.

```undefined
# My To-Do List

- [ ] Buy groceries
- [ ] Clean the house
- [ ] Finish coding project

## Shopping List

- Apples
- Bananas
- Chicken breasts
- Broccoli

## Cleaning Tasks

- Vacuum the carpets
- Dust the furniture
- Clean the bathrooms

## Coding Tasks

- Refactor the code
- Write unit tests
- Add a new feature
```

### Entering Insert Mode

- `i`: Inserts text before the cursor.
- `a`: Inserts text after the cursor.
- `I`: Inserts text at the beginning of the line.
- `A`: Inserts text at the end of the line.
- `o`: Inserts a new line below the current line and enters insert mode.
- `O`: Inserts a new line above the current line and enters insert mode.
- `s`: Deletes the character under the cursor and enters insert mode.
- `S`: Deletes the current line and enters insert mode.
- `{`: Move to the beginning of the current paragraph.
- `}`: Move to the beginning of the next paragraph.

## Visual Mode

Visual mode allows you to select text like you would with a mouse. Press `v` in Normal mode to enter Visual mode, then use the same movement commands to select text.

This highlights the character under the cursor. Move the cursor to select the text you want to manipulate. Once you have selected the text, you can use various commands, such as `d` to delete, `y` to copy, or `c` to delete and enter Insert mode.

For example, to delete selected lines, use a motion command to select the lines you want to delete, then press `d` twice.

Here's how to delete the current line and the line below it:

1. Move the cursor to the line you want to delete.
2. Enter Visual mode by pressing `v`.
3. Use the `j` key to select the current line and the line below it.
4. Press `d` twice to delete the selected lines

### Command mode

In Vim, command mode is where you can run commands and do things to the text like search and replace, copy and paste, and save and quit files. To get into command mode, type a colon (`:`) followed by a command while in normal mode.

Here are some commonly used commands in command mode:

- `:w`: Save the current file
- `:q`: Quit Vim
- `:q!`: Force quit Vim without saving changes
- `:wq`: Save changes and quit Vim

You can also use command mode to run external commands or scripts. To do this, use the`:!` prefix followed by the command you want to run. For example, to run the `ls` command to list the files in the current directory, you would type`:!ls`.

## netrw Vim’s builtin file manager

`netrw` is a file manager that comes with Vim. You can use it to browse and manage files and directories right from Vim. You can navigate through the directories using Vim's motion commands and perform actions on files and directories using Vim's built-in commands.

When using Vim's file manager, called `netrw`, there are commands that can help you move around directories and files easily.

For example, `Ex` opens a new window with the current directory, `Sex` opens a new window with the current directory and selects the current file, `Vex` opens a new vertical window with the current directory, `Texplore` opens a new tab page with the current directory, and `:Rex` opens the current file in a read-only window. It's important to note that you can enter `netrw` using `:Explore` . Once inside `netrw`, use these commands to move around your project easily.

- `:Ex`: Open a new window with the current directory
- `:Sex`: Open a new window with the current directory and select the current file
- `:Vex`: Open a new vertical window with the current directory
- `:Texplore`: Open a new tab page with the current directory
- `:Rex`: Open the current file in a read-only window

## Customizing Vim

Vim is a text editor that can be personalized to your liking. To change Vim's behavior, you can create or modify a file called `.vimrc` in your home directory. This file contains commands and settings that Vim uses when it starts up.

You can adjust Vim's appearance and behavior by adding or changing settings in your `.vimrc` file. For instance, you can modify the color scheme, establish the default tab size, or configure Vim to automatically save changes when you close it.

Here are some common settings you might want to incorporate into your `.vimrc` file:

- `set number`: Shows line numbers in Vim.
- `set tabstop=4`: Sets the default tab size to four spaces.
- `set expandtab`: Converts tab characters to spaces.
- `set autoindent`: Automatically indents new lines to match the previous line.
- `set hlsearch`: Highlights search results.
- `set ignorecase`: Makes search case-insensitive.
- `set smartcase`: Makes search case-sensitive if the search string contains uppercase letters.

To edit your `.vimrc` file, open your terminal and type `vim ~/.vimrc`. This will open the file in Vim. Add or modify settings as desired, then save and exit the file.

## Practicing Vim as a beginner

I personally started practicing [VimAdventure](https://vim-adventures.com/) a browser-based game. I recommend this game to anyone who wants to improve their skills in Vim or similar tools. Playing the game helped me get comfortable with Vim and typing on the keyboard.

I personally started practicing Vim a browser-based game. I recommend this game to anyone who wants to improve their skills in Vim or similar tools. Playing the game helped me get comfortable with Vim and typing on the keyboard.

### Resources

Here are some resources to help you learn more about Vim:

- [Vim Adventures](https://vim-adventures.com/): A browser-based game that teaches you Vim commands by having you solve puzzles.
- [Vim Cheat Sheet](https://vim.rtorr.com/): A printable cheat sheet of common Vim commands.
- [Vimcasts](http://vimcasts.org/): A series of screencasts that cover different aspects of Vim.
- [Practical Vim](https://pragprog.com/titles/dnvim2/practical-vim-second-edition/): A book by Drew Neil that covers practical, real-world Vim usage.
- [ThePrimeagen](https://www.youtube.com/@ThePrimeagen)

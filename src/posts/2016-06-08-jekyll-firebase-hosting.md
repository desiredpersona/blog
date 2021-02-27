---
title: Deploy Jekyll to Firebase Hosting
description: Host Jekyll on Firebase's global content-delivery network (CDN).
date: 2016-06-08T02:00:00Z
lastModified: 2018-03-20T11:40:01Z
tags:
  - Jekyll
  - Firebase
  - Web Hosting
  - Jamstack
---

Firebase Hosting is a developer focused static web hosting provider that is super fast, secure and reliable. You can quickly and easily deploy your static websites to a global content-delivery network (CDN) with a single command.

Key features of Firebase Hosting include:

- CDN-backed global content delivery.
- Free Automatic SSL certificate provisioning.
- Custom (and even naked) domain support.
- One-command deploys; one-click rollbacks.

Ready to get started?

## Create a Google Firebase Account

{% image "./src/img/firebase-hosting.png", "firebase hosting homepage", "100vw" %}

Sign in to the [Firebase Console](https://firebase.google.com){rel="nofollow"} and create a new project. You will be prompted to enter a ‘Project name’ and choose a ‘Country/region’.

## Install Xcode

Go to the Mac app store and Install Xcode if you haven't already. Then install Xcode Command Line Tools with the follow command

```shell
xcode-select --install
```

## Install Node.js using Homebrew

The Firebase CLI (Command Line Interface) requires Node.js and npm. Installing Node.js will also install npm.

To install [Homebrew](https://brew.sh){rel="nofollow"} just open the Terminal app on your Mac and run

```shell
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)”
```

If you have previously installed Homebrew make sure you have the latest version.

```shell
brew update
```

Now you can install Node

```shell
brew install node
```

It worth mentioning you can update Node at a later date using this Homebrew command

```shell
brew upgrade node
```

Check what version of Node you have installed. The Firebase CLI requires Node.js version 0.10.0 or greater.

```shell
node -v
```

You can also check what version of npm was installed

```shell
npm -v
```

## Installing the Firebase CLI

Once you have Node.js and npm installed, you can then install the Firebase CLI via npm

```shell
sudo npm install -g firebase-tools
```

When Firebase is finished installing you will need to login

```shell
firebase login
```

When prompted, allow Firebase to collect anonymous CLI usage information by typing <kbd>Y</kbd> in Terminal and hitting the <kbd>Return</kbd> key. Your browser will now automatically open to allow you to sign-in to your Google account and accept some permissions.

## Setting up a Firebase Project

Change directory to your Jekyll website’s directory.

```shell
cd ~/Sites/Jekyll/desiredpersona
```

Create a Firebase project

```shell
firebase init
```

Running the firebase init command creates a ‘firebase.json’ settings file in the root of your Jekyll website’s directory.

In Terminal you will be prompted to answer a few questions

**What Firebase CLI features do you want to setup for this folder?**

The only option we need to select here for our Jekyll static website is ‘Hosting’. Press the <kbd>Spacebar</kbd> key to deselect ‘Database’ and then hit the <kbd>Return</kbd> key.

**What do you want to use as your public directory? (public)**

You need to set `_site` to be used as your public directory.

**Configure as a single-page app (rewrite all urls to /index.html)? (y/N)**

Type the letter <kbd>N</kbd> for No.

**File \_site/404.html already exists. Overwrite? (y/N)**

Type the letter <kbd>N</kbd> for No.

**File \_site/index.html already exists. Overwrite? (y/N)**

Type the letter <kbd>N</kbd> for No.

**What Firebase project do you want to associate as default?**

Choose your Firebase project folder that you created earlier in this tutorial from the list. Firebase initialization is now complete!

## Deploy your Website to Firebase

Open your ’firebase.json’ file located in your Jekyll website’s root directory and add any files you want to ignore when Firebase deploys your website. Here’s what my file currently looks like

```json
{
  "hosting": {
    "public": "_site",
    "ignore": ["firebase.json", "Gemfile", "Gemfile.lock", "Rakefile", "CNAME", "README.md"]
  }
}
```

You can find out more about the ‘firebase.json’ file settings in the [Firebase Documentation](https://firebase.google.com/docs/hosting/full-config#section-firebase-json){rel="nofollow"}.

Just like Jekyll, Firebase has a built in server which allows you to preview your website locally using this command

```shell
firebase serve
```

Now you can view your Jekyll website at [http://localhost:5000](http://localhost:5000){rel="nofollow"}

When you are ready you can deploy your website to Firebase hosting using the command

```shell
firebase deploy
```

You can view your live website by running `firebase open` in Terminal. Then select ‘Hosting: Deployed Site’ which will open your live website in a new browser window.

## Setup a Custom Domain with Free SSL

Open the [Firebase Console](https://console.firebase.google.com){rel="nofollow"} and choose the Firebase project you just created.

Then select **Hosting > Connect Domain** and enter your domain name when prompted.

Finally you will need to update your domain names DNS settings at your registrar with the new TXT and CNAME records that Firebase provides.

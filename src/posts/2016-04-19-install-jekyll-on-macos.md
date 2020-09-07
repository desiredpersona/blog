---
title: Install Jekyll on macOS
description: Memoirs of a legendary developer who once successfully installed Jekyll on the macOS operating system.
date: 2016-04-19T22:00:00Z
lastModified: 2019-03-22T16:15:00Z
tags:
  - Jekyll
  - macOS
---

[Jekyll](https://jekyllrb.com/) is a tool for transforming your plain text into static websites and blogs. It is simple, static, and blog-aware. Jekyll uses the [Liquid templating language](https://docs.shopify.com/themes/liquid-basics){rel="nofollow"} and has built-in [Markdown](https://daringfireball.net/projects/markdown/){rel="nofollow"} and [Textile](<https://en.wikipedia.org/wiki/Textile_(markup_language)>){rel="nofollow"} support. It also ties in nicely to [Github Pages](https://pages.github.com/){rel="nofollow"} but I personal use [Netlify](https://www.netlify.com){rel="nofollow"} to host this website for free. I highly recommend you join [Jekyll Talk](https://talk.jekyllrb.com/){rel="nofollow"} the official support forum where you can ask questions and discuss all aspects of Jekyll.

## Install Xcode Command Line Tools

Installing Jekyll is easy and straight-forward, but there are a few requirements you’ll need to make sure your system has before you start.

Install the Xcode Command Line Tools using your Terminal app.

```sh
xcode-select --install
```

You also need to install the macOS SDK headers.

```sh
open /Library/Developer/CommandLineTools/Packages/macOS_SDK_headers_for_macOS_10.14.pkg
```

Starting with Mojave, the macOS SDK headers are no longer installed under `/usr/include/` by default which can cause Jekyll install issues. You can confirm these changes under the heading "Command Line Tools / New Features" in the [Xcode 10 Release Notes](https://developer.apple.com/documentation/xcode_release_notes/xcode_10_release_notes){rel="nofollow"}. However, Xcode comes with the current version's headers.

## Install Homebrew

Next we will install [Homebrew](https://brew.sh){rel="nofollow"} a package manager for macOS.

**Why?**

We will use Homebrew to install Ruby.

**Why macOS already comes with a version of Ruby?**

A lot of the system directories in macOS are locked down making it difficult to use.

Install Homebrew by entering the following command in your Terminal app and hitting the <kbd>Return</kbd> key.

```sh
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

You will now be prompted to hit the <kbd>Return</kbd> key again to continue.

Output:

```
MacBook-Pro:jekyll-test-site Colin$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
==> This script will install:
/usr/local/bin/brew
/usr/local/share/doc/homebrew
/usr/local/share/man/man1/brew.1
/usr/local/share/zsh/site-functions/_brew
/usr/local/etc/bash_completion.d/brew
/usr/local/Homebrew
==> The following new directories will be created:
/usr/local/include
/usr/local/sbin
/usr/local/var
/usr/local/opt
/usr/local/share/zsh
/usr/local/share/zsh/site-functions
/usr/local/var/homebrew
/usr/local/var/homebrew/linked
/usr/local/Cellar
/usr/local/Caskroom
/usr/local/Homebrew
/usr/local/Frameworks

Press the <kbd>Return</kbd> key to continue or any other key to abort
```

You will be prompted to enter your Admin Password to allow the install to continue.

Output:

```
==> /usr/bin/sudo /bin/mkdir -p /usr/local/include /usr/local/sbin /usr/local/var /usr/local/opt /usr/local/share/zsh /usr/local/share/zsh/site-functions /usr/local/var/homebrew /usr/local/var/homebrew/linked /usr/local/Cellar /usr/local/Caskroom /usr/local/Homebrew /usr/local/Frameworks
Password:
```

The Homebrew install will continue after hitting the <kbd>Return</kbd> key.

Output:

```
==> /usr/bin/sudo /bin/chmod g+rwx /usr/local/include /usr/local/sbin /usr/local/var /usr/local/opt /usr/local/share/zsh /usr/local/share/zsh/site-functions /usr/local/var/homebrew /usr/local/var/homebrew/linked /usr/local/Cellar /usr/local/Caskroom /usr/local/Homebrew /usr/local/Frameworks
==> /usr/bin/sudo /bin/chmod 755 /usr/local/share/zsh /usr/local/share/zsh/site-functions
==> /usr/bin/sudo /usr/sbin/chown Colin /usr/local/include /usr/local/sbin /usr/local/var /usr/local/opt /usr/local/share/zsh /usr/local/share/zsh/site-functions /usr/local/var/homebrew /usr/local/var/homebrew/linked /usr/local/Cellar /usr/local/Caskroom /usr/local/Homebrew /usr/local/Frameworks
==> /usr/bin/sudo /usr/bin/chgrp admin /usr/local/include /usr/local/sbin /usr/local/var /usr/local/opt /usr/local/share/zsh /usr/local/share/zsh/site-functions /usr/local/var/homebrew /usr/local/var/homebrew/linked /usr/local/Cellar /usr/local/Caskroom /usr/local/Homebrew /usr/local/Frameworks
==> /usr/bin/sudo /bin/mkdir -p /Library/Caches/Homebrew
==> /usr/bin/sudo /bin/chmod g+rwx /Library/Caches/Homebrew
==> /usr/bin/sudo /usr/sbin/chown Colin /Library/Caches/Homebrew
==> Downloading and installing Homebrew...
remote: Enumerating objects: 47, done.
remote: Counting objects: 100% (47/47), done.
remote: Compressing objects: 100% (28/28), done.
remote: Total 115547 (delta 20), reused 36 (delta 19), pack-reused 115500
Receiving objects: 100% (115547/115547), 26.92 MiB | 350.00 KiB/s, done.
Resolving deltas: 100% (84431/84431), done.
From https://github.com/Homebrew/brew
* [new branch]          master     -> origin/master
* [new tag]             0.1        -> 0.1
* [new tag]             0.2        -> 0.2
* [new tag]             0.3        -> 0.3
* [new tag]             0.4        -> 0.4
* [new tag]             0.5        -> 0.5
* [new tag]             0.6        -> 0.6
* [new tag]             0.7        -> 0.7
* [new tag]             0.7.1      -> 0.7.1
* [new tag]             0.8        -> 0.8
* [new tag]             0.8.1      -> 0.8.1
* [new tag]             0.9        -> 0.9
* [new tag]             0.9.1      -> 0.9.1
* [new tag]             0.9.2      -> 0.9.2
* [new tag]             0.9.3      -> 0.9.3
* [new tag]             0.9.4      -> 0.9.4
* [new tag]             0.9.5      -> 0.9.5
* [new tag]             0.9.8      -> 0.9.8
* [new tag]             0.9.9      -> 0.9.9
* [new tag]             1.0.0      -> 1.0.0
* [new tag]             1.0.1      -> 1.0.1
* [new tag]             1.0.2      -> 1.0.2
* [new tag]             1.0.3      -> 1.0.3
* [new tag]             1.0.4      -> 1.0.4
* [new tag]             1.0.5      -> 1.0.5
* [new tag]             1.0.6      -> 1.0.6
* [new tag]             1.0.7      -> 1.0.7
* [new tag]             1.0.8      -> 1.0.8
* [new tag]             1.0.9      -> 1.0.9
* [new tag]             1.1.0      -> 1.1.0
* [new tag]             1.1.1      -> 1.1.1
* [new tag]             1.1.10     -> 1.1.10
* [new tag]             1.1.11     -> 1.1.11
* [new tag]             1.1.12     -> 1.1.12
* [new tag]             1.1.13     -> 1.1.13
* [new tag]             1.1.2      -> 1.1.2
* [new tag]             1.1.3      -> 1.1.3
* [new tag]             1.1.4      -> 1.1.4
* [new tag]             1.1.5      -> 1.1.5
* [new tag]             1.1.6      -> 1.1.6
* [new tag]             1.1.7      -> 1.1.7
* [new tag]             1.1.8      -> 1.1.8
* [new tag]             1.1.9      -> 1.1.9
* [new tag]             1.2.0      -> 1.2.0
* [new tag]             1.2.1      -> 1.2.1
* [new tag]             1.2.2      -> 1.2.2
* [new tag]             1.2.3      -> 1.2.3
* [new tag]             1.2.4      -> 1.2.4
* [new tag]             1.2.5      -> 1.2.5
* [new tag]             1.2.6      -> 1.2.6
* [new tag]             1.3.0      -> 1.3.0
* [new tag]             1.3.1      -> 1.3.1
* [new tag]             1.3.2      -> 1.3.2
* [new tag]             1.3.3      -> 1.3.3
* [new tag]             1.3.4      -> 1.3.4
* [new tag]             1.3.5      -> 1.3.5
* [new tag]             1.3.6      -> 1.3.6
* [new tag]             1.3.7      -> 1.3.7
* [new tag]             1.3.8      -> 1.3.8
* [new tag]             1.3.9      -> 1.3.9
* [new tag]             1.4.0      -> 1.4.0
* [new tag]             1.4.1      -> 1.4.1
* [new tag]             1.4.2      -> 1.4.2
* [new tag]             1.4.3      -> 1.4.3
* [new tag]             1.5.0      -> 1.5.0
* [new tag]             1.5.1      -> 1.5.1
* [new tag]             1.5.10     -> 1.5.10
* [new tag]             1.5.11     -> 1.5.11
* [new tag]             1.5.12     -> 1.5.12
* [new tag]             1.5.13     -> 1.5.13
* [new tag]             1.5.14     -> 1.5.14
* [new tag]             1.5.2      -> 1.5.2
* [new tag]             1.5.3      -> 1.5.3
* [new tag]             1.5.4      -> 1.5.4
* [new tag]             1.5.5      -> 1.5.5
* [new tag]             1.5.6      -> 1.5.6
* [new tag]             1.5.7      -> 1.5.7
* [new tag]             1.5.8      -> 1.5.8
* [new tag]             1.5.9      -> 1.5.9
* [new tag]             1.6.0      -> 1.6.0
* [new tag]             1.6.1      -> 1.6.1
* [new tag]             1.6.10     -> 1.6.10
* [new tag]             1.6.11     -> 1.6.11
* [new tag]             1.6.12     -> 1.6.12
* [new tag]             1.6.13     -> 1.6.13
* [new tag]             1.6.14     -> 1.6.14
* [new tag]             1.6.15     -> 1.6.15
* [new tag]             1.6.16     -> 1.6.16
* [new tag]             1.6.17     -> 1.6.17
* [new tag]             1.6.2      -> 1.6.2
* [new tag]             1.6.3      -> 1.6.3
* [new tag]             1.6.4      -> 1.6.4
* [new tag]             1.6.5      -> 1.6.5
* [new tag]             1.6.6      -> 1.6.6
* [new tag]             1.6.7      -> 1.6.7
* [new tag]             1.6.8      -> 1.6.8
* [new tag]             1.6.9      -> 1.6.9
* [new tag]             1.7.0      -> 1.7.0
* [new tag]             1.7.1      -> 1.7.1
* [new tag]             1.7.2      -> 1.7.2
* [new tag]             1.7.3      -> 1.7.3
* [new tag]             1.7.4      -> 1.7.4
* [new tag]             1.7.5      -> 1.7.5
* [new tag]             1.7.6      -> 1.7.6
* [new tag]             1.7.7      -> 1.7.7
* [new tag]             1.8.0      -> 1.8.0
* [new tag]             1.8.1      -> 1.8.1
* [new tag]             1.8.2      -> 1.8.2
* [new tag]             1.8.3      -> 1.8.3
* [new tag]             1.8.4      -> 1.8.4
HEAD is now at 38493a35a Merge pull request #5373 from EricFromCanada/man-page-text
==> Homebrew is run entirely by unpaid volunteers. Please consider donating:
https://github.com/Homebrew/brew#donations
==> Tapping homebrew/core
Cloning into '/usr/local/Homebrew/Library/Taps/homebrew/homebrew-core'...
remote: Enumerating objects: 4877, done.
remote: Counting objects: 100% (4877/4877), done.
remote: Compressing objects: 100% (4682/4682), done.
remote: Total 4877 (delta 48), reused 295 (delta 4), pack-reused 0
Receiving objects: 100% (4877/4877), 4.03 MiB | 774.00 KiB/s, done.
Resolving deltas: 100% (48/48), done.
Tapped 2 commands and 4662 formulae (4,919 files, 12.5MB).
==> Migrating /Library/Caches/Homebrew to /Users/Colin/Library/Caches/Homebrew...
==> Deleting /Library/Caches/Homebrew...
Already up-to-date.
==> Installation successful!

==> Homebrew has enabled anonymous aggregate formulae and cask analytics.
Read the analytics documentation (and how to opt-out) here:
https://docs.brew.sh/Analytics

==> Homebrew is run entirely by unpaid volunteers. Please consider donating:
https://github.com/Homebrew/brew#donations
==> Next steps:
- Run `brew help` to get started
- Further documentation:
https://docs.brew.sh
```

As you can see above we have now install Homebrew successfully.

Next, we will install Ruby using Homebrew. This route is recommended for most users.

**Note:** I have added an advance section below on 'How to manage multiple versions of Ruby using rbenv' but this section is completely unnecessary for most users installing Jekyll for the first time.

## Install Ruby using Homebrew

Install the latest version of Ruby using Homebrew.

```sh
brew install ruby
```

Output:

```
MacBook-Pro:jekyll-test-site Colin$ brew install ruby
Updating Homebrew...
==> Auto-updated Homebrew!
Updated 1 tap (homebrew/core).
==> Updated Formulae
firebase-cli                                     git-archive-all                                  libbi

==> Installing dependencies for ruby: libyaml, openssl and readline
==> Installing ruby dependency: libyaml
==> Downloading https://homebrew.bintray.com/bottles/libyaml-0.2.1.mojave.bottle.tar.gz
######################################################################## 100.0%
==> Pouring libyaml-0.2.1.mojave.bottle.tar.gz
🍺  /usr/local/Cellar/libyaml/0.2.1: 9 files, 299.3KB
==> Installing ruby dependency: openssl
==> Downloading https://homebrew.bintray.com/bottles/openssl-1.0.2q.mojave.bottle.tar.gz
==> Downloading from https://akamai.bintray.com/cd/cdbee2befd8f2e178ff0c5f9e8796a73a7de20055aae51cba7cc749429e8c90f?__gda__=exp=1544294137~hmac=b7
######################################################################## 100.0%
==> Pouring openssl-1.0.2q.mojave.bottle.tar.gz
==> Caveats
A CA file has been bootstrapped using certificates from the SystemRoots
keychain. To add additional certificates (e.g. the certificates added in
the System keychain), place .pem files in
  /usr/local/etc/openssl/certs

and run
  /usr/local/opt/openssl/bin/c_rehash

openssl is keg-only, which means it was not symlinked into /usr/local,
because Apple has deprecated use of OpenSSL in favor of its own TLS and crypto libraries.

If you need to have openssl first in your PATH run:
  echo 'export PATH="/usr/local/opt/openssl/bin:$PATH"' >> ~/.bash_profile

For compilers to find openssl you may need to set:
  export LDFLAGS="-L/usr/local/opt/openssl/lib"
  export CPPFLAGS="-I/usr/local/opt/openssl/include"

==> Summary
🍺  /usr/local/Cellar/openssl/1.0.2q: 1,794 files, 12.1MB
==> Installing ruby dependency: readline
==> Downloading https://homebrew.bintray.com/bottles/readline-7.0.5.mojave.bottle.tar.gz
==> Downloading from https://akamai.bintray.com/59/5976a79f0dbd5ccb2a261f692763319d612309caa2b8cf703f209270764c657c?__gda__=exp=1544294155~hmac=ee
######################################################################## 100.0%
==> Pouring readline-7.0.5.mojave.bottle.tar.gz
==> Caveats
readline is keg-only, which means it was not symlinked into /usr/local,
because macOS provides the BSD libedit library, which shadows libreadline.
In order to prevent conflicts when programs look for libreadline we are
defaulting this GNU Readline installation to keg-only.

For compilers to find readline you may need to set:
  export LDFLAGS="-L/usr/local/opt/readline/lib"
  export CPPFLAGS="-I/usr/local/opt/readline/include"

==> Summary
🍺  /usr/local/Cellar/readline/7.0.5: 46 files, 1.5MB
==> Installing ruby
==> Downloading https://homebrew.bintray.com/bottles/ruby-2.5.3_1.mojave.bottle.tar.gz
==> Downloading from https://akamai.bintray.com/2e/2e605dc994aa86afc8b4c0c8f91c719afb37d803d3cb4bd3f5cdad9b67c84855?__gda__=exp=1544294161~hmac=42
######################################################################## 100.0%
==> Pouring ruby-2.5.3_1.mojave.bottle.tar.gz
==> Caveats
By default, binaries installed by gem will be placed into:
  /usr/local/lib/ruby/gems/2.5.0/bin

You may want to add this to your PATH.

ruby is keg-only, which means it was not symlinked into /usr/local,
because macOS already provides this software and installing another version in
parallel can cause all kinds of trouble.

If you need to have ruby first in your PATH run:
  echo 'export PATH="/usr/local/opt/ruby/bin:$PATH"' >> ~/.bash_profile

For compilers to find ruby you may need to set:
  export LDFLAGS="-L/usr/local/opt/ruby/lib"
  export CPPFLAGS="-I/usr/local/opt/ruby/include"

==> Summary
🍺  /usr/local/Cellar/ruby/2.5.3_1: 16,228 files, 27.6MB
==> Caveats
==> openssl
A CA file has been bootstrapped using certificates from the SystemRoots
keychain. To add additional certificates (e.g. the certificates added in
the System keychain), place .pem files in
  /usr/local/etc/openssl/certs

and run
  /usr/local/opt/openssl/bin/c_rehash

openssl is keg-only, which means it was not symlinked into /usr/local,
because Apple has deprecated use of OpenSSL in favor of its own TLS and crypto libraries.

If you need to have openssl first in your PATH run:
  echo 'export PATH="/usr/local/opt/openssl/bin:$PATH"' >> ~/.bash_profile

For compilers to find openssl you may need to set:
  export LDFLAGS="-L/usr/local/opt/openssl/lib"
  export CPPFLAGS="-I/usr/local/opt/openssl/include"

==> readline
readline is keg-only, which means it was not symlinked into /usr/local,
because macOS provides the BSD libedit library, which shadows libreadline.
In order to prevent conflicts when programs look for libreadline we are
defaulting this GNU Readline installation to keg-only.

For compilers to find readline you may need to set:
  export LDFLAGS="-L/usr/local/opt/readline/lib"
  export CPPFLAGS="-I/usr/local/opt/readline/include"

==> ruby
By default, binaries installed by gem will be placed into:
  /usr/local/lib/ruby/gems/2.5.0/bin

You may want to add this to your PATH.

ruby is keg-only, which means it was not symlinked into /usr/local,
because macOS already provides this software and installing another version in
parallel can cause all kinds of trouble.

If you need to have ruby first in your PATH run:
  echo 'export PATH="/usr/local/opt/ruby/bin:$PATH"' >> ~/.bash_profile

For compilers to find ruby you may need to set:
  export LDFLAGS="-L/usr/local/opt/ruby/lib"
  export CPPFLAGS="-I/usr/local/opt/ruby/include"
```

Check the Ruby version to confirm a successful installation.

```sh
ruby -v
```

Output:

```
ruby 2.3.7p456 (2018-03-28 revision 63024) [universal.x86_64-darwin18]
```

We now need to update our `~/.bash_profile` file with the new `$PATH`, `$GEM_PATH` and `$GEM_HOME` paths. Open the file with the following command

```sh
nano ~/.bash_profile
```

My `.bash_profile` currently looks like this. You will need to add these 3 lines.

```
# Ruby
export PATH=/usr/local/opt/ruby/bin:$PATH
export GEM_HOME=$HOME/gems
export PATH=$HOME/gems/bin:$PATH
```

To exit press <kbd>CTRL</kbd> + <kbd>X</kbd> and then type the letter <kbd>Y</kbd> and press the <kbd>Return</kbd> key to save your changes.

Next reload your `.bash_profile` from the command line.

```sh
source ~/.bash_profile
```

You can double check your Ruby path with the command `which ruby` and then your gem path by using `gem env`.

You may continue with installing Bundler and Jekyll below.

**Note:**
As I mentioned earlier, the next section is only relevant to those developers who want to run multiple version of Ruby with Rbenv on their machines for testing. It is completely overkill for most Jekyll users.

## How to Manage Multiple Versions of Ruby using rbenv

Install rbenv with the following command using Homebrew.

```sh
brew install rbenv
```

Output:

```
MacBook-Pro:jekyll-test-site Colin$ brew install rbenv
Updating Homebrew...
==> Auto-updated Homebrew!
Updated 1 tap (homebrew/core).
==> Updated Formulae
diff-pdf                doctl                   fluent-bit              pdftoedn                pdftoipe                poppler

==> Installing dependencies for rbenv: autoconf, pkg-config and ruby-build
==> Installing rbenv dependency: autoconf
==> Downloading https://homebrew.bintray.com/bottles/autoconf-2.69.mojave.bottle.4.tar.gz
==> Downloading from https://akamai.bintray.com/97/9724736d34773b6e41e2434ffa28fe79feccccf7b7786e54671441ca75115cdb?__gda__=exp=1544304844~hmac=6c
######################################################################## 100.0%
==> Pouring autoconf-2.69.mojave.bottle.4.tar.gz
==> Caveats
Emacs Lisp files have been installed to:
  /usr/local/share/emacs/site-lisp/autoconf
==> Summary
🍺  /usr/local/Cellar/autoconf/2.69: 71 files, 3.0MB
==> Installing rbenv dependency: pkg-config
==> Downloading https://homebrew.bintray.com/bottles/pkg-config-0.29.2.mojave.bottle.tar.gz
==> Downloading from https://akamai.bintray.com/85/85e5bbffb3424f22cd1bf54b69161110481bab100f9abea54e0a0f00fcf761b9?__gda__=exp=1544304849~hmac=c5
######################################################################## 100.0%
==> Pouring pkg-config-0.29.2.mojave.bottle.tar.gz
🍺  /usr/local/Cellar/pkg-config/0.29.2: 11 files, 627.2KB
==> Installing rbenv dependency: ruby-build
==> Downloading https://github.com/rbenv/ruby-build/archive/v20181207.tar.gz
==> Downloading from https://codeload.github.com/rbenv/ruby-build/tar.gz/v20181207
######################################################################## 100.0%
==> ./install.sh
🍺  /usr/local/Cellar/ruby-build/20181207: 427 files, 214.8KB, built in 7 seconds
==> Installing rbenv
==> Downloading https://homebrew.bintray.com/bottles/rbenv-1.1.1.mojave.bottle.1.tar.gz
######################################################################## 100.0%
==> Pouring rbenv-1.1.1.mojave.bottle.1.tar.gz
🍺  /usr/local/Cellar/rbenv/1.1.1: 36 files, 62.8KB
==> Caveats
==> autoconf
Emacs Lisp files have been installed to:
  /usr/local/share/emacs/site-lisp/autoconf
```

Set up rbenv in your shell.

```sh
rbenv init
```

Output:

```
MacBook-Pro:jekyll-test-site Colin$ rbenv init
# Load rbenv automatically by appending
# the following to ~/.bash_profile:

eval "$(rbenv init -)"

```

You can add the above line manually or run the following command to update your `.bash_profile` file.

```sh
echo 'eval "$(rbenv init -)"' >> ~/.bash_profile
```

Next reload your `.bash_profile` from the command line.

```sh
source ~/.bash_profile
```

Verify that rbenv is properly set up using this rbenv-doctor script:

```sh
curl -fsSL https://github.com/rbenv/rbenv-installer/raw/master/bin/rbenv-doctor | bash
```

Output:

```
MacBook-Pro:jekyll-test-site Colin$ curl -fsSL https://github.com/rbenv/rbenv-installer/raw/master/bin/rbenv-doctor | bash
Checking for `rbenv' in PATH: /usr/local/bin/rbenv
Checking for rbenv shims in PATH: OK
Checking `rbenv install' support: /usr/local/bin/rbenv-install (ruby-build 20181207)
Counting installed Ruby versions: none
  There aren't any Ruby versions installed under `/Users/Colin/.rbenv/versions'.
  You can install Ruby versions like so: rbenv install 2.2.4
Checking RubyGems settings: OK
Auditing installed plugins: OK
```

You can now list all available version of Ruby using `rbenv install -l`.

Let's install the latest stable release which is currently `Ruby 2.6.2` as of writing.

```sh
rbenv install 2.6.2
```

Output:

```
MacBook-Pro:jekyll-test-site Colin$ rbenv install 2.6.2
ruby-build: use openssl from homebrew
Downloading ruby-2.6.2.tar.bz2...
-> https://cache.ruby-lang.org/pub/ruby/2.6/ruby-2.6.2.tar.bz2
Installing ruby-2.6.2...
ruby-build: use readline from homebrew
Installed ruby-2.6.2 to /Users/Colin/.rbenv/versions/2.6.2
```

List all Ruby versions known to rbenv

```sh
rbenv versions
```

Output:

```
MacBook-Pro:jekyll-test-site Colin$ rbenv versions
  system
* 2.5.3 (set by /Users/Colin/.rbenv/version)
  2.6.2
```

Set the global version of Ruby.

```sh
rbenv global 2.6.2
```

Confirm your global version of Ruby is set.

```sh
ruby -v
```

Output:

```
MacBook-Pro:jekyll-test-site Colin$ ruby -v
ruby 2.6.2p47 (2019-03-13 revision 67232) [x86_64-darwin18]
```

(Optional) Remove old Ruby versions. You will need to change the version number below, but this command will give you the directory location.

```
rbenv prefix 2.5.3
```

Output:

```
/Users/Colin/.rbenv/versions/2.5.3
```

(Optional) To remove old Ruby versions, simply `rm -rf` the directory of the version you want to remove. Be careful!

```
rm -rf /Users/Colin/.rbenv/versions/2.5.3
```

## Install Bundler

Installing [Bundler](https://bundler.io){rel="nofollow"} provides a consistent environment for Ruby projects by tracking and installing the exact gems and versions that are needed.

```sh
gem install bundler
```

Output:

```
MacBook-Pro:jekyll-test-site Colin$ gem install bundler
Fetching bundler-2.0.1.gem
Successfully installed bundler-2.0.1
Parsing documentation for bundler-2.0.1
Installing ri documentation for bundler-2.0.1
Done installing documentation for bundler after 3 seconds
1 gem installed
```

## Installing Jekyll

Finally it's time to install [Jekyll](https://jekyllrb.com) static site generator.

```sh
gem install jekyll
```

Check the Jekyll version.

```sh
jekyll -v
```

If you get an error at this point, Run `bundle update` while in your site directory to update your websites dependencies.

Done!

## Updating Jekyll

Run the `bundle update` command while in your sites directory and Bundler will update your gems to the latest versions.

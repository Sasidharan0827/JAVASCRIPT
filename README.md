![Java Script](https://capsule-render.vercel.app/api?type=waving&height=300&color=gradient&text=Java%20Script)

# JavaScript Learning Journey 🚀

Welcome to my **JavaScript Learning Repository**! Here, I document my progress, projects, and concepts I learn along the way.

## 📚 What I'm Learning
- JavaScript Basics (Variables, Data Types, Functions, Loops)
- DOM Manipulation
- ES6+ Features (Arrow Functions, Template Literals, Destructuring)
- Asynchronous JavaScript (Promises, Async/Await)
- API Calls & Fetch
- JavaScript Frameworks (React, Vue - future goal!)

## 📂 Repository Structure
```bash
📂 js-basics/    # Core JavaScript concepts and practice files
📂 projects/     # Mini projects to apply learning
📂 exercises/    # Coding challenges and exercises
```

## 🎯 Goals
- Build at least **5 mini projects** 🎨
- Contribute to open-source repositories 🤝
- Master JavaScript fundamentals ✅

## 🔧 Tools & Resources
- [MDN JavaScript Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [JavaScript.info](https://javascript.info/)
<p align="center">
  <a href="https://nodemon.io/"><img src="https://user-images.githubusercontent.com/13700/35731649-652807e8-080e-11e8-88fd-1b2f6d553b2d.png" alt="Nodemon Logo"></a>
</p>

# nodemon

nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.

nodemon does **not** require *any* additional changes to your code or method of development. nodemon is a replacement wrapper for `node`. To use `nodemon`, replace the word `node` on the command line when executing your script.

[![NPM version](https://badge.fury.io/js/nodemon.svg)](https://npmjs.org/package/nodemon)
[![Backers on Open Collective](https://opencollective.com/nodemon/backers/badge.svg)](#backers) [![Sponsors on Open Collective](https://opencollective.com/nodemon/sponsors/badge.svg)](#sponsors)

# Installation

Either through cloning with git or by using [npm](http://npmjs.org) (the recommended way):

```bash
npm install -g nodemon # or using yarn: yarn global add nodemon
```

And nodemon will be installed globally to your system path.

You can also install nodemon as a development dependency:

```bash
npm install --save-dev nodemon # or using yarn: yarn add nodemon -D
```

With a local installation, nodemon will not be available in your system path or you can't use it directly from the command line. Instead, the local installation of nodemon can be run by calling it from within an npm script (such as `npm start`) or using `npx nodemon`.

# Usage

nodemon wraps your application, so you can pass all the arguments you would normally pass to your app:

```bash
nodemon [your node app]
```

For CLI options, use the `-h` (or `--help`) argument:

```bash
nodemon -h
```

Using nodemon is simple, if my application accepted a host and port as the arguments, I would start it as so:

```bash
nodemon ./server.js localhost 8080
```

Any output from this script is prefixed with `[nodemon]`, otherwise all output from your application, errors included, will be echoed out as expected.

You can also pass the `inspect` flag to node through the command line as you would normally:

```bash
nodemon --inspect ./server.js 80
```

If you have a `package.json` file for your app, you can omit the main script entirely and nodemon will read the `package.json` for the `main` property and use that value as the app ([ref](https://github.com/remy/nodemon/issues/14)).

nodemon will also search for the `scripts.start` property in `package.json` (as of nodemon 1.1.x).

Also check out the [FAQ](https://github.com/remy/nodemon/blob/master/faq.md) or [issues](https://github.com/remy/nodemon/issues) for nodemon.

## Automatic re-running

nodemon was originally written to restart hanging processes such as web servers, but now supports apps that cleanly exit. If your script exits cleanly, nodemon will continue to monitor the directory (or directories) and restart the script if there are any changes.

## Manual restarting

Whilst nodemon is running, if you need to manually restart your application, instead of stopping and restart nodemon, you can type `rs` with a carriage return, and nodemon will restart your process.


## Using nodemon as a module

Please see [doc/requireable.md](doc/requireable.md)


## 🚀 Projects
- [Project 1: To-Do List](projects/todo-app.md)
- [Project 2: Weather App](projects/weather-app.md)

## 💡 Let's Connect!
If you have any suggestions or want to collaborate, feel free to reach out!

📧 Email: sasidharan0827@gmail.com.com  
🔗 LinkedIn: [https://www.linkedin.com/in/k-sasidharan](https://www.linkedin.com/in/k-sasidharan/)



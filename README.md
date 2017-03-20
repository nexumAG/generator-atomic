# generator-atomic
[![npm version](https://badge.fury.io/js/generator-atomic.svg)](https://badge.fury.io/js/generator-atomic)
[![Build Status](https://travis-ci.org/nexumAG/generator-atomic.svg?branch=master)](https://travis-ci.org/nexumAG/generator-atomic)
[![Dependency Status](https://david-dm.org/nexumAG/generator-atomic.svg)](https://david-dm.org/nexumAG/generator-atomic)

This [Yeoman](http://yeoman.io) generator scaffolds an atomic-design templating framework based on the markup language [Pug](http://http://pug-lang.com/).
It comes bundled with [BabelJS](http://babeljs.io/) for ES6 support, [Twitter Bootstrap](http://getbootstrap.com/), [LESS](http://www.lesscss.org/) or [SCSS](http://sass-lang.com/), ESLint and a build-in Livereload Server.
Several Subgenerators (atom, molecule, organism...) help you during your project to quickly add new modules and link them properly.
[Grunt](http://gruntjs.com/) helps you to automate your workflow with several helpful tasks like "build", "release" and "serve" (default). For automated Layout-testing you can use the [Galen Framework](http://galenframework.com/).


## Installation

### Install Yeoman

```bash
npm install -g yo
```

### Install generator-atomic

To install generator-atomic from npm, run:

```bash
npm install -g generator-atomic
```

## Usage

Initiate the generator in your project folder:

```bash
yo atomic
```

To generate modules use following commands in your project folder:

```bash
yo atomic:atom
```

```bash
yo atomic:molecule
```

```bash
yo atomic:organism
```

```bash
yo atomic:template
```

```bash
yo atomic:page
```

## Grunt Workflow

### `grunt default`
Runs [`grunt serve`](#grunt-serve).

### `grunt serve`
Start a development server that watches files and livereloads on changes.
Subtarget: `grunt serve:dist`: Serve a production Build.

### `grunt build`
Build the (optimized for production) code into `/dist`.

### `grunt test`
Build, Serve and run Layout-Tests with Galen.

### `grunt release`
Create a Release of the Project (bump and tag).

|Tasks| Description
|---------|-------
| `grunt release:patch` | Create a patch release of the Project.
| `grunt release:minor` | Create a minor release of the Project.
| `grunt release:mayor` | Create a mayor release of the Project.

### Directory Layout
```
├── □ app                                   
|   ├── □ 0_basics                        
|   |   ├── _default.pug                 # HTML Mastertemplate (HTML Header/Footer)
|   |   ├── controller.js                 # Javascript Main Controller
|   |   ├── basics.yaml                   # Content YAML
|   |   ├── main.scss                     # Stylesheet-file for Module imports
|   |   ├── variables.scss                # Stylesheet Variables
|   |   ├── nojs.scss                     # Fallback CSS for Browsers without JS
|   |   ├── ie9.scss                      # Fallback CSS for IE9
|   |   └── □ nx helpers                  # Less Helper Classes
|   ├── □ 1_atoms                         # Folder for Atoms
|   ├── □ 2_molecules                     # Folder for Molecules
|   ├── □ 3_organisms                     # Folder for Organisms
|   ├── □ 4_templates                     # Folder for Templates
|   └── □ 5_pages                         # Folder for Pages
```

### Module Directory Layout
Each Module (atom, molecule, organism...) has this Directory Layout:
```
|   |   ├── index.pug                  # Module Overview Page
|   |   └── □ breadcrumb                  
|   |       ├── breadcrumb.pug         # Demo: showcase the Module in all available versions
|   |       ├── _breadcrumb.pug        # Markup: Pug Mixins (with _underscore)
|   |       ├── breadcrumb.js           # Script: ES2015 through BabelJS (not in atoms, templates and pages)
|   |       ├── breadcrumb.unit.js      # Unit-Test: Karma/Jasmine Unit Test
|   |       ├── breadcrumb.scss         # Stylesheet
|   |       ├── breadcrumb.spec         # Test: Galen Specfile for Layout Tests
|   |       └── breadcrumb.yaml         # Content Model for this module
```

## Note for Windows-Users:
Windows Users with npm3/node5 should use the Microsoft PowerShell.
The Standard-Shell has Problems with the prompts.

## Contributing

You can contribute by  

* Issue submission
* writing Unit Tests
* providing Bugfixes

Please use the [Angular Commit Message Format](https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md#commit-message-format) for easier Changelog generation.

## Pull Request Guidelines

* Please check to make sure that there aren't existing pull requests attempting to address the issue mentioned. We also recommend checking for issues related to the issue on the tracker, as a team member may be working on the issue in a branch or fork.
* Non-trivial changes should be discussed in an issue first
* Develop in a topic branch, not master
* Add relevant tests to cover the change
* Make sure test-suite passes: `npm test`
* Squash your commits
* Write a convincing description of your PR and why we should land it


Thank you for your time, we appreciate it.

## License

MIT Licence
Copyright © 2015  Michael Seel, nexum AG

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

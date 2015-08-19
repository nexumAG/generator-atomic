# generator-atomic

This [Yeoman](http://yeoman.io) generator scaffolds an atomic-design templating framework based on the markup language [Jade](http://http://jade-lang.com/).
It comes bundled with [BabelJS](http://babeljs.io/) for ES6 support, [Twitter Bootstrap](http://getbootstrap.com/), [LESS](http://lesscss.org/), ESLint and a build-in Livereload Server. 
Several Subgenerators (atom, molecule, organism...) help you during your project to quickly add new modules and link them properly.
[Grunt](http://gruntjs.com/) helps you to automate your workflow with several helpful tasks like "build", "release" and "serve" (default). For automated Layout-testing you can use the [Galen Framework](http://galenframework.com/).

[![Average time to resolve an issue](http://isitmaintained.com/badge/resolution/nexumAg/generator-atomic.svg)](http://isitmaintained.com/project/nexumAG/generator-atomic "Average time to resolve an issue")
[![Percentage of issues still open](http://isitmaintained.com/badge/open/nexumAg/generator-atomic.svg)](http://isitmaintained.com/project/nexumAG/generator-atomic "Percentage of issues still open")

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
|   |   ├── _default.jade                 # HTML Mastertemplate (HTML Header/Footer)
|   |   ├── controller.js                 # Javascript Main Controller 
|   |   ├── de.yaml                       # Content YAML
|   |   ├── main.less                     # Less-file for Module imports
|   |   ├── variables.less                # Less Variables
|   |   ├── nojs.less                     # Fallback CSS for Browsers without JS
|   |   ├── ie9.less                      # Fallback CSS for IE9
|   |   ├── □ bootstrap                   # Twitter bootstrap
|   |   └── □ nx helpers                  # Less Helper Classes
|   ├── □ 1_atoms                         # Folder for Atoms
|   ├── □ 2_molecules                     # Folder for Molecules
|   ├── □ 3_organisms                     # Folder for Organisms
|   ├── □ 4_templates                     # Folder for Templates
|   └── □ 5_templates                     # Folder for Templates
```

### Module Directory Layout
Each Module (atom, molecule, organism...) has this Directory Layout:
```
|   |   ├── index.jade                  # Module Overview Page
|   |   └── □ breadcrumb                  
|   |       ├── breadcrumb.jade         # Demo: showcase the Module in all available versions
|   |       ├── _breadcrumb.jade        # Markup: Jade Mixins (with _underscore)
|   |       ├── breadcrumb.js           # Script: ES2015 through BabelJS (not in atoms, templates and pages)
|   |       ├── breadcrumb.less         # Styles: LESS precompiler
|   |       └── breadcrumb.spec         # Test: Galen Specfile for Layout Tests
```
## Contributing

1. Fork it
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'feat(filename): add my-new-feature...'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request

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

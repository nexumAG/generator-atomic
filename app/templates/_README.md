# <%= projectName %>
#### This Project was scaffolded by [Yeoman](http://yeoman.io) and [generator-atomic](https://github.com/nexumAG/generator-atomic)

## Install
 - Checkout Sourcecode
 - run command: `npm install && bower install`


## Preview Server
launch a preview server with livereload
 - run `grunt`


## Build
build, concatenate, minify the whole project into the /dist Folder
 - run `grunt build`


## Release
generate changelog, bump version number, push a new git-tag
 - run `grunt release`
 - subtargets:
   - `grunt release:major`
   - `grunt release:minor`
   - `grunt release:patch`


## Scaffold new Modules
you need to have yeoman and generator-atomic installed globally (`npm install -g yo generator-atomic`)

- new atom:     `yo atomic:atom`
- new molecule: `yo atomic:molecule`
- new organism: `yo atomic:organism`
- new template: `yo atomic:template`
- new page:     `yo atomic:page`

<% if ( navigation ){ %>
## Customize the brand logo in the navigation
Per default the nexum logo is shown in the navigation but you can add a your own logo path in the basics.yaml.

```
├── □ app                                   
|   ├── □ 0_basics                        
        └── basics.yaml                   # Content YAML
```
<% } %>

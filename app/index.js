'use strict';
var util = require('util');
var path = require('path');
var s = require("underscore.string");
var yeoman = require('yeoman-generator');
//var chalk = require('chalk');
//var yosay = require('yosay');

var Generator = module.exports = function Generator(args, options) {
  yeoman.Base.apply(this, arguments);
  this.argument('projectName', { type: String, required: false });
  this.argument('namespace', { type: String, required: false });
  this.argument('author', { type: String, required: false });
  this.argument('cssPreprocessor', { type: String, required: false });
  this.argument('karma', { type: Boolean, required: false });
  this.argument('galen', { type: Boolean, required: false });
  this.argument('camelized', { type: Boolean, required: false });
  this.pkg = require('../package.json');

};

util.inherits(Generator, yeoman.Base);



Generator.prototype.promptConfig = function promptConfig() {
  var cb = this.async(),
    welcomeMsg = 'generator-atomic version: ' + this.pkg.version,
    prompts;

  console.log(welcomeMsg);

  prompts = [
    {
      name:     'projectName',
      message:  'Name of the new Project'
    },
    {
      name: 'namespace',
      message: 'Choose the javascript namespace (should be short, lowercase, no special-chars)'
    },
    {
      name:    'author',
      message: 'Whats your name? (the author)',
      store:    true
    },
    {
      type: 'list',
      name: 'cssPreprocessor',
      message: 'What would you like to use to ' + 'write styles'.blue + '?',
      choices: ['Bootstrap 4 (Sass)', 'Bootstrap 3 (Less)'],
      filter: function(val) {
        var filterMap = {
          'Bootstrap 4 (Sass)': 'sass',
          'Bootstrap 3 (Less)': 'less'
        };

        return filterMap[val];
      }
    },
    {
      type: 'confirm',
      name: 'galen',
      message: 'Would you like to use Galen for Layout-Tests?',
      default: false
    },
    {
      type: 'confirm',
      name: 'karma',
      message: 'Would you like to include Karma / Jasmine for JS Unit-Tests?',
      default: false
    },
    {
      type: 'confirm',
      name: 'camelized',
      message: 'Would you like to camelize your sub-module names (highly recommended)?',
      default: true
    }
  ];

  if(this.projectName) {
    prompts = [];
  }

  this.prompt(prompts, function(props) {
    this.config.save();

    this.projectName = props.projectName || this.projectName;
    this.config.set('projectName', this.projectName);

    this.appname = s.slugify(this.projectName);
    this.config.set('appname', this.appname);

    this.namespace = props.namespace || this.namespace;
    this.namespace = this.namespace.replace(/[^\w\s]/gi, '');
    this.config.set('namespace', this.namespace);

    this.author = props.author || this.author;
    //this.config.set('author', this.author);

    this.cssPreprocessor = props.cssPreprocessor || this.cssPreprocessor;
    this.cssPreprocessorExtension = this.cssPreprocessor.replace('sass','scss');
    this.config.set('cssPreprocessor', this.cssPreprocessor);
    this.config.set('cssPreprocessorExtension', this.cssPreprocessorExtension);

    this.galen = props.galen || this.galen;
    this.config.set('galen', this.galen);

    this.karma = props.karma || this.karma;
    this.config.set('karma', this.karma);

    this.camelized = props.camelized || this.camelized;
    this.config.set('camelized', this.camelized);

    this.config.set('fileContent', 'initial');

    this.folders =  {
      tmp: '<%= folders.tmp %>',
      app: '<%= folders.app %>',
      dist: '<%= folders.dist %>'
    };

    this.config.set('atom', {
        moduletype: 'atom',
        modulefolder: '1_atoms',
        markup: true,
        markupmixins: true,
        content: true,
        scripts: false,
        styles: true
    });
    this.config.set('molecule', {
        moduletype: 'molecule',
        modulefolder: '2_molecules',
        markup: true,
        markupmixins: true,
        content: true,
        scripts: true,
        styles: true
    });
    this.config.set('organism', {
        moduletype: 'organism',
        modulefolder: '3_organisms',
        markup: true,
        markupmixins: true,
        content: true,
        scripts: true,
        styles: true
    });
    this.config.set('template', {
        moduletype: 'template',
        modulefolder: '4_templates',
        markup: true,
        markupmixins: false,
        content: true,
        scripts: false,
        styles: false
    });
    this.config.set('page', {
        moduletype: 'page',
        modulefolder: '5_pages',
        markup: true,
        markupmixins: false,
        content: true,
        scripts: false,
        styles: false
    });
    this.config.save();

    cb();
  }.bind(this));
};

Generator.prototype.tools = function tools() {
  this.template('bowerrc', '.bowerrc');
  this.template('_bower.json', 'bower.json');
  this.template('_package.json', 'package.json');
  this.template('_README.md', 'README.md');
};

Generator.prototype.editor = function editor() {
  this.copy('csscomb.json', '.csscomb.json');
  this.copy('_stylelintrc', '.stylelintrc');

  this.copy('eslintrc', '.eslintrc');

  this.copy('editorconfig', '.editorconfig');
};

Generator.prototype.git = function git() {
  this.template('_gitignore', '.gitignore');
};

Generator.prototype.gruntfile = function gruntfile() {
  this.template('_Gruntfile.js', 'Gruntfile.js');

  this.copy('tasks/aliases.yaml', 'tasks/aliases.yaml');
  this.copy('tasks/babel.js', 'tasks/babel.js');
  this.copy('tasks/bump.js', 'tasks/bump.js');
  this.copy('tasks/clean.js', 'tasks/clean.js');
  this.copy('tasks/connect.js', 'tasks/connect.js');
  this.copy('tasks/copy.js', 'tasks/copy.js');
  this.copy('tasks/pug.js', 'tasks/pug.js');
  this.copy('tasks/' + this.cssPreprocessor + '.js', 'tasks/' + this.cssPreprocessor + '.js');
  this.copy('tasks/watch.js', 'tasks/watch.js');
  this.copy('tasks/htmlmin.js', 'tasks/htmlmin.js');
  this.copy('tasks/injector.js', 'tasks/injector.js');
  this.copy('tasks/imagemin.js', 'tasks/imagemin.js');
  this.copy('tasks/rev.js', 'tasks/rev.js');
  this.copy('tasks/svgmin.js', 'tasks/svgmin.js');
  this.copy('tasks/usemin.js', 'tasks/usemin.js');
  this.copy('tasks/wiredep.js', 'tasks/wiredep.js');
  this.copy('tasks/useminPrepare.js', 'tasks/useminPrepare.js');
  this.copy('tasks/postcss.js', 'tasks/postcss.js');
  this.copy('tasks/parallelize.js', 'tasks/parallelize.js');
  this.copy('tasks/eslint.js', 'tasks/eslint.js');
  this.copy('tasks/combine_mq.js', 'tasks/combine_mq.js');
  if(this.galen) {
    this.copy('tasks/galenframework.js', 'tasks/galenframework.js');
  }
  if(this.karma) {
    this.copy('tasks/karma.js', 'tasks/karma.js');
  }
  this.copy('tasks/express.js', 'tasks/express.js');
  this.copy('tasks/open.js', 'tasks/open.js');
};

Generator.prototype.tests = function tests() {
  if(this.galen) {
    this.copy('tests/galen.test.js', 'tests/galen.test.js');
  }
  if(this.karma) {
    this.copy('tests/karma.conf.js', 'tests/karma.conf.js');
  }
};


Generator.prototype.sourceFiles = function sourceFiles() {
  this.template('0_basics/_default.pug', 'app/0_basics/_default.pug');
  this.template('0_basics/controller.js', 'app/0_basics/controller.js');
  this.template('0_basics/main.' + this.cssPreprocessorExtension, 'app/0_basics/main.' + this.cssPreprocessorExtension);
  this.template('0_basics/nojs.' + this.cssPreprocessorExtension, 'app/0_basics/nojs.' + this.cssPreprocessorExtension);
  this.template('0_basics/variables.' + this.cssPreprocessorExtension, 'app/0_basics/variables.' + this.cssPreprocessorExtension);

  this.copy('0_basics/nx-helpers/nx-colorclasses.' + this.cssPreprocessorExtension, 'app/0_basics/nx-helpers/nx-colorclasses.' + this.cssPreprocessorExtension);
  this.copy('0_basics/nx-helpers/nx-mediaqueries.' + this.cssPreprocessorExtension, 'app/0_basics/nx-helpers/nx-mediaqueries.' + this.cssPreprocessorExtension);
  this.copy('0_basics/nx-helpers/nx-radiocheckbox.' + this.cssPreprocessorExtension, 'app/0_basics/nx-helpers/nx-radiocheckbox.' + this.cssPreprocessorExtension);
  this.copy('0_basics/nx-helpers/nx-spacerclasses.' + this.cssPreprocessorExtension, 'app/0_basics/nx-helpers/nx-spacerclasses.' + this.cssPreprocessorExtension);

  this.template('0_basics/basics.yaml', 'app/0_basics/basics.yaml');

  this.directory('1_atoms', 'app/1_atoms');
  this.directory('2_molecules', 'app/2_molecules');
  this.directory('3_organisms', 'app/3_organisms');
  this.directory('4_templates', 'app/4_templates');
  this.directory('5_pages', 'app/5_pages');
  this.copy('index.pug', 'app/index.pug');

  this.directory('images', 'app/images');
  this.directory('fonts', 'app/fonts');

  this.copy('server.js', 'server.js');
};



Generator.prototype.install = function() {
  if (this.options['skip-install']) {
    return;
  }

  //var done = this.async();
  this.installDependencies({/*
    skipMessage: this.options['skip-install-message'],
    skipInstall: this.options['skip-install'],
    callback: done*/
  });
};

Generator.prototype.installBaseModules = function() {
  if (this.options['skip-install']) {
    return;
  }
  this.composeWith('atomic:molecule', { args: [
    "mainmenu", "The mainmenu"
  ]});
  this.composeWith('atomic:molecule', { args: [
    "breadcrumb", "The breadcrumb"
  ]});
  this.composeWith('atomic:organism', { args: [
    "header", "The page header"
  ]});
  this.composeWith('atomic:organism', { args: [
    "footer", "The page footer"
  ]});

};

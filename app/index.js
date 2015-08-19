'use strict';
var util = require('util');
var path = require('path');
var s = require("underscore.string");
var yeoman = require('yeoman-generator');
//var chalk = require('chalk');
//var yosay = require('yosay');

var Generator = module.exports = function Generator(args, options) {
  yeoman.generators.Base.apply(this, arguments);
  this.pkg = require('../package.json');

};

util.inherits(Generator, yeoman.generators.Base);



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
    }
  ];

  this.prompt(prompts, function(props) {
    this.projectName = props.projectName;
    this.appname = s.slugify(this.projectName);
    this.namespace = props.namespace.replace(/[^\w\s]/gi, '');
    this.author = props.author;

    this.config.save();
    this.config.set('appname', this.appname);
    this.config.set('projectName', this.projectName);
    this.config.set('namespace', this.namespace);
    this.config.set('author', this.author);
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
  this.copy('csslintrc', '.csslintrc');

  this.copy('eslintrc', '.eslintrc');
  this.copy('jshintrc', '.jshintrc');

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
  this.copy('tasks/changelog.js', 'tasks/changelog.js');
  this.copy('tasks/clean.js', 'tasks/clean.js');
  this.copy('tasks/connect.js', 'tasks/connect.js');
  this.copy('tasks/copy.js', 'tasks/copy.js');
  this.copy('tasks/jade.js', 'tasks/jade.js');
  this.copy('tasks/less.js', 'tasks/less.js');
  this.copy('tasks/watch.js', 'tasks/watch.js');
  this.copy('tasks/htmlmin.js', 'tasks/htmlmin.js');
  this.copy('tasks/injector.js', 'tasks/injector.js');
  this.copy('tasks/imagemin.js', 'tasks/imagemin.js');
  this.copy('tasks/rev.js', 'tasks/rev.js');
  this.copy('tasks/svgmin.js', 'tasks/svgmin.js');
  this.copy('tasks/usemin.js', 'tasks/usemin.js');
  this.copy('tasks/wiredep.js', 'tasks/wiredep.js');
  this.copy('tasks/useminPrepare.js', 'tasks/useminPrepare.js');
  this.copy('tasks/autoprefixer.js', 'tasks/autoprefixer.js');
  this.copy('tasks/parallelize.js', 'tasks/parallelize.js');
  this.copy('tasks/eslint.js', 'tasks/eslint.js');
  this.copy('tasks/combine_mq.js', 'tasks/combine_mq.js');
  this.copy('tasks/galen.js', 'tasks/galen.js');

};

Generator.prototype.tests = function tests() {
  this.directory('tests', 'tests');
};


Generator.prototype.sourceFiles = function sourceFiles() {
  this.directory('0_basics/bootstrap', 'app/0_basics/bootstrap');
  this.directory('0_basics/nx-helpers', 'app/0_basics/nx-helpers');
  this.template('0_basics/_default.jade', 'app/0_basics/_default.jade');
  this.template('0_basics/controller.js', 'app/0_basics/controller.js');
  this.template('0_basics/ie9.less', 'app/0_basics/ie9.less');
  this.template('0_basics/main.less', 'app/0_basics/main.less');
  this.template('0_basics/nojs.less', 'app/0_basics/nojs.less');
  this.template('0_basics/variables.less', 'app/0_basics/variables.less');
  this.template('0_basics/de.yaml', 'app/0_basics/de.yaml');

  this.directory('1_atoms', 'app/1_atoms');
  this.directory('2_molecules', 'app/2_molecules');
  this.directory('3_organisms', 'app/3_organisms');
  this.directory('4_templates', 'app/4_templates');
  this.directory('5_pages', 'app/5_pages');
  this.copy('index.jade', 'app/index.jade');

  this.directory('images', 'app/images');
  this.directory('fonts', 'app/fonts');

};



Generator.prototype.install = function() {
  /*if (this.options['skip-install']) {
    return;
  }*/

  //var done = this.async();
  this.installDependencies(/*{
    //skipMessage: this.options['skip-install-message'],
    //skipInstall: this.options['skip-install'],
    //callback: done
  }*/);
};

Generator.prototype.installBaseModules = function() {
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

'use strict';

const chalk = require('chalk');
const path = require('path');
const _kebabCase = require('lodash').kebabCase;

const Generator = require('yeoman-generator');
const prompts = require('./prompts').main;
const fileList = require('./file-list');

module.exports = class extends Generator {
  prompting() {
    return this.prompt(
      prompts
    ).then((answers) => {
      this._saveConfig(answers);
    });
  }

  _saveConfig(answers) {
    this.config.set('appname', _kebabCase(this.appname));
    this.config.set('projectName', answers.projectName);
    this.config.set('namespace', answers.namespace);
    this.config.set('cssPreprocessor', answers.cssPreprocessor);
    this.config.set('cssPreprocessorExtension', answers.cssPreprocessorExtension);
    this.config.set('galen', answers.galen);
    this.config.set('karma', answers.karma);
    this.config.set('camelized', answers.camelized);

    this.config.set('atom', {
      type: 'atom',
      folder: '1_atoms',
      markup: true,
      mixin: true,
      content: true,
      script: false,
      style: true
    });

    this.config.set('molecule', {
      type: 'molecule',
      folder: '2_molecules',
      markup: true,
      mixin: true,
      content: true,
      script: true,
      style: true
    });

    this.config.set('organism', {
      type: 'organism',
      folder: '3_organisms',
      markup: true,
      mixin: true,
      content: true,
      script: true,
      style: true
    });

    this.config.set('template', {
      type: 'template',
      folder: '4_templates',
      markup: true,
      mixin: false,
      content: true,
      script: false,
      style: false
    });

    this.config.set('page', {
      type: 'page',
      folder: '5_pages',
      markup: true,
      mixin: false,
      content: true,
      script: false,
      style: false
    });

    this.config.save();
  }

  writing() {
    fileList.static({
      cssPrecompiler: this.config.get('cssPreprocessor')
    }).forEach((file) => {
      this.fs.copy(path.join(__dirname, 'templates', file), this.destinationPath(file));
    });

    fileList.templates().forEach((file) => {
      this.fs.copyTpl(path.join(__dirname, 'templates', file), this.destinationPath(file), {
        appname: this.config.get('appname'),
        projectName: this.config.get('projectName'),
        namespace: this.config.get('namespace'),
        cssPreprocessor: this.config.get('cssPreprocessor'),
        cssPreprocessorExtension: this.config.get('cssPreprocessorExtension'),
        galen: this.config.get('galen'),
        karma: this.config.get('karma'),
        camelized: this.config.get('camelized')
      });
    });
  }

  install() {
    this.installDependencies({
      bower: true,
      npm: true,
      callback: function () {
        console.log('Everything is ready!');
      }
    });
  }

  end() {
    this.log(`That's it - Thank's for using Generator Atomic!`);
    this.log(`Run ${chalk.yellow('grunt serve')} to start hacking.`);
  }
};

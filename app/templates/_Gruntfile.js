/*jshint strict:false */
/* global require, module */

(function() {
  var path = require('path'),
    folders = {
      app: 'app',
      dist: 'dist',
      tmp: '.tmp'
    };



  module.exports = function(grunt) {
    require('time-grunt')(grunt);

    //language variable
    if(typeof grunt.option( 'language' ) === 'undefined') {
      var language = 'de'; }
    else {
      var language = grunt.option( 'language' ); }
    // define a base language file
    var langfile = grunt.file.readYAML('app/0_basics/'+ language +'.yaml');

    require('load-grunt-config')(grunt, {
      configPath: path.join(process.cwd(), 'tasks'),
      data: {
        folders: folders,
        packageJson: require('./package.json'),
        timestamp: grunt.template.today('dd.mm.yyyy HH:MM:ss'),
        lang: langfile,
        language: language
      },
      init: true,
      jitGrunt: {
        staticMappings: {
          useminPrepare: 'grunt-usemin',
          'bump-only':   'grunt-bump',
          changelog:     'grunt-conventional-changelog'
        }
      }
    });
  };
})();

/**
 * grunt-contrib-watch options
 * @type {Object}
 */

module.exports = {
  options: {
    livereload: true
  },
  server: {
    files: [
      '<%- folders.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
      '<%- folders.app %>/{,*/,**/}*.pug',
      '<%- folders.app %>/{,*/,**/}*.yaml'
    ]
  },

  script: {
    files: [ '<%- folders.app %>/{,*/,**/}*.js', '!app/{,*/,**/}*galen.js' ],
    tasks: [ 'newer:babel' ]
  },

  scripttest: {
    options: {
      livereload: false
    },
    files: [ '<%- folders.tmp %>/{,*/,**/}*.js' ],
    tasks: [ 'newer:eslint'<%if (karma) { %>, 'karma' <% } %> ]
  },

  style: {
    files: [ '<%- folders.app %>/{,*/,**/}*.<%= cssPreprocessorExtension %>' ],
    tasks: [ '<%= cssPreprocessor %>', 'postcss:server' ]
  },
  styletest: {
    options: {
      livereload: false
    },
    files: [ '<%- folders.tmp %>/{,*/,**/}*.css' ],
    tasks: [ 'postcss:stylelint' ]
  }

};

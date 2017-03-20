/**
 * grunt-eslint options
 * @type {Object}
 */

module.exports = {
  files: [
    '<%- folders.app %>/{,*/,**/}*.js',
    '!<%- folders.app %>/bower_components/**',
    '!<%- folders.app %>/{,*/,**/}*galen.js'
  ],
  options: {
    configFile: ".eslintrc"
  }
};

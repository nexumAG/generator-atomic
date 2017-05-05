/**
 * grunt-sass options
 * @type {Object}
 */

module.exports = {
  options: {
    paths: ['<%- folders.app %>/']
  },
  default: {
    options: {
      sourceMap: true
    },
    files: [{
      expand: true,
      cwd: '<%- folders.app %>/0_basics',
      src: ['*.<%= cssPreprocessorExtension %>', '!**/_*', '!variables.<%= cssPreprocessorExtension %>'],
      dest: '<%- folders.tmp %>/0_basics',
      ext: '.css'
    }]
  },
  nxSass: {
    options: {
      sourceMap: true
    },
    files: [{
      expand: true,
      cwd: '<%= folders.app %>/nx/0_basics',
      src: ['*.<%= cssPreprocessorExtension %>', '!**/_*', '!variables..<%= cssPreprocessorExtension %>'],
      dest: '<%= folders.tmp %>/nx/0_basics',
      ext: '.css'
    }]
  }
};

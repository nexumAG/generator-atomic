/**
 * grunt-contrib-less options
 * @type {Object}
 */

module.exports = {
  options: {
    cleancss: true,
    paths: ['<%- folders.app %>/'],
    sourceMap: true,
    sourceMapURL: 'main.css.map',
    //sourceMapFilename: '<%- folders.tmp %>/0_basics/main.css.map',
    outputSourceFiles: true
  },
  default: {
    files: [{
      expand: true,
      cwd: '<%- folders.app %>/0_basics',
      src: ['*.<%= cssPreprocessorExtension %>', '!**/_*', '!variables.<%= cssPreprocessorExtension %>'],
      dest: '<%- folders.tmp %>/0_basics',
      ext: '.css'
    }]
  },
  nxless: {
    options: {
      sourceMap: true
    },
    files: [{
      expand: true,
      cwd: '<%- folders.app %>/nx/0_basics',
      src: ['*.<%= cssPreprocessorExtension %>', '!**/_*', '!variables..<%= cssPreprocessorExtension %>'],
      dest: '<%- folders.tmp %>/nx/0_basics',
      ext: '.css'
    }]
  }
};

/**
 * grunt-autoprefixer options
 * @type {Object}
 */

module.exports = {
  options: {
    browsers: ['last 2 version']
  },
  dist: {
    files: [{
      expand: true,
      cwd: '<%= folders.tmp %>/0_basics',
      src: '{,*/}*.css',
      dest: '<%= folders.tmp %>/0_basics'
    }]
  }
};

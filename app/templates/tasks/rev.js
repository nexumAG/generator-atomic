/**
 * grunt-rev options
 * @type {Object}
 */

module.exports = {
  dist: {
    files: {
      src: [
        '<%= folders.dist %>/{,*/,**/}*.js',
        '<%= folders.dist %>/{,*/,**/}*.css',
        '<%= folders.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp}',
        '<%= folders.dist %>/styles/fonts/*'
      ]
    }
  }
};

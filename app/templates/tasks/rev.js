/**
 * grunt-rev options
 * @type {Object}
 */

module.exports = {
  dist: {
    options: {
      encoding: 'utf8',
      algorithm: 'md5',
      length: 4
    },
    files: {
      src: [
        '<%= folders.dist %>/{,*/,**/}*.js',
        '<%= folders.dist %>/{,*/,**/}*.css',
        '<%= folders.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp}',
        '<%= folders.dist %>/fonts/*'
      ]
    }
  }
};

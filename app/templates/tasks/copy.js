/**
 * grunt-contrib-copy options
 * @type {Object}
 */

module.exports = {
  dist: {
    files: [{
      expand: true,
      dot: true,
      cwd: '<%- folders.app %>',
      dest: '<%- folders.dist %>',
      src: [
        '*.{ico,txt}',
        '.htaccess',
        'images/{,*/}*.{jpg,jpeg,png,webp,gif,svg}',
        'fonts/**',
        'nx/images/{,*/}*.{jpg,jpeg,png,webp,gif,svg}',
        'nx/fonts/**'
      ]},
    {
      expand: true,
      cwd: '<%- folders.tmp %>',
      dest: '<%- folders.dist %>',
      src: [
        '**/*.css',
        '**/*.map'
      ]
    }]
  }
};

/**
 * grunt-svgmin options
 * @type {Object}
 */

module.exports = {
  svg: {
    files: [{
      expand: true,
      cwd: '<%= folders.app %>/images',
      src: '**/svg/*.svg',
      dest: '<%= folders.dist %>/images'
    }],
    options: {
        plugins: [
          { removeViewBox: false },    // don't remove viewbox attribute
          { removeUselessStrokeAndFill: false }, // don't remove useless strokes and fills
          { removeEmptyAttrs: false },  // don't remove empty attributes
          { removeStyleElement: true }
        ]
      }
  }
};

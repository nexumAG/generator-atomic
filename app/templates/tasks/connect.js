/**
 * grunt-contrib-connect options
 * @type {Object}
 */

module.exports = {
  options: {
    port: 9000,
    // change this to '0.0.0.0' to access the server from outside
    hostname: 'localhost',
    open: true
  },
  server: {
    options: {
      livereload: true,
      base: [
        '<%= folders.tmp %>',
        '<%= folders.app %>',
        'bower_components'
      ]
    }
  },
  dist: {
    options: {
      useAvailablePort: true,
      keepalive: true,
      base: [
        '<%= folders.dist %>'
      ],
      livereload: false
    }
  },
  test: {
    options: {
      port: 9001,
      base: [
        '<%= folders.dist %>'
      ],
      livereload: false,
      open: false
    }
  }
};

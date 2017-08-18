/**
 * grunt-contrib-connect options
 * @type {Object}
 */

module.exports = {
  options: {
    // change this to 'localhost' to deny access to the server from outside
    // hostname: '0.0.0.0' allows server access within LAN
    hostname: '0.0.0.0',
    open: false
  },
  dist: {
    options: {
      port: 3000,
      keepalive: false,
      base: [
        '<%= folders.dist %>'
      ],
      livereload: false
    }
  },
  testresults: {
    options: {
      port: 9001,
      base: [
        'report/'
      ],
      livereload: false,
      keepalive: true,
      open: 'http://localhost:9001/report.html'
    }
  }
};

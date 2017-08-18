/**
 * grunt-postcss options
 * @type {Object}
 */

module.exports = {
  options: {
    map: {
      inline: false, // save all sourcemaps as separate files...
      annotation: '.tmp/0_basics' // ...to the specified directory
    }
  },
  dist: {
    src: ['<%- folders.tmp %>/{,*/,**/}*.css'],
    options: {
      processors: [
        require('autoprefixer')({
          browsers: [
            'Android 2.3',
            'Android >= 4',
            'Chrome >= 35',
            'Firefox >= 31',
            'Edge >= 12',
            'Explorer >= 9',
            'iOS >= 7',
            'Opera >= 12',
            'Safari >= 7.1'
          ]
        }),
        require('cssnano')({
          zindex: false
        }) // minify the result
      ]
    }
  },
  server: {
    src: ['<%= folders.tmp %>/{,*/,**/}*.css'],
    options: {
      processors: [
        require('autoprefixer')({
          browsers: [
            'Android 2.3',
            'Android >= 4',
            'Chrome >= 35',
            'Firefox >= 31',
            'Edge >= 12',
            'Explorer >= 9',
            'iOS >= 7',
            'Opera >= 12',
            'Safari >= 7.1'
          ]
        })
      ]
    }
  },
  stylelint: {
    src: ['<%- folders.app %>/{,*/,**/}*.<%= cssPreprocessorExtension %>', '!<%- folders.app %>/0_basics/{,*/,**/}*.<%= cssPreprocessorExtension %>'],
    options: {
      writeDest: false,
      map: false,
      failOnError: true,
      processors: [
        require('stylelint')(),
        require('postcss-reporter')({
          clearMessages: true,
          throwError: true,
          noPlugin: true
        })
      ]
    }
  }
};

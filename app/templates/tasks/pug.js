/**
 * grunt-contrib-pug options
 * @type {Object}
 */

module.exports = function (grunt, data) {
  return {
    options: {
      client: false,
      pretty: true,
      basedir: 'app/',
      data: function (dest, src) {
        var page = src[0].replace('app/', ' ');
        page = page.replace('.pug','');
        page = page.replace(/\//g,'-');
        page = page.replace(' ','');
        var level = src[0].split('/').length - 2;
        var path = '';

        for(var i=0;i<level;i++) {
          path += '../';
        }

        yaml = {};
        grunt.file.expand('app/**/*.yaml').forEach(function(path) {
          var _namespace = path.substr(path.lastIndexOf('/') + 1);
          _namespace = _namespace.replace('.yaml', '');

          yaml[_namespace] = grunt.file.readYAML(path);
        });

        return {
          page: page,
          path: path,
          level: level,
          yaml:  yaml,
          language: data.language,
          timestamp: data.timestamp
        };
      }
    },
    html: {
      expand: true,
      //flatten: true,
      //cwd: '<%- folders.app %>/pug',
      src: ['<%- folders.app %>/{,*/,**/}*.pug', '!**/_*'],
      dest: '<%- folders.tmp %>',
      ext: '.html',
      rename: function(dest, src) {
        return src.replace('app/', '.tmp/');
      }
    }
  }
};

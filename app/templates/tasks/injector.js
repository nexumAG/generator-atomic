/**
 * grunt-injector options
 * @type {Object}
 */

module.exports = {
  options: {

  },
  // Inject application script files into index.html (doesn't include bower)
  jademixins: {
    options: {
      transform: function(filePath) {
        filePath = filePath.replace('/app/', '/');
        return 'include ' + filePath;
      },
      starttag: '//- [injector:jademixins]',
      endtag: '//- [endinjector]'
    },
    files: {
      '<%= folders.app %>/0_basics/_default.jade': [
        '<%= folders.app %>/{,*/,**/}_*.jade',
        '!<%= folders.app %>/0_basics/_default.jade'
      ]
    }
  },
  jadelinks: {
    options: {
      transform: function(filePath) {
        filePath = filePath.replace('.jade', '.html').replace('/app/', '../');
        linkTitle = filePath.split('/').pop().replace('.html', '');
        linkTitle = linkTitle.charAt(0).toUpperCase() + linkTitle.substr(1);
        return 'p: a(href="' + filePath + '") ' + linkTitle ;
      },
      starttag: '//- [injector:jadelinks]',
      endtag: '//- [endinjector]'
    },
    files: {
      '<%= folders.app %>/1_atoms/index.jade': [
        '<%= folders.app %>/1_atoms/{,*/}*.jade',
        '!<%= folders.app %>/1_atoms/index.jade',
        '!<%= folders.app %>/1_atoms/{,*/}_*.jade'
      ],
      '<%= folders.app %>/2_molecules/index.jade': [
        '<%= folders.app %>/2_molecules/{,*/}*.jade',
        '!<%= folders.app %>/2_molecules/index.jade',
        '!<%= folders.app %>/2_molecules/{,*/}_*.jade'
      ],
      '<%= folders.app %>/3_organisms/index.jade': [
        '<%= folders.app %>/3_organisms/{,*/}*.jade',
        '!<%= folders.app %>/3_organisms/index.jade',
        '!<%= folders.app %>/3_organisms/{,*/}_*.jade'
      ],
      '<%= folders.app %>/4_templates/index.jade': [
        '<%= folders.app %>/4_templates/{,*/}*.jade',
        '!<%= folders.app %>/4_templates/index.jade',
        '!<%= folders.app %>/4_templates/{,*/}_*.jade'
      ],
      '<%= folders.app %>/5_pages/index.jade': [
        '<%= folders.app %>/5_pages/{,*/}*.jade',
        '!<%= folders.app %>/5_pages/index.jade',
        '!<%= folders.app %>/5_pages/{,*/}_*.jade'
      ]
    }
  },
  // Inject application script files into index.html (doesn't include bower)
  scripts: {
    options: {
      transform: function(filePath) {
        filePath = filePath.replace('/app/', '');
        return '<script src="/' + filePath + '"></script>';
      },
      starttag: '// [injector:js]',
      endtag: '// [endinjector]'
    },
    files: {
      '<%= folders.app %>/0_basics/_default.jade': [
        '<%= folders.app %>/{,*/,**/}*.js',
        '!<%= folders.app %>/0_basics/**',
        '!<%= folders.app %>/bower_components/**'
      ]
    }
  },
  // Inject component less into main.less
  less: {
    options: {
      transform: function(filePath) {
        filePath = filePath.replace('/app/', '');
        return '@import \'' + filePath + '\';';
      },
      starttag: '// [injector]',
      endtag: '// [endinjector]'
    },
    files: {
      '<%= folders.app %>/0_basics/main.less': [
        '<%= folders.app %>/{,*/,**/}*.less',
        '!<%= folders.app %>/0_basics/**',
        '!<%= folders.app %>/bower_components/**'
      ]
    }
  },
  specs: {
    options: {
      transform: function(filePath) {
        filePath = filePath.replace('/app/', '/');
        htmlPath = filePath.replace('.spec', '.html');
        linkTitle = filePath.split('/').pop().replace('.spec', '');
        linkTitle = linkTitle.charAt(0).toUpperCase() + linkTitle.substr(1);
        return "test('"+ linkTitle + " on ' + device.deviceName, function () { gl.openPage(device, config.getProjectPage()+'" + htmlPath + "'); gl.runSpecFile(device, 'app" + filePath + "', device.tags);});";
      },
      starttag: '// [injector:spec]',
      endtag: '// [endinjector]'
    },
    files: {
      'tests/atomic.test.js': [
        '<%= folders.app %>/{,*/,**/}*.spec'
      ]
    }
  }
};

/**
 * grunt-injector options
 * @type {Object}
 */

module.exports = {
  options: {

  },
  // Inject application script files into index.html (doesn't include bower)
  pugmixins: {
    options: {
      transform: function(filePath) {
        filePath = filePath.replace('/app/', '/');
        return 'include ' + filePath;
      },
      starttag: '//- [injector:pugmixins]',
      endtag: '//- [endinjector]'
    },
    files: {
      '<%- folders.app %>/0_basics/_default.pug': [
        '<%- folders.app %>/{,*/,**/}_*.pug',
        '!<%- folders.app %>/0_basics/_default.pug'
      ]
    }
  },
  puglinks: {
    options: {
      transform: function(filePath) {
        filePath = filePath.replace('.pug', '.html').replace('/app/', '../');
        linkTitle = filePath.split('/').pop().replace('.html', '');
        linkTitle = linkTitle.charAt(0).toUpperCase() + linkTitle.substr(1);
        return 'p: a(href="' + filePath + '") ' + linkTitle ;
      },
      starttag: '//- [injector:puglinks]',
      endtag: '//- [endinjector]'
    },
    files: {
      '<%- folders.app %>/1_atoms/index.pug': [
        '<%- folders.app %>/1_atoms/{,*/}*.pug',
        '!<%- folders.app %>/1_atoms/index.pug',
        '!<%- folders.app %>/1_atoms/{,*/}_*.pug',
        '!<%- folders.app %>/1_atoms/pattern.pug'
      ],
      '<%- folders.app %>/2_molecules/index.pug': [
        '<%- folders.app %>/2_molecules/{,*/}*.pug',
        '!<%- folders.app %>/2_molecules/index.pug',
        '!<%- folders.app %>/2_molecules/{,*/}_*.pug'
      ],
      '<%- folders.app %>/3_organisms/index.pug': [
        '<%- folders.app %>/3_organisms/{,*/}*.pug',
        '!<%- folders.app %>/3_organisms/index.pug',
        '!<%- folders.app %>/3_organisms/{,*/}_*.pug'
      ],
      '<%- folders.app %>/4_templates/index.pug': [
        '<%- folders.app %>/4_templates/{,*/}*.pug',
        '!<%- folders.app %>/4_templates/index.pug',
        '!<%- folders.app %>/4_templates/{,*/}_*.pug'
      ],
      '<%- folders.app %>/5_pages/index.pug': [
        '<%- folders.app %>/5_pages/{,*/}*.pug',
        '!<%- folders.app %>/5_pages/index.pug',
        '!<%- folders.app %>/5_pages/{,*/}_*.pug'
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
      '<%- folders.app %>/0_basics/_default.pug': [
        '<%- folders.app %>/{,*/,**/}*.js',
        '!<%- folders.app %>/{,*/,**/}*.unit.js',
        '!<%- folders.app %>/{,*/,**/}*.galen.js',
        '!<%- folders.app %>/0_basics/**'
      ]
    }
  },
  // Inject component <%= cssPreprocessorExtension %> into main.<%= cssPreprocessorExtension %>
  style: {
    options: {
      transform: function(filePath) {
        filePath = filePath.replace('/app/', '');
        return '@import \'../' + filePath + '\';';
      },
      starttag: '// [injector]',
      endtag: '// [endinjector]'
    },
    files: {
      '<%- folders.app %>/0_basics/main.<%= cssPreprocessorExtension %>': [
        '<%- folders.app %>/{,*/,**/}*.<%= cssPreprocessorExtension %>',
        '!<%- folders.app %>/0_basics/**'
      ]
    }
  }<%if (galen) { %>,
  specs: {
    options: {
      transform: function(filePath) {
        filePath = filePath.replace('/app/', '/');
        htmlPath = filePath.replace('.spec', '.html');
        linkTitle = filePath.split('/').pop().replace('.spec', '');
        linkTitle = linkTitle.charAt(0).toUpperCase() + linkTitle.substr(1);
        return "test('"+ linkTitle + " on ' + device.deviceName, function () { \n"
        +"    gl.openPage(device, config.getProjectPage()+'" + htmlPath + "');\n"
        +"    gl.runSpecFile(device, 'app" + filePath + "', device.tags);\n  });\n";
      },
      starttag: '// [injector:spec]',
      endtag: '// [endinjector]'
    },
    files: {
      'tests/galen.test.js': [
        '<%- folders.app %>/{,*/,**/}*.spec'
      ]
    }
  }<% } %>
};

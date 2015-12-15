/**
 * grunt-galenframework options
 * @type {Object}
 */

module.exports = {
  options: {
    concat: true,
    output: false
  },
  local: {
    src: ['app/{,*/,**/}*.galen.js', 'tests/galen.test.js'],
    options: {
      url: 'http://localhost:3000',
      htmlReport: true,
      htmlReportDest: 'report',
      testngReport: true,
      testngReportDest: 'report/testng.xml',
      devices: {
        desktop: {
          deviceName: 'desktop',
          browser: 'firefox',
          size: '1280x800',
          tags: ['all', 'lg']
        },
        tablet_landscape: {
          deviceName: 'tablet-landscape',
          browser: 'firefox',
          size: '1024x768',
          tags: ['all', 'md']
        },
        tablet_portrait: {
          deviceName: 'tablet-portrait',
          browser: 'firefox',
          size: '768x1024',
          tags: ['all', 'sm']
        },
        smartphone: {
          deviceName: 'iphone6',
          browser: 'firefox',
          size: '375x667',
          tags: ['all', 'xs']
        }
      }
    }
  }
};

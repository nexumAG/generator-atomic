'use strict';

const path = require('path');
const fs = require('fs');
const url = require('url');
const express = require('express');
const glob = require('glob');
const yaml = require('js-yaml');
const pug = require('pug');

const app = express();

app.use(require('connect-livereload')({
    port: 35729
  }));

/**
 * middleware to handle template requests
 */
app.use(function(req, res, next) {
  let _filepath = getTemplatePath(req.originalUrl);

  if (!_filepath) {
    return next();
  }

  fs.stat(_filepath, function(err, stats) {
    if (err) {
      return next(err);
    }

    if (!stats.isFile()) {
      return next(err);
    }

    // prepare global pug path variables
    let level = req.originalUrl.match(/\//g).length - 1;
    let path = '../'.repeat(level);

    let contents = {};
    // get all yaml-file-paths
    glob('app/**/*.yaml', function(err, files) {
      let _fileCount = files.length;
      files.forEach(function(filepath) {
        // generate namespace
        let _namespace = filepath.substr(filepath.lastIndexOf('/') + 1);
        _namespace = _namespace.replace('.yaml', '');
        // load the yaml file
        fs.readFile(filepath, function(err, data) {
          _fileCount--;
          // parse yaml
          try {
            contents[_namespace] = yaml.load(data);
          }
          catch (err) {
            console.log('Error parsing file [%s]: %s', filepath, err.message);
          }

          // if all files are parsed, render template
          if (_fileCount <= 0) {
            pug.renderFile(_filepath, {
                pretty: true,
                basedir: __dirname + '/app',
                level: level,
                path: path,
                yaml: contents,
                timestamp: 'right now',
                dev: true
              }, function renderfile(err, html) {
                if (err) {
                  return next(err);
                }

                res.setHeader('Content-Length', Buffer.byteLength(html));
                res.setHeader('Content-Type', 'text/html; charset=utf-8');
                return res.end(html);
            });
          }
        });
      });
    });
  });
});

const staticFolders = ['/.tmp', '/app', '/bower_components'];

staticFolders.forEach(function(folder) {
  app.use(express.static(__dirname + folder));
});

const server = app.listen(3000, function() {
  let host = server.address().address;
  let port = server.address().port;

  console.log('Express server listening at http://%s:%s', host, port);
});

function getTemplatePath(requestUrl) {
  let _extenstions = ['.html', '.htm', '.pug'];
  let _parsed = url.parse(requestUrl);
  let _pathname = _parsed.pathname.replace(__dirname + '/app', '');
  let _requestedExt = path.extname(_pathname);
  let _pathnameWithoutExt = _pathname.substr(0, _pathname.length - _requestedExt.length);

  // get index file for directory requests
  if (_requestedExt === '') {
    if (_pathname.substr(-1) !== '/') {
      _pathnameWithoutExt += '/';
    }
    _pathnameWithoutExt += 'index';
    _requestedExt = _extenstions[0];
  }

  // check if requested extension is allowed
  if (_extenstions.indexOf(_requestedExt) === -1) {
    return null;
  }

  // find the template and return the path
  let _ext = '.pug';
  let _filepath = path.join(__dirname + '/app', _pathnameWithoutExt + _ext);
  if (fs.existsSync(_filepath)) {
    return _filepath;
  }

  return null;
}

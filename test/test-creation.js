/*global describe, beforeEach, it */
'use strict';
var path = require('path');
var helpers = require('yeoman-generator').test;

describe('component-app generator', function () {
  beforeEach(function (done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
      if (err) {
        return done(err);
      }

      this.app = helpers.createGenerator('component-app:app', [
        '../../app'
      ]);
      this.app.options['skip-install'] = true;
      done();
    }.bind(this));
  });


  it('creates expected files', function (done) {
    var expected = [
      // add files you expect to exist here.
      '.jshintrc',
      '.editorconfig',
      'package.json',
      'component.json',
      'index.html',
      'src/boot/component.json',
      'src/boot/index.js',
      'src/boot/style.css'
    ];

    helpers.mockPrompt(this.app, {
      'description': 'test'
    });
    this.app.run({}, function () {
      helpers.assertFile(expected);
      done();
    });
  });
});

describe('component-app:component generator', function () {
  beforeEach(function (done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
      if (err) {
        return done(err);
      }

      this.app = helpers.createGenerator('component-app:component', [
        '../../component'
      ], ['test']);
      this.app.conflicter.force = true;
      this.app.options['skip-install'] = true;

      done();
    }.bind(this));
  });

  it('creates expected files', function (done) {
    var expected = [
      // add files you expect to exist here.
      'src/test/component.json',
      'src/test/index.js'
    ];

    this.app.run({}, function () {
      helpers.assertFile(expected);
      done();
    });
  });
});

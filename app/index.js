'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');
var spawn = require('child_process').spawn;


var ComponentAppGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = require('../package.json');

    this.on('end', function () {
      if (!this.options['skip-install']) {
        spawn('npm', ['install'], { stdio: 'inherit'} )
          .on('close', function () {
            spawn('component', ['install'], { stdio: 'inherit'} );
          })
        this.installDependencies({bower: false});
      }
    });
  },

  askFor: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay('Welcome to the marvelous ComponentApp generator!'));

    var prompts = [
      {
        name: 'appName',
        message: 'What\'s the name of your app? (make sure, this must be same as directory\'s name)',
        default: (this.appname) ? this.appname : 'app'
      },
      {
        name: 'description',
        message: 'How would you like to describe this application?',
        default: 'My component app'
      }
    ];

    this.prompt(prompts, function (props) {
      var encode = function(str) {return str && str.replace(/\"/g, '\\"');};
      this.appName = encode(props.appName);
      this.description = encode(props.description);

      done();
    }.bind(this));
  },

  app: function () {
    this.mkdir('src');
    this.copy('_package.json', 'package.json');
    this.copy('_component.json', 'component.json');
    this.copy('_index.html', 'index.html');
  },

  boot: function() {
    this.mkdir('src/boot');
    this.directory('boot', 'src/boot');
  },

  projectfiles: function () {
    this.copy('editorconfig', '.editorconfig');
    this.copy('jshintrc', '.jshintrc');
  }
});

module.exports = ComponentAppGenerator;

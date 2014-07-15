'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');


var ComponentGenerator = yeoman.generators.NamedBase.extend({
  constructor: function() {
    yeoman.generators.NamedBase.apply(this, arguments);

    this.option('template', {
      desc: 'create template for component',
      type: Boolean,
      defaults: false
    });
    this.withTemplate = this.options.template;
  },

  init: function () {
    console.log('You called the component subgenerator with the argument ' + this.name + '.');

    this.dirname = 'src/' + this._.dasherize(this.name);
    this.mkdir(this.dirname);
    this.copy('index.js', this.dirname + '/index.js');
    this.copy('component.json', this.dirname + '/component.json');
  },

  template: function () {
    if(this.withTemplate) {
      this.copy('template.html', this.dirname + '/template.html');
    }
  }
});

module.exports = ComponentGenerator;
# generator-component-app [![Build Status](https://secure.travis-ci.org/takashi/generator-component-app.png?branch=master)](https://travis-ci.org/takashi/generator-component-app)

> [Yeoman](http://yeoman.io) generator

## Notice

sub-generator command `component-app:component` is not enabled under 0.0.5.
please use 0.0.6 or upper :/

## Getting Started

To install generator-component-app from npm, run:

```bash
$ npm install -g generator-component-app
```

Finally, initiate the generator:

```bash
$ yo component-app
```

And you can create component with sub command

```bash
$ yo component-app:component YOUR_COMPONENT_NAME
```

## How to build your app

```bash
$ cd YOUR_APP_DIR
$ make
```

I recommend to use [visionmedia/watch](https://github.com/visionmedia/watch) to build component continuously.

```bash
$ git clone git@github.com:visionmedia/watch.git
$ cd ./watch
$ make
$ cd YOUR_APP_DIR
$ watch make
```

## License

MIT

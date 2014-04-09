'use strict';

var gulp = require('gulp'),
   gutil = require('gulp-util'),
	less = require('gulp-less'),
  jshint = require('gulp-jshint'),
 stylish = require('jshint-stylish'),
 express = require('express'),
	path = require('path'),
  tinylr = require('tiny-lr');

// Less preprocessing
gulp.task('less', function() {
	gulp.src('httpdocs/themes/default/styles/less/main.less')
	.pipe(less())
	.pipe(gulp.dest('httpdocs/themes/default/styles/css'));
});

//JS Linting
gulp.task('lint', function(){
	gulp.src('httpdocs/themes/default/js/*.js')
	.pipe(jshint())
	.pipe(jshint.reporter(stylish));
});

// Express Server
var createServers = function(port, lrport) {
	var lr = tinylr();
	lr.listen(lrport, function() {
		gutil.log('LR Listening on', lrport);
	});

	var app = express();
	// First check tmp directory, then check src for assets
	app.use(express.static(path.resolve('httpdocs/themes/default')));
	app.listen(port, function() {
		gutil.log('Listening on', port);
	});

	return {
		lr: lr,
		app: app
	};
};

// LiveReload Watch
gulp.task('watch', function(){
	// Start and watch dev servers – LiveReload plugin required
	var servers = createServers(8080, 35729);

	// generate initial css
	gulp.run('less');

	// watch and process less
	gulp.watch('httpdocs/themes/default/styles/less/**/*.less', function(event){
		gulp.run('less');
		gutil.log(gutil.colors.cyan(event.path), 'changed');
		servers.lr.changed({
			body: {
				files: [event.path]
			}
		});
	});
	// watch html for changes
	gulp.watch(['httpdocs/themes/default/*.html', 'httpdocs/themes/default/*.php'], function(event){
		gutil.log(gutil.colors.yellow(event.path), 'changed');
		servers.lr.changed({
			body: {
				files: [event.path]
			}
		});
	});
	// watch js for changes
	gulp.watch(['httpdocs/themes/default/js/*.js'], function(event){
		gulp.run('lint');
		gutil.log(gutil.colors.red(event.path), 'changed');
		servers.lr.changed({
			body: {
				files: [event.path]
			}
		});
	});
});
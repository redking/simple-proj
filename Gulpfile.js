var gulp = require('gulp');

gulp.task('default', function() {
	var nodemon = require('gulp-nodemon');

	nodemon({
		script: 'app.js',
		ext: 'html',
		env: { 'NODE_ENV': 'development' },
		ignore: ['.git', 'src/js', 'src/css', 'node_modules'],
		nodeArgs: ['--debug']
	}).on('restart', function() {
		console.log('Restarted server!');
	});
});

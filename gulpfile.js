const bsync = require('browser-sync').create();
const { src, dest, series, parallel, watch } = require('gulp');
const pug = require('gulp-pug');
const urlBuilder = require('gulp-url-builder');
const htmlbeautify = require('gulp-html-beautify');

const destination = 'dist';
const locals = {};

function pugCompile() {
	return src(['src/pug/views/**/*.pug'])
		.pipe(pug({ locals }))
		.pipe(htmlbeautify({ indent_size: 4 }))
		.pipe(urlBuilder())
		.pipe(dest(destination))
		.pipe(bsync.reload({ stream: true }));
}

function pugWatch(cb) {
	watch(['src/pug/**/*.pug'], pugCompile);
	cb();
}

function sync() {
	bsync.init({
		server: {
			baseDir: `./${destination}`
		}
	});
}

exports.pug = pugCompile;
exports.build = parallel(exports.pug);
exports.watch = series(pugWatch);
exports.default = series(exports.build, exports.watch, sync);

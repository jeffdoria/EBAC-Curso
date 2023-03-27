//list dependences
const {series} = require('gulp');
const gulp = require('gulp');
const concat = require('gulp-concat');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');

//css
function tarefasCSS(cb) {
    return gulp.src([
        './node_modules/bootstrap/dist/css/bootstrap.css',
        './vendor/owl/css/owl.css',
        './node_modules/@fortawesome/fontawesome-free/css/all.css',
        './vendor/jquery-ui/jquery-ui.css',
        './src/css/style.css'
        ])
        .pipe(concat('styles.css'))
        .pipe(cssmin())
        .pipe(rename({ suffix: '.min'})) //libs.min.css
        .pipe(gulp.dest('./dist/css'))
}

//js
function tarefasJS(){
    return gulp.src([
        './node_modules/bootstrap/dist/js/bootstrap.js',
        './vendor/owl/js/owl.js',
        './vendor/jquery-mask/jquery.mask.js',
        './vendor/jquery-ui/jquery-ui.js',
        './src/js/custom.js'
    ])
        .pipe(concat('script.js'))
        .pipe(uglify())
        .pipe(rename({ suffix: '.min'})) //libs.min.js
        .pipe(gulp.dest('./dist/js'))
}

//images
function tarefasImagem(){
    return gulp.src('./src/images/*.{jpg,png}')
    .pipe(imagemin([
        imagemin.mozjpeg({quality:80, progressive: true}),
        imagemin.optipng({optimizationLevel: 2}),

    ]))
    .pipe(gulp.dest('./dist/images'))
}

    //POC - Proof of Concept
    function tarefasHTML(callback) {
        gulp.src('./src/**/*.html')
            .pipe((htmlmin({collapseWhitespace: true})))
            .pipe(gulp.dest('./dist'))

        return callback()

    }

exports.styles = tarefasCSS
exports.scripts = tarefasJS
exports.images = tarefasImagem
exports.default = parallel(tarefasHTML, tarefasJS, tarefasCSS)

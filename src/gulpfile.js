var gulp = require('gulp');
var sass = require('gulp-sass');
var pug = require('gulp-pug');

var uglify = require('gulp-uglify');
var connect = require('gulp-connect');

gulp.task('default', ['build', 'sass' , 'js', 'imp-bootstrap', 'livereload', 'watch', 'connect'])

// Compilation HTML -- .pug to .html
gulp.task('build', () => {
    return gulp.src('views/**.pug')
    .pipe(pug())
    .pipe(gulp.dest('dist'))
})

// Compilation CSS -- .scss to .css
gulp.task('sass', () => {
    return gulp.src('sass/**.scss')
    .pipe(sass({style: 'minified'}))
    .pipe(gulp.dest('dist/css'))
})

// Compilation JS -- .js
gulp.task('js', () => {
    return gulp.src('js/**.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
})


// Importer Bootstrap
gulp.task('imp-bootstrap', () => {
    return gulp.src([
        "node_modules/bootstrap/dist/css/bootstrap.min.css",
        "node_modules/bootstrap/dist/js/bootstrap.min.js"
    ])
    .pipe(gulp.dest('/vendors/bootstrap'))
})

// Live reload and watcher -- localhost:8080
gulp.task('livereload', function (){
    gulp.src('./dist/**/*')
    .pipe(connect.reload());
  });
  
  gulp.task('watch', function () {
    gulp.watch('./sass/**/*.scss', ['sass']);
    gulp.watch('./dist/**/*', ['livereload']);
    gulp.watch('./js/*.js', ['js']);
    gulp.watch('./views/*.pug', ['build']);
  });

  gulp.task('connect', function(){
    connect.server({
      root: 'dist',
      livereload: true
    });
  });
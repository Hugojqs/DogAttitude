var gulp = require("gulp");
var sass = require("gulp-sass");
var pug = require("gulp-pug");

var uglify = require("gulp-uglify");
var connect = require("gulp-connect");

// Compilation HTML -- .pug to .html
gulp.task("build", () => {
  return gulp
    .src("views/**.pug")
    .pipe(pug())
    .pipe(gulp.dest("dist"));
});

// Compilation CSS -- .scss to .css
gulp.task("sass", () => {
  return gulp
    .src("sass/**.scss")
    .pipe(sass({ style: "minified" }))
    .pipe(gulp.dest("dist/css"));
});

// Compilation JS -- .js
gulp.task("js", () => {
  return gulp
    .src("js/**/*.js")
    //.pipe(uglify())
    .pipe(gulp.dest("dist/js"));
});

// Importer Bootstrap
gulp.task("imp-bootstrap", () => {
  return gulp
    .src([
      "node_modules/bootstrap/dist/css/bootstrap.min.css",
      "node_modules/bootstrap/dist/js/bootstrap.min.js"
    ])
    .pipe(gulp.dest("dist/vendors/bootstrap"));
});

// Importer Jquery
gulp.task("imp-jquery", () => {
  return gulp
    .src(["node_modules/jquery/dist/jquery.min.js"])
    .pipe(gulp.dest("dist/vendors/jquery"));
});

gulp.task("img", () =>{
  return gulp.src("img/**/*")
  .pipe(gulp.dest("dist/img"))
})

// Live reload and watcher -- localhost:8080
gulp.task("livereload", function() {
  gulp.src("./dist/**/*").pipe(connect.reload())
});

gulp.task("watch", function() {
  gulp.watch("./sass/**/*.scss", ["sass"]);
  gulp.watch("./dist/**/*", ["livereload"]);
  gulp.watch("./js/**/*.js", ["js"]);
  gulp.watch("./views/**/*.pug", ["build"]);
  gulp.watch("./img/**/*.**", ["img"]);
});

gulp.task("connect", function() {
  connect.server({
    root: "dist",
    livereload: true
  });
});

gulp.task("default", [
  "connect",
  "watch",
  "sass",
  "js",
  "imp-bootstrap",
  "imp-jquery",
  "img",
  "build"
]);

var gulp = require("gulp");
var cleanCSS = require("gulp-clean-css");
var sass = require("gulp-sass");
var babel = require("gulp-babel");
var uglify = require("gulp-uglify");
var autoprefixer = require("gulp-autoprefixer");

sass.compiler = require("node-sass");

// COPY HTML
gulp.task("copyHtml", () => {
  gulp.src("src/index.html").pipe(gulp.dest("dist/"));
});

// COMPILE SCSS, MINIFY CSS & ADD Pre-FIXER for CSS
gulp.task("sass", () => {
  gulp
    .src("src/scss/index.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(
      autoprefixer({
        browsers: ["last 2 versions"],
        cascade: false
      })
    )
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(gulp.dest("dist/css/"));
});

// COMPILE BABEL to ES5 and minify JS code
gulp.task("scripts", () => {
  gulp
    .src("src/js/**/*.js")
    .pipe(
      babel({
        presets: ["@babel/env"]
      })
    )
    .pipe(uglify())
    .pipe(gulp.dest("dist/js/"));
});

// WATCH
gulp.task("watch", () => {
  gulp.watch("src/*.html", ["copyHtml"]);
  gulp.watch("src/scss/**/**/**/*.scss", ["sass"]);
  gulp.watch("src/js/**/*.js", ["scripts"]);
});

gulp.task("build", ["copyHtml", "sass", "scripts"]);

// DEFAULT
gulp.task("default", ["watch"]);

let project_folder = require("path").basename(__dirname);
let source_folder = "#src";


var fs =require('fs');


var gulp = require('gulp');
const { src, dest } = require('gulp');


// --------------------------------------------------

// Подключание основных модулей gulp
var kit = require('gulp-kit');
var sass = require('gulp-sass');
var importJs = require('gulp-js-import');
var uglify = require('gulp-uglify');
var del = require('del');
const imagemin = require('gulp-imagemin');
// основные модули

// ---------------------------------------------------

// модуль обновления браузера
var browsersync = require('browser-sync').create();



let path = {
  build: {
    html: project_folder + "/",
    css: project_folder + "/css/",
    js: project_folder + "/js/",
    img: project_folder + "/img/",
    fonts: project_folder + "/fonts/",
  },
  src: {
    html: source_folder + "/*.kit",
    css: source_folder + "/scss/main.scss",
    js: source_folder + "/js/*.js",
    img: source_folder + "/img/**/*.{jpg,jpeg,png,svg,gif,ico,webp}",
    fonts: source_folder + "/fonts/*.{ttf,woff}",
  },
  watch: {
    kit:  source_folder + "/**/*.kit",
    html: source_folder + "/**/*.html",
    css: source_folder + "/scss/**/*.scss",
    js: source_folder + "/js/**/*.js",
    img: source_folder + "/img/**/*.{jpg,jpeg,png,svg,gif,ico,webp}",
    fonts: source_folder + "/fonts/*.{ttf,woff}",
  },
  clean:"./" + project_folder + "/"

}



function watchFiles() {
  gulp.watch([path.watch.kit],html),
  gulp.watch([path.watch.html],html),
  gulp.watch([path.watch.css],css),
  gulp.watch([path.watch.js],js),
  gulp.watch([path.watch.img],img),
  gulp.watch([path.watch.fonts],fonts)
}



function clean(params) {
  return del(path.clean);
}



function browserSync() {
  return browsersync.init({
    server:{
      baseDir:'./' + project_folder + "/"
    },
    port:3000,
    notify:false
  });
}

//может быть проблемой

function html() {
  return gulp.src(path.src.html)
  .pipe(kit())
  .pipe(gulp.dest(path.build.html))
  .pipe(browsersync.stream())
}



function css() {
  return gulp.src(path.src.css)
  .pipe(sass())
  // {outputStyle: 'compressed'}
  .pipe(gulp.dest(path.build.css))
  .pipe(browsersync.stream())
}



function js() {
  return gulp.src(path.src.js)
  .pipe(importJs())
  // .pipe(uglify())
  .pipe(gulp.dest(path.build.js))
  .pipe(browsersync.stream())
}



function img() {
  return gulp.src(path.src.img)
  .pipe(imagemin({
    progressive: true,
    svgoPlugins: [{removeViewBox:false}],
    interlaced: true,
    optimizationLevel: 3
  }))
  .pipe(gulp.dest(path.build.img))
  .pipe(browsersync.stream())
}

function fonts() {
  return gulp.src(path.src.fonts)
  .pipe(gulp.dest(path.build.fonts))
  .pipe(browsersync.stream())
}




gulp.task('default',gulp.parallel(gulp.series(clean,gulp.parallel(html,css,js,img,fonts)),watchFiles,browserSync));

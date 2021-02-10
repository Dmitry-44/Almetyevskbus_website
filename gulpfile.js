const gulp = require('gulp');
const sass = require('gulp-sass');
//const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const browserSync = require('browser-sync').create();
const del = require('del');


     // Compile sass -> css

function sassCompile(){
    return gulp.src('./src/scss/**/*.scss')
          //   .pipe(sourcemaps.init())
             .pipe(sass().on('error', sass.logError))
           //  .pipe(sourcemaps.write())
             .pipe(gulp.dest('./src/css/'));
};    


     // Working, join .css files and push to  /build folder

function styles(){
    return gulp.src('./src/css/**/*.css')
            .pipe(concat('all.css'))
            .pipe(autoprefixer({
                cascade: false
            }))
            .pipe(cleanCSS({
                level: 2
            }))
            .pipe(gulp.dest('./build/css'))
            .pipe(browserSync.stream());

}

function watch(){
    browserSync.init({
        server: {
            baseDir: "./" , 
            index : "main.html"
    }});
   
   gulp.watch('./src/scss/**/*.scss', sassCompile);
   gulp.watch('./src/css/**/*.css', styles);
   gulp.watch('./*.html', browserSync.reload);
}

    // Delete all files from /build folder
function clean(){
    return del(['build/*']);
}   

gulp.task('sass-compile', sassCompile);
gulp.task('styles', styles);
gulp.task('watch', watch);
gulp.task('clean', clean);


gulp.task('build', gulp.series(
                          gulp.parallel( clean, sassCompile ),
                                      styles)
);
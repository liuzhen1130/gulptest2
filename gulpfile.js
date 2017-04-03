/**
 * Created by liuzhen
 * on 2017/4/3 下午4:23
 */
var gulp =require("gulp");
var gulp_less = require("gulp-less");
var gulp_css = require("gulp-minify-css"),
    browserSync = require("browser-sync").create(),
    reload = browserSync.reload;

gulp.task("less",function () {
    gulp.src("src/less/*.less")
        .pipe(gulp_less())
        .pipe(gulp.dest("src/css"))
});
gulp.task("mini_css",function () {
    gulp.src("src/css/*.css")
        .pipe(gulp_css())
        .pipe(gulp.dest("dist/css"))
});
gulp.task("watchless",function () {
    gulp.watch("src/less/*.less",['less'])
});
gulp.task("watchcss",function () {
    gulp.watch("src/css/*.css",['mini_css'])
});

gulp.task('serve', ['mini_css'] ,function() {

    browserSync.init({
        server: "./"
    });
    gulp.watch('dist/css/*.css').on('change', reload);
    gulp.watch("dist/*.html").on('change', reload);
});

gulp.task('all',['watchless','watchcss','serve']);
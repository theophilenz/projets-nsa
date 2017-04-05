var gulp = require("gulp");
var sass = require("gulp-sass");
var watch = require("gulp-watch");
//Commencer la tâche "styles"

gulp.task("styles", function() {
    gulp.src("scss/*.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(gulp.dest("./public/css/"));
});

//Tâche par défaut

gulp.task("default", function() {
    gulp.watch("scss/*.scss", ["styles"]);
});
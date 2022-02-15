import gulp from "gulp";
import gulpSass from "gulp-sass";
import gulpPostcss from "gulp-postcss";
import gulpSourcemaps from "gulp-sourcemaps";
import sass from "sass";
import autoprefixer from "autoprefixer";

const sassPipe = gulpSass(sass);

export async function css() {
  return gulp
    .src("./styles/**/*.scss")
    .pipe(gulpSourcemaps.init())
    .pipe(sassPipe().on("error", sassPipe.logError))
    .pipe(gulpPostcss([autoprefixer]))
    .pipe(gulpSourcemaps.write("."))
    .pipe(gulp.dest("src/styles"));
}

export function watchCss() {
  gulp.watch("./styles/**/*.scss", css);
}

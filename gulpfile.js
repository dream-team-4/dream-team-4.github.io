const gulp = require('gulp')
const sass = require ('gulp-sass')

gulp.task('sass',function(){
    return gulp
    .src('scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('css'))
    .pipe(postcss(plugins))
    .pipe(gulp.dest('./css/min'))
    .pipe(browerSync.stream())

})
gulp.task('default', function (){
    browerSync.init({server:'./'})
    gulp.watch('scss/**/*.scss', gulp.series('sass'))
    gulp.watch('*.html').on('change',browerSync.reload)
}) 
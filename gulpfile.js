const gulp = require('gulp')
const sass = require ('gulp-sass')
const browerSync = require('browser-sync').create()
const postcss = require('gulp-postcss')
const autoprefixer = require('autoprefixer')
const cssnano=('cssnano')

gulp.task('sass',function(){
const plugins =[
    autoprefixer({browsers:['last 2 versions']}),
    cssnano
]
return gulp.src([

    'node_modules/jquery/dist/jquery.js',

    'node_modules/bootstrap/dist/js/bootstrap.js',

    'js/*.js'

  ])    .src('scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('css'))
    .pipe.postcss(plugins)
    .pipe(gulp.dest('./css/min'))
    .pipe(browerSync.stream())
})
gulp.task('default', function (){
    browerSync.init({server:'./'})
    gulp.watch('scss/**/*.scss', gulp.series('sass'))
    gulp.watch('*.html').on('change',browerSync.reload)
}) 
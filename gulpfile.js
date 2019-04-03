const gulp = require('gulp')
const scss = require ('gulp-sass')
const browerSync = require('browser-sync').create()
const postcss = require('gulp-postcss')
const autoprefixer = require('autoprefixer')
const cssnano=require('cssnano')

gulp.task('scss',function(){
const plugins =[
    autoprefixer({browsers:['last 2 versions']}),
    cssnano()
]
return gulp.src([

    'node_modules/jquery/dist/jquery.js',

    'node_modules/bootstrap/dist/js/bootstrap.js',

    'js/*.js'

  ])    
  .src('scss/**/*.scss')
    .pipe(scss())
    .pipe(gulp.dest('css'))
    .pipe(postcss(plugin)) 
    .pipe(gulp.dest('./css/min'))
    .pipe(browerSync.stream())
})
gulp.task('default', function (){
    browerSync.init({server:'./'})
    gulp.watch('scss/**/*.scss', gulp.series('scss'))
    gulp.watch('*.html').on('change',browerSync.reload)
})

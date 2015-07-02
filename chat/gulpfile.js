var gulp = require('gulp');
var sass = require('gulp-sass');

var tasks = [];
gulp.task('watch',function(){
  console.log(1);
});

tasks.push('watch');
gulp.task('build',tasks);

gulp 命令行：
        1.配置 gulp 文件
          npm init
        2.在项目中安装 gulp
          npm install gulp --save-dev
        3.创建 gulp 默认文件
          gulpfile.js
        4.引入 gulp 核心包
          const gulp = require('gulp');



gulp 插件：
        1.引入 gulp 核心包
         const gulp = require('gulp');
        2.引入 sass 文件
         gulp-sass
        3.定义一个HTTP服务器
         gulp-connect
        4.压缩 HTML 文件
         gulp-htmlmin
        5.图片压缩
         gulp-imagemin
        6.压缩 javascript
         gulp-uglify
        7.合并文件，减少网络请求
         gulp-concat
        8.给 CSS 文件添加前缀
         gulp-autoprefixer
        9.修改文件名
         gulp-rename
        10.？
         gulp-util
        11.ES6 转 ES5
         babel




gulp 插件使用实例：
        1.定义一个任务，复制文件
          gulp.task('任务名'，function(){
                //获取文件路径
                gulp.src('文件路径')
                //将获取到的文件复制到目标路径
                .pipe('任务名',['目标路径'])；
          })；
        2.将 sass 文件转换为 css 文件
            gulp.task('任务名',function(){
                //获取 sass 文件
                gulp.src('文件路径')
                //要做的操作
                .pipe(sass())
                //转换后的输出路径
                .pipe(gulp.复制文件任务名('输出文件路径'))
            });
        3.添加监视任务，当文件发生变动时自动运行
            gulp.task('watch',function(){
                gulp.watch('要监视的文件路径',['要执行的任务名']);
            });
        4.创建服务器，文件变动时实时刷新页面
            gulp.task('serve',function(){
                connect.server({
                    root: 网页根目录，
                    //文件发生变化时，自动刷新网页
                    livereload:true
                });
                //添加监视，当目录下任何文件发生改变时，自动刷新
                gulp.watch('要监视的文件路径',['reload']);
            });

            gulp.task('reload',function(){
                gulp.src('public/**/*.*')
                .pipe(connect.reload());
            });
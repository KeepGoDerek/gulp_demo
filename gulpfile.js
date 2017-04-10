
//载入gulp 核心包
const gulp = require('gulp');

//gulp是用来帮我执行一些重复操作的，
//一般我们将这些重复操作划分为不同的任务

//定义一个任务
//第一个参数是任务名，第二个参数是任务执行体
gulp.task('hello',function(){
	console.log('hello world;');
	//在这里编写一些重复性的流程
});

////让任务运行还是借助命令行
//// gulp 任务名


//拷贝文件
gulp.task('dest',function() {
	//获取文件
	//取src目录下的所有子目录下的所有文件
	//** 代表匹配所有目录
	//! 代表不匹配这个元素
	//可以使用数组获取多个目录下的文件  ['src/*.*','src1/*.*','!src/demo/demo']

	gulp.src('src/**/*.*')
		//让文件流走向下一个环节
		.pipe(gulp.dest('dist/'))
});

//默认任务 ， 在命令行中直接输出 gulp 会执行这个任务

gulp.task('default',function (){
	console.log("这是默认任务");
	//当src目录下的文件发生变化时，自动执行后面的任务
	gulp.watch('src/*',['dest']);
});

//gulp 原本不支持任何功能，只提供最基础的API

//载入sass 核心包
var sass = require('gulp-sass');

gulp.task('style',function(){
	gulp.src('src/**/*/*.scss')
		//让sass转换为css  插件名：gulp-sass
		.pipe(sass())
		.pipe(gulp.dest('dist/'));
});

// 添加监视任务，自动转换sass文件为css文件
gulp.task('watch',function(){
	gulp.watch('src/**/*.scss',['style']);
});


//定义一个HTTP服务器

//引入 gulp-connect 核心包
var connect = require('gulp-connect');

gulp.task('serve',function(){
	//创建服务器 connect.server();
	//默认监听8080端口
	connect.server({
		//root: 网页根目录
		root:'public',
		//文件发生变化时，自动刷新网页
		livereload:true
	});
	//添加监视，当目录下任何文件发生改变时，自动刷新
	gulp.watch('public/**/*.*',['reload']);
});

gulp.task('reload',function(){
	gulp.src('public/**/*.*')
	.pipe(connect.reload());
});

//启动命令 ： gulp serve
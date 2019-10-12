
var gulp = require( 'gulp' ),
    autoprefixer = require( 'gulp-autoprefixer' ),
    browserSync  = require( 'browser-sync' ).create(),
    reload  = browserSync.reload,
    sass  = require( 'gulp-sass' ),
    cleanCSS  = require( 'gulp-clean-css' ),
    sourcemaps  = require( 'gulp-sourcemaps' ),
    concat  = require( 'gulp-concat' ),
    imagemin  = require( 'gulp-imagemin' ),
    changed = require( 'gulp-changed' ),
    uglify  = require( 'gulp-uglify' ),
    lineec  = require( 'gulp-line-ending-corrector' );

var root = '../src/',
    scss = root + 'sass/',
    js = root + 'js/',
    jsdist = root + 'dist/js/',
    cssDEST = root + 'dist/css';

var styleWatchFiles = root + '**/**/*.scss',
    javascriptWatchFiles = root + '**/**/*.js',
    htmlWatchFiles = root + '*.html';

var jsSRC = [
    js + 'jquery-3.3.1.min.js',
    js + 'TweenMax.min.js',         
    js + 'ScrollMagic.min.js',  
    js + 'animation.gsap.min.js',     
    js + 'animation.velocity.min.js',  
    js + 'debug.addIndicators.min.js', 
    js + 'bootstrap.min.js',   
    js + 'slick.js',   
    js + 'main.js',
    js + 'animation-site.js',
    js + 'waves.js'
    
];

var cssSRC = [
    root + 'css/bootstrap.css',
    root + 'css/slick.css',
    root + 'dist/css/style.css',
];

var imgSRC = root + 'images/*',
    imgDEST = root + 'dist/images';

function css(){
    return gulp.src([scss + 'style.scss'])
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(sass({
        outputStyle: 'expanded'
    }).on('error', sass.logError))
    .pipe(autoprefixer('last 2 versions'))
    .pipe(sourcemaps.write())
    .pipe(lineec())
    .pipe(gulp.dest(cssDEST));
}

function concatCSS(){
    return gulp.src(cssSRC)
    .pipe(sourcemaps.init({loadMaps:true, largeFile: true}))
    .pipe(concat('style.min.css'))
    .pipe(cleanCSS())
    .pipe(sourcemaps.write('./maps/'))
    .pipe(lineec())
    .pipe(gulp.dest(cssDEST));
}

function javascript(){
    return gulp.src(jsSRC)
    .pipe(concat('site.js'))
    .pipe(uglify())
    .pipe(lineec())
    .pipe(gulp.dest(jsdist));
}

function imgmin(){
    return gulp.src(imgSRC)
    .pipe(changed(imgDEST))
    .pipe(imagemin([
        imagemin.gifsicle({interlaced: true}),
        imagemin.jpegtran({progressive: true}),
        imagemin.optipng({optimizationLevel: 5})
    ]))
    .pipe(gulp.dest(imgDEST));
}

function watch(){
     browserSync.init({
        server: {
            baseDir: root,
        }
    });

    gulp.watch(styleWatchFiles, gulp.series([css, concatCSS])).on('change', browserSync.reload);
    gulp.watch(jsSRC, javascript).on('change', browserSync.reload);
    gulp.watch(htmlWatchFiles).on('change', browserSync.reload);   
    gulp.watch(imgSRC, imgmin).on('change', browserSync.reload);
    gulp.watch([jsdist + 'site.js', scss + 'style.min.css']).on('change', browserSync.reload);
}

exports.css = css;
exports.concatCSS = concatCSS;
exports.javascript = javascript;
exports.watch = watch;
exports.imgmin = imgmin;

var build = gulp.parallel(watch);
gulp.task('default', build);

    

    
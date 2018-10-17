/* eslint-env node */

'use strict';

const del = require('del');
const gulp = require('gulp');
const fs = require('fs-extra');
const csso = require('gulp-csso');
const copy = require('gulp-copy');
const babel = require('gulp-babel');
const jsdoc = require('gulp-jsdoc3');
const eslint = require('gulp-eslint');
const uglify = require('gulp-uglify');
const connect = require('gulp-connect');
const htmlmin = require('gulp-htmlmin');
const replace = require('gulp-replace');
const workbox = require('workbox-build');
const firebase = require('firebase-tools');
const runSequence = require('run-sequence');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const inlinesource = require('gulp-inline-source');

const SRC_DIR = 'src';
const DEST_DIR = 'build';
const TEMP_DIR = '.tmp';

/** ***************************************************************************
 * Clean
 *****************************************************************************/

gulp.task('clean:temp', () => {
  const filesToDelete = ['.tmp/**'];
  return del(filesToDelete);
});

gulp.task('clean:build', () => {
  const filesToDelete = ['build/**'];
  return del(filesToDelete);
});

gulp.task('clean', ['clean:build', 'clean:temp']);


/** ***************************************************************************
 * Linting & Doc Generation
 *****************************************************************************/

gulp.task('lint', () => {
  const filesToLint = [
    'gulpfile.js',
    'src/index.html',
    'src/scripts/*',
  ];
  const config = {
    useEslintrc: true,
  };
  return gulp.src(filesToLint)
      .pipe(eslint(config))
      .pipe(eslint.format())
      .pipe(eslint.failAfterError());
});


/** ***************************************************************************
 * Generate Service Worker
 *****************************************************************************/

// gulp.task('generate-service-worker', () => {
//   return workbox.generateSW({
//     globDirectory: DEST_DIR,
//     globPatterns: [
//       '**/*.{html,js,png,ico,mp3,json}',
//     ],
//     globIgnores: [
//       'icons/**/*',
//     ],
//     swDest: `${DEST_DIR}/service-worker.js`,
//     clientsClaim: true,
//     skipWaiting: true,
//     offlineGoogleAnalytics: true,
//     runtimeCaching: [
//       {
//         urlPattern: /^https:\/\/fonts\.gstatic\.com/,
//         handler: 'cacheFirst',
//         options: {
//           cacheName: 'googleapis',
//           expiration: {maxEntries: 30},
//         },
//       },
//     ],
//   }).then(({warnings}) => {
//     for (const warning of warnings) {
//       console.log(warning);
//     }
//   });
// });


/** ***************************************************************************
 * Build
 *****************************************************************************/

gulp.task('css-build', () => {
  const autoprefixOpts = {
    browsers: ['last 2 versions'],
  };
  const cssoOpts = {
    sourceMap: true,
  };
  return gulp.src(`${SRC_DIR}/styles/*.css`)
      .pipe(sourcemaps.init())
      .pipe(autoprefixer(autoprefixOpts))
      .pipe(csso(cssoOpts))
      .pipe(sourcemaps.write(`../maps/`))
      .pipe(gulp.dest(`${TEMP_DIR}/styles/`));
});

gulp.task('js-build', () => {
  const uglifyOpts = {
    compress: {
      drop_console: true,
      warnings: true,
    },
  };
  return gulp.src(`${SRC_DIR}/scripts/*.js`)
      .pipe(sourcemaps.init())
      .pipe(babel({
        presets: ['@babel/env'],
      }))
      .pipe(uglify(uglifyOpts))
      .pipe(sourcemaps.write(`../maps/`))
      .pipe(gulp.dest(`${TEMP_DIR}/scripts`));
});

gulp.task('html-copy', () => {
  const filesToCopy = [
    `${SRC_DIR}/**/*.html`,
  ];
  return gulp.src(filesToCopy)
      .pipe(copy(TEMP_DIR, {prefix: 1}));
});

gulp.task('html-build', ['html-copy', 'css-build', 'js-build'], () => {
  const inlineOpts = {
    compress: true,
    pretty: false,
  };
  const htmlMinOpts = {
    collapseWhitespace: true,
    maxLineLength: 80,
    minifyCSS: true,
    minifyJS: true,
    removeComments: true,
  };
  const buildDate = new Date().toISOString();
  const packageJSON = fs.readJsonSync('package.json');
  return gulp.src(`${TEMP_DIR}/**/*.html`)
      .pipe(sourcemaps.init())
      .pipe(replace('[[BUILD_DATE]]', buildDate))
      .pipe(replace('[[VERSION]]', packageJSON.version))
      .pipe(htmlmin(htmlMinOpts))
      .pipe(inlinesource(inlineOpts))
      .pipe(sourcemaps.write(`maps/`))
      .pipe(gulp.dest(TEMP_DIR));
});

gulp.task('copy-static', () => {
  const filesToCopy = [
    `${SRC_DIR}/**/*`,
    `!${SRC_DIR}/**/*/*.markdown`,
    `!${SRC_DIR}/**/*.tmpl`,
  ];
  return gulp.src(filesToCopy)
      .pipe(copy(DEST_DIR, {prefix: 1}));
});

gulp.task('build:no-sw', ['clean'], (cb) => {
  return runSequence('html-build', 'copy-static', cb);
});

gulp.task('build', (cb) => {
  return runSequence('build:no-sw', 'generate-service-worker', cb);
});


/** ***************************************************************************
 * Development - serving
 *****************************************************************************/

gulp.task('serve', () => {
  return connect.server({root: 'src'});
});

gulp.task('serve:prod', ['build:no-sw'], () => {
  return connect.server({root: 'build'});
});


/** ***************************************************************************
 * Deploy
 *****************************************************************************/

// gulp.task('deploy-firebase', () => {
//   return firebase.deploy();
// });

// gulp.task('deploy', (cb) => {
//   return runSequence('bump:patch', 'build', 'deploy-firebase', cb);
// });

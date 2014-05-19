module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: {
      builds: [
        "builds/"
      ],
      webPost: [
        "builds/web/static/main.js",
        "builds/web/static/manifest.json"
      ],
      buildComplete: [
        "builds/partial/",
        "builds/mca/"
      ]
    },
    copy: {
      build: {
        files: [
          {expand: true, cwd: 'src/', src: ['fonts/**'], dest: 'builds/partial/'},
          {expand: true, cwd: 'src/', src: ['styles/**'], dest: 'builds/partial/'},
          {expand: true, cwd: 'src/', src: ['main.js'], dest: 'builds/partial/'},
          {expand: true, cwd: 'src/', src: ['drinkr.html'], dest: 'builds/partial/'},
          {expand: true, cwd: 'src/', src: ['manifest.json'], dest: 'builds/partial/'},
          {expand: true, cwd: 'web/', src: ['static/**'], dest: 'builds/web/'},
          {expand: true, cwd: 'web/', src: ['main.py'], dest: 'builds/web/'},
          {expand: true, cwd: 'web/', src: ['app.yaml'], dest: 'builds/web/'},
          {expand: true, cwd: 'cordova/', src: ['config.xml'], dest: 'builds/mca/www/'},
          {expand: true, cwd: 'cordova/', src: ['AndroidManifest.xml'], dest: 'builds/mca/platforms/android/'}
        ]
      },
      dist: {
        files: [
          {expand: true, cwd: 'builds/partial/', src: ['./**'], dest: 'builds/dist/'}
        ]
      },
      mcaTemp: {
        files: [
          {expand: true, cwd: 'builds/partial/', src: ['./**'], dest: 'builds/mca/www/'}
        ]
      },
      mca: {
        files: [
          {expand: true, cwd: 'builds/mca/', src: ['./**'], dest: '../GDrinker_mca/'},
          {src: ['assets/icons/gdrinker_master-96x96.png'], dest: '../GDrinker_mca/platforms/android/res/drawable/icon.png'},
          {src: ['assets/icons/gdrinker_master-36x36.png'], dest: '../GDrinker_mca/platforms/android/res/drawable-ldpi/icon.png'},
          {src: ['assets/icons/gdrinker_master-48x48.png'], dest: '../GDrinker_mca/platforms/android/res/drawable-mdpi/icon.png'},
          {src: ['assets/icons/gdrinker_master-72x72.png'], dest: '../GDrinker_mca/platforms/android/res/drawable-hdpi/icon.png'},
          {src: ['assets/icons/gdrinker_master-96x96.png'], dest: '../GDrinker_mca/platforms/android/res/drawable-xhdpi/icon.png'},
          {src: ['assets/icons/gdrinker_master-57x57.png'], dest: '../GDrinker_mca/platforms/ios/GoodDrinker/Resources/icons/icon.png'},
          {src: ['assets/icons/gdrinker_master-114x114.png'], dest: '../GDrinker_mca/platforms/ios/GoodDrinker/Resources/icons/icon@2x.png'},
          {src: ['assets/icons/gdrinker_master-120x120.png'], dest: '../GDrinker_mca/platforms/ios/GoodDrinker/Resources/icons/icon-120.png'},
          {src: ['assets/icons/gdrinker_master-72x72.png'], dest: '../GDrinker_mca/platforms/ios/GoodDrinker/Resources/icons/icon-72.png'},
          {src: ['assets/icons/gdrinker_master-177x177.png'], dest: '../GDrinker_mca/platforms/ios/GoodDrinker/Resources/icons/icon-72@2x.png'},
          {src: ['assets/splashscreens/gdrinker_master-320x480.png'], dest: '../GDrinker_mca/platforms/ios/GoodDrinker/Resources/splash/Default~iphone.png'},
          {src: ['assets/splashscreens/gdrinker_master-640x960.png'], dest: '../GDrinker_mca/platforms/ios/GoodDrinker/Resources/splash/Default@2x~iphone.png'},
          {src: ['assets/splashscreens/gdrinker_master-640x1136.png'], dest: '../GDrinker_mca/platforms/ios/GoodDrinker/Resources/splash/Default-568h@2x~iphone.png'},
          {src: ['assets/splashscreens/gdrinker_master-2048x1496.png'], dest: '../GDrinker_mca/platforms/ios/GoodDrinker/Resources/splash/Default-Landscape@2x~ipad.png'},
          {src: ['assets/splashscreens/gdrinker_master-1024x748.png'], dest: '../GDrinker_mca/platforms/ios/GoodDrinker/Resources/splash/Default-Landscape~ipad.png'},
          {src: ['assets/splashscreens/gdrinker_master-1536x2008.png'], dest: '../GDrinker_mca/platforms/ios/GoodDrinker/Resources/splash/Default-Portrait@2x~ipad.png'},
          {src: ['assets/splashscreens/gdrinker_master-768x1004.png'], dest: '../GDrinker_mca/platforms/ios/GoodDrinker/Resources/splash/Default-Portrait~ipad.png'},
        ]
      },
      dev: {
        files: [
          {expand: true, cwd: 'builds/partial/', src: ['./**'], dest: 'builds/dev/'}
        ]
      },
      test: {
        files: [
          {expand: true, cwd: 'builds/partial/', src: ['./**'], dest: 'builds/test/'},
          {expand: true, cwd: 'qunit/', src: ['qunit-1.12.0.css'], dest: 'builds/test/tests/'},
          {expand: true, cwd: 'qunit/', src: ['qunit-1.12.0.js'], dest: 'builds/test/tests/'},
          {expand: true, cwd: 'tests/', src: ['results.html'], dest: 'builds/test/tests/'},
          {expand: true, cwd: 'tests/', src: ['init.js'], dest: 'builds/test/tests/'},
          {expand: true, cwd: 'src/', src: ['scripts/en_us.js'], dest: 'builds/test/'},
          {expand: true, cwd: 'tests/', src: ['main.js'], dest: 'builds/test/'}
        ]
      },
      web: {
        files: [
          {expand: true, cwd: 'builds/partial/', src: ['./**'], dest: 'builds/web/static/'}
        ]
      }
    },
    imagemin: {
      build: {
        files: [{
          expand: true,
          cwd: 'src/img/',
          src: ['*.{png,jpg,gif}'],
          dest: 'builds/partial/img/'
        }]
      },
      buildWeb: {
        files: [{
          expand: true,
          cwd: 'web/static/img',
          src: ['*.{png,jpg,gif}'],
          dest: 'builds/web/static/img/'
        }]
      }
    },
    concat: {
      options: {
        separator: ';\r\n\r\n',
        banner: ';/* GoodDrinker, (C) <%= grunt.template.today("yyyy") %> */\r\n\r\n'
      },
      app: {
        src: [
          'src/scripts/analytics.js',
          'src/scripts/en_us.js',
          'src/scripts/controller.js',
          'src/scripts/swipe.js'
        ],
        dest: 'builds/partial/scripts/app.js'
      },
      libraries: {
        src: [
          'src/scripts/libraries/jquery-2.0.3.min.js',
          'src/scripts/angular-1.2.4/angular.js',
          'src/scripts/angular-1.2.4/angular-csp.js',
          'src/scripts/angular-1.2.4/angular-touch.js',
          'src/scripts/angular-1.2.4/angular-sanitize.js',
          'src/scripts/libraries/bootstrap-3.0.2.js',
          'src/scripts/libraries/moment-2.4.0.min.js',
          'src/scripts/helpers.js',
          'src/scripts/libraries/hammer-1.0.5.js',
          'src/scripts/libraries/google-analytics-bundle.js'
        ],
        dest: 'builds/partial/scripts/libraries.js'
      },
      dev: {
        src: [
          'builds/partial/main.js',
          'src/live_reload.js'
        ],
        dest: 'builds/dev/main.js'
      },
      tests: {
        src: [
          'src/scripts/libraries/moment-2.4.0.min.js',
          'tests/helpers.js',
          'tests/start-up.js',
          'tests/add-remove.js',
          'tests/history.js',
          'tests/manual-add.js',
          'tests/date-picker.js',
          'tests/settings.js',
          'tests/languages.js'
        ],
        dest: 'builds/test/tests/tests.js'
      },
    },
    replace: {
      build: {
        overwrite: true,
        src: [
          'builds/**/*.html',
          'builds/partial/main.js',
          'builds/partial/drinkr.html',
          'builds/partial/manifest.json',
          'builds/partial/scripts/app.js',
          'builds/web/app.yaml',
          'builds/web/main.py',
          'builds/web/static/drinkr.appcache',
          'builds/mca/www/config.xml',
          'builds/mca/platforms/android/AndroidManifest.xml'],
        replacements: [{
          from: '__BUILD_DATE__',
          to: "<%= grunt.template.today('dddd, mmmm dS, yyyy, h:MM:ss TT Z') %>"
        }, {
          from: '__BUILD_VERSION__',
          to: '<%= pkg.version %>'
        }, {
          from: '__ANALYTICS_ID__',
          to: '<%= pkg.analytics_id %>'
        }, {
          from: '__VERSION_CODE__',
          to: '<%= pkg.version_code %>'
        }]
      },
      dist: {
        overwrite: true,
        src: [
          'builds/dist/drinkr.html',
          'builds/dist/manifest.json',
          'builds/dist/scripts/app.js',
          'builds/dist/main.js'],
        replacements: [
          {
            from: '__BUILD_TYPE__',
            to: 'DIST'
          }, {
            from: '__DEBUG_MODE__',
            to: '<%= pkg.debug %>'
          },
          {
            from: '__APPCACHE_MANIFEST__',
            to: ''
          },
          {
            from: '<!-- iOSAppStoreLink -->',
            to: ''
          }
        ]
      },
      mca: {
        overwrite: true,
        src: [
          'builds/mca/www/drinkr.html',
          'builds/mca/www/scripts/app.js',
          'builds/mca/www/main.js',
          'builds/mca/www/config.xml',
          'builds/mca/platforms/android/AndroidManifest.xml'],
        replacements: [
          {
            from: '__BUILD_TYPE__',
            to: 'MCA'
          }, {
            from: '__DEBUG_MODE__',
            to: '<%= pkg.debug %>'
          },
          {
            from: '__APPCACHE_MANIFEST__',
            to: ''
          },
          {
            from: '<!-- iOSAppStoreLink -->',
            to: ''
          }
        ]
      },
      dev: {
        overwrite: true,
        src: [
          'builds/dev/drinkr.html',
          'builds/dev/manifest.json',
          'builds/dev/scripts/app.js',
          'builds/dev/main.js'],
        replacements: [
          {
            from: '__BUILD_TYPE__',
            to: 'DEV'
          }, {
            from: '__DEBUG_MODE__',
            to: 'true'
          },
          {
            from: '__APPCACHE_MANIFEST__',
            to: ''
          },
          {
            from: '<!-- iOSAppStoreLink -->',
            to: ''
          }
        ]
      },
      test: {
        overwrite: true,
        src: [
          'builds/test/drinkr.html',
          'builds/test/manifest.json',
          'builds/test/scripts/app.js',
          'builds/test/main.js'],
        replacements: [
          {
            from: '__BUILD_TYPE__',
            to: 'TEST'
          }, {
            from: '__DEBUG_MODE__',
            to: 'true'
          },
          {
            from: '__APPCACHE_MANIFEST__',
            to: ''
          },
          {
            from: '<!-- iOSAppStoreLink -->',
            to: ''
          }
        ]
      },
      web: {
        overwrite: true,
        src: [
          'builds/web/static/drinkr.html',
          'builds/web/static/scripts/app.js'],
        replacements: [
          {
            from: '__BUILD_TYPE__',
            to: 'WEB'
          }, {
            from: '__DEBUG_MODE__',
            to: '<%= pkg.debug %>'
          },
          {
            from: '__APPCACHE_MANIFEST__',
            to: 'manifest="drinkr.appcache"'
          },
          {
            from: '<!-- iOSAppStoreLink -->',
            to: '<meta name="apple-itunes-app" content="app-id=566986851"/>'
          }
        ]
      }
    },
    hashres: {
      options: {
        fileNameFormat: '${name}-${hash}.${ext}',
        renameFiles: true
      },
      web: {
        src: ['builds/web/static/drinkr.appcache'],
        dest: 'builds/web/static/drinkr.html',
      }
    },
    uglify: {
      options: {
        report: 'min',
        banner: ';/* GoodDrinker, (C) <%= grunt.template.today("yyyy") %> */\r\n\r\n'
      },
      app: {
        options: {
          preserveComments: 'all',
          compress: false,
        },
        files: {
          'builds/partial/scripts/app.js': [
            'src/scripts/analytics.js',
            'src/scripts/en_us.js',
            'src/scripts/controller.js',
            'src/scripts/swipe.js'
          ]
        }
      },
      libraries: {
        options: {
          preserveComments: 'all',
          compress: false,
        },
        files: {
          'builds/partial/scripts/libraries.js': [
            'src/scripts/libraries/jquery-2.0.3.min.js',
            'src/scripts/angular-1.2.3/angular.js',
            'src/scripts/angular-1.2.3/angular-csp.js',
            'src/scripts/angular-1.2.3/angular-touch.js',
            'src/scripts/angular-1.2.3/angular-sanitize.js',
            'src/scripts/libraries/bootstrap-3.0.2.js',
            'src/scripts/libraries/moment-2.4.0.min.js',
            'src/scripts/helpers.js',
            'src/scripts/libraries/hammer-1.0.5.js',
            'src/scripts/libraries/google-analytics-bundle.js'
          ]
        }
      },
      distApp: {
        options: {
          mangle: true,
        },
        files: {
          'builds/dist/scripts/app.js': ['builds/partial/scripts/app.js']
        }
      },
      distLibraries: {
        options: {
          mangle: false
        },
        files: {
          'builds/dist/scripts/libraries.js': ['builds/partial/scripts/libraries.js']
        }
      },
      mcaApp: {
        options: {
          mangle: true,
        },
        files: {
          'builds/mca/www/scripts/app.js': [
            'src/scripts/mca-polyfill.js',
            'builds/partial/scripts/app.js'
        ]
        }
      },
      mcaLibraries: {
        options: {
          mangle: false
        },
        files: {
          'builds/mca/www/scripts/libraries.js': ['builds/partial/scripts/libraries.js']
        }
      },
      webLibraries: {
        options: {
          mangle: false
        },
        files: {
          'builds/web/static/scripts/libraries.js': [
            'src/scripts/web-polyfill.js',
            'builds/web/static/scripts/libraries.js']
        }
      },
      testLibraries: {
        options: {
          mangle: false
        },
        files: {
          'builds/test/scripts/libraries.js': [
            'builds/partial/scripts/libraries.js',
            'tests/jquery.simulate.js']
        }
      }
    },
    jshint: {
      files: [
        'builds/dev/main.js',
        'builds/dev/scripts/app.js'
      ],
      options: {
        reporter: require('jshint-stylish'),
        "-W032": true,
        browser: true,
        curly: true,
        eqeqeq: true,
        eqnull: true,
        expr: true,
        evil: true,
        indent: 2,
        latedef: true,
        noarg: true,
        sub: true,
        trailing: true,
        undef: true,
        unused: true,
        globals: {
          chrome: true,
          angular: true,
          moment: true,
          "$": true,
          jQuery: true,
          WebSocket: true,
          analytics: true,
          Hammer: true,
          console: true
        }
      }
    },
    shell: {
      buildMCA: {
        options: {
          stdout: true,
          stderr: true,
          execOptions: {
            cwd: '../GDrinker_mca'
          }
        },
        command: './mca prepare'
      }
    },
    responsive_images: {
      icons: {
        options: {
          sizes:[
            {width: 36, height: 36},
            {width: 48, height: 48},
            {width: 57, height: 57},
            {width: 72, height: 72},
            {width: 96, height: 96},
            {width: 114, height: 114},
            {width: 120, height: 120},
            {width: 128, height: 128},
            {width: 177, height: 177},
            {width: 512, height: 512}
          ]
        },
        files: [{
          expand: true,
          cwd: 'assets',
          src: ['gdrinker_master.png'],
          dest: 'assets/icons/'
        }]
      },
      splashscreens: {
        options: {
          sizes:[
            {width: 320, height: 426},
            {width: 320, height: 470},
            {width: 320, height: 480},
            {width: 480, height: 640},
            {width: 720, height: 960},
            {width: 640, height: 960},
            {width: 640, height: 1136},
            {width: 2048, height: 1496},
            {width: 1024, height: 748},
            {width: 1536, height: 2008},
            {width: 768, height: 1004}
          ]
        },
        files: [{
          expand: true,
          cwd: 'assets',
          src: ['gdrinker_master.png'],
          dest: 'assets/splashscreens/'
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-text-replace');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-hashres');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-responsive-images');

  grunt.registerTask('buildImages', [
    'responsive_images']);

  grunt.registerTask('build', [
    'clean',
    'copy:build',
    'imagemin:build',
    'imagemin:buildWeb',
    'concat:app',
    'concat:libraries',
    'replace:build']);

  grunt.registerTask('dist', [
    'copy:dist',
    'uglify:distApp',
    'uglify:distLibraries',
    'replace:dist']);

  grunt.registerTask('mca', [
    'copy:mcaTemp',
    'uglify:mcaApp',
    'uglify:mcaLibraries',
    'replace:mca',
    'copy:mca',
    'shell:buildMCA']);

  grunt.registerTask('dev', [
    'copy:dev',
    'concat:dev',
    'replace:dev']);

  grunt.registerTask('test', [
    'copy:test',
    'concat:tests',
    'uglify:testLibraries',
    'replace:test']);

  grunt.registerTask('web', [
    'copy:web',
    'uglify:webLibraries',
    'replace:web',
    'hashres:web',
    'clean:webPost']);

  grunt.registerTask('default', [
    'build',
    'test',
    'dist',
    'dev',
    'mca',
    'web',
    'clean:buildComplete']);

  grunt.registerTask('watch', ['watch']);
};

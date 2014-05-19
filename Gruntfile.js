/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    // Task configuration.
    cssmin: {
      combine: {
        options: {
          keepSpecialComments: 0
        },
        files: {
          '_build/css/styles.min.css': [
            '_build/css/bootstrap.css',
            '_build/css/custom.css'
          ]
        }
      }
    },
    replace: {
      deploy: {
        overwrite: true,
        src: ['_build/**/*.html'],
        replacements: [{
          from: '<link href="/css/bootstrap.css" rel="stylesheet">',
          to: '<link href="/css/styles.min.css" rel="stylesheet">'
        }, {
          from: '<link href="/css/custom.css" rel="stylesheet">',
          to: ''
        }]
      }
    },
    imagemin: {
      build: {
        files: [{
          expand: true,
          cwd: '_build/',
          src: ['**/*.{png,jpg,gif}'],
          dest: '_build/'
        }]
      }
    },
    pagespeed: {
      prod: {
        options: {
          key: "AIzaSyB6eDUXbmPFFBIdRN-UMbDbVMFn3wYw3fI",
          url: "http://www.petelepage.com",
          paths: [
            "/",
            "/blog"
          ],
          locale: "en_US",
          strategy: "mobile",
          threshold: 95
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-text-replace');
  grunt.loadNpmTasks('grunt-pagespeed');
  grunt.loadNpmTasks('grunt-contrib-imagemin');


  // Default task.
  grunt.registerTask('default', ['cssmin', 'replace']);
  grunt.registerTask('test', ['pagespeed']);

};
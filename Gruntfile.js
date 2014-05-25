/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    // Task configuration.
    jekyll: {                             // Task
      options: {                          // Universal options
        bundleExec: false
      },
      build: {                             // Target
        options: {                        // Target options
          config: '_config.yml'
        }
      }
    },
    gae: {
      options: {
        path: "_build/"
      },
      serve: {
        action: 'run',
        options: {
          args: {
            port: 13080
          }
        }
      },
      deploy: {
        action: 'update'
      }
    },
    replace: {
      deploy: {
        overwrite: true,
        src: ['_build/app.py'],
        replacements: [{
          from: 'DEBUG=True',
          to: 'DEBUG=False'
        }]
      }
    },
    open: {
      flush: {
        path: 'http://www.petelepage.com/flush/',
        app: 'Google Chrome'
      }
    },
    imagemin: {
      build: {
        files: [{
          expand: true,
          cwd: '_build/',
          src: ['**/*.{png,jpg,gif,svg}'],
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
            "/blog/"
          ],
          locale: "en_US",
          strategy: "mobile",
          threshold: 95
        }
      }
    }
  });

  //'**/*.{png,jpg,gif}'
  grunt.loadNpmTasks('grunt-text-replace');
  grunt.loadNpmTasks('grunt-pagespeed');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-gae');
  grunt.loadNpmTasks('grunt-jekyll');
  grunt.loadNpmTasks('grunt-open');


  // Default task.
  grunt.registerTask('default', ['jekyll:build', 'gae:serve']);
  grunt.registerTask('build', ['jekyll:build']);
  grunt.registerTask('serve', ['gae:serve']);
  grunt.registerTask('deploy', ['replace:deploy', 'gae:deploy', 'open:flush']);

};

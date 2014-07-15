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
    },
    http: {
      githubHead: {
        options: {
          url: "https://api.github.com/repos/petele/petelepage.com/git/refs/head",
          headers: {"User-Agent": "petele"}
        },
        dest: "./sha-github.json"
      }
    },
    copy: {
      shaStatic: {
        src: "./sha-github.json",
        dest: "./_build/static/sha-live.json"
      },
      shaLive: {
        src: "./sha-github.json",
        dest: "./sha-live.json"
      }
    },
    gitpull: {
      your_target: {

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
  grunt.loadNpmTasks('grunt-http');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-git');

  grunt.registerTask('cleanBuild', '', function() {
    grunt.file.delete('./_build/README.md');
    grunt.file.delete('./_build/sha-github.json');
    grunt.file.delete('./_build/sha-live.json');
  });

  grunt.registerTask('pull', '', function() {
    grunt.task.requires('http:githubHead');
    var githubSHA = grunt.file.readJSON('./sha-github.json');
    var deployedSHA = grunt.file.readJSON('./sha-live.json');
    if (githubSHA[0].object.sha === deployedSHA[0].object.sha) {
      grunt.log.writeln("Heads are identical, no update required.");
    } else {
      grunt.log.writeln("Heads are different, update required.");

      grunt.task.run(['gitpull', 'build', 'copy:shaStatic', 'deploy', 'copy:shaLive']);
    }
  });



  // Default task.
  grunt.registerTask('default', ['jekyll:build', 'gae:serve']);
  grunt.registerTask('build', ['jekyll:build', 'cleanBuild']);
  grunt.registerTask('serve', ['gae:serve']);
  grunt.registerTask('deploy', ['replace:deploy', 'gae:deploy', 'open:flush']);
  grunt.registerTask('update', ['http:githubHead', 'pull']);
};

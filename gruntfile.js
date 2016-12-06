'use strict';

module.exports = function(grunt) {
  'use strict'

    grunt.initConfig({

        clean: [ 'build/' ],

        jshint: {
            options: {
                jshintrc: '.jhintrc',
                ignores: [ 'node_modules/**' ]
            },
            source: {
              files: {
                src: ['src/js/**/*.js']
              }
            },
        },

        copy: {
            html: {
                files: [
                    {
                      expand: true,
                      cwd: 'src/',
                      src: 'index.html',
                      dest: 'build/'
                    }
                ]
            }
            vendorjs: {
              files: [
                {
                  expand: true,
                  cwd: 'node_modules/angular',
                  src: [ 'angular.js' ],
                  dest: 'build/js/'
                },
                {
                  expand: true,
                  cwd: 'node_modules/angular-ui-router',
                  src: [ 'angular-ui-router.js' ],
                  dest: 'build/js/'
                }
              ]
            },
        },

    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('')

    grunt.registerTask('default', [ 'copy' ]);
    grunt.registerTask('build', )
};

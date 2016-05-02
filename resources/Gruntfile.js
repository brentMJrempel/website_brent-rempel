module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({

        concat: {
            app: {
                src: [
                    'bower_components/jquery/dist/jquery.slim.min.js',
                    'bower_components/moment/moment.js',
                    'bower_components/hammer.js/hammer.min.js',
                    'scripts/toggle.js'
                ],
                dest: '../Scripts/app.js',
            },

            modernizr : {
                src: 'bower_components/foundation/js/vendor/modernizr.js',
                dest: '../Scripts/modernizr.js'
            }
        },

        uglify: {
            build: {
                src: '../Scripts/app.js',
                dest: '../Scripts/app.js'
            }
        },

        sass: {
            dev: {
                options: {
                    style: 'expanded'
                },
                files: {                           
                    '../Styles/main.css': 'sass/main.scss'
              }
            },
            prod: {
                options: {
                    style: 'compressed',
                    sourcemap: 'none'
                },
                files: {
                    '../Styles/main.css': 'sass/main.scss'
                }
            }
        },

        watch: {
            scripts: {
                files: ['scripts/*.js'],
                tasks: ['concat'],
                options: {
                    spawn: false,
                    livereload: true,
                },
            },

            css: {
                files: ['sass/*.scss', 'sass/imports/*.scss'],
                tasks: ['sass:dev'],
                options: {
                   spawn: false,
                   livereload: true,
                }
            }
        },

    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-processhtml');
    grunt.loadNpmTasks('grunt-replacer');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['concat', 'sass:dev']);
    grunt.registerTask('production', ['concat', 'uglify', 'sass:prod', 'versioning']);
    grunt.registerTask('dev', ['concat', 'sass:dev','watch']);

};
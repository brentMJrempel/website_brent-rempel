module.exports = function(grunt) {

    grunt.initConfig({

        concat: {
            app: {
                src: [
                    'bower_components/jquery/dist/jquery.slim.min.js',
                    'bower_components/hammer.js/hammer.min.js',
                    'scripts/toggle.js',
                    'scripts/name.js'
                ],
                dest: '../brent_rempel/Scripts/app.js',
            },

            modernizr : {
                src: 'bower_components/foundation/js/vendor/modernizr.js',
                dest: '../brent_rempel/Scripts/modernizr.js'
            }
        },

        uglify: {
            build: {
                src: '../brent_rempel/Scripts/app.js',
                dest: '../brent_rempel/Scripts/app.js'
            }
        },

        sass: {
            dev: {
                options: {
                    style: 'expanded'
                },
                files: {
                    '../brent_rempel/Styles/main.css': 'sass/main.scss'
              }
            },
            prod: {
                options: {
                    style: 'compressed',
                    sourcemap: 'none'
                },
                files: {
                    '../brent_rempel/Styles/main.css': 'sass/main.scss'
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

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-processhtml');
    grunt.loadNpmTasks('grunt-replacer');

    grunt.registerTask('default', ['concat', 'sass:dev']);
    grunt.registerTask('production', ['concat', 'uglify', 'sass:prod']);
    grunt.registerTask('dev', ['concat', 'sass:dev','watch']);

};
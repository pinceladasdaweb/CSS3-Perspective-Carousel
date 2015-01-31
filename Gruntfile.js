module.exports = function (grunt) {
    "use strict";

    var pkg = grunt.file.readJSON("package.json");

    grunt.initConfig({
        meta: {
            banner: '/*! '+pkg.name+' '+pkg.version+' | (c) 2015 '+pkg.author+' | '+pkg.licenses[0].type+' License */'
        },
        cssmin: {
            target: {
                files: {
                    'build/carousel.min.css': ['lib/*.css']
                }
            }
        },
        uglify: {
            options: {
                banner: '<%= meta.banner %>\n'
            },
            target: {
                files: {
                    'build/carousel.min.js': ['lib/carousel.js']
                }
            }
        },
        watch: {
            css: {
                files: ['lib/carousel.css'],
                tasks: ['cssmin'],
                options: {
                    livereload: true,
                },
            },
            js: {
                files: ['lib/carousel.js'],
                tasks: ['uglify'],
                options: {
                    livereload: true,
                },
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', [ 'cssmin', 'uglify' ]);
};

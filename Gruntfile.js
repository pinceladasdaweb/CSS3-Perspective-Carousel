module.exports = function (grunt) {
    "use strict";

    var pkg = grunt.file.readJSON("package.json");

    grunt.initConfig({
        meta: {
            banner: '/*! '+pkg.name+' '+pkg.version+' | (c) 2014 '+pkg.author+' | '+pkg.licenses[0].type+' License */'
        },
        cssmin: {
            add_banner: {
                options: {
                    banner: '<%= meta.banner %>'
                },
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
        }
    });

    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', [ 'cssmin', 'uglify' ]);
};

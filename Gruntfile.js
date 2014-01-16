/* jshint node: true */

'use strict';

module.exports = function (grunt) {
    grunt.initConfig({
        jsdoc: {
            dist: {
                src: ['src/**/*.js'],
                options: {
                    destination: 'jsdoc-generated',
                    lenient: true
                }
            }
        }
    });
    // Load npm plugins to provide necessary tasks.
    grunt.loadNpmTasks('grunt-jsdoc');
};

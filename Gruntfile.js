/* jshint node: true */

'use strict';

module.exports = function (grunt) {
    grunt.initConfig({
        jsdoc: {
            dist: {
                src: ['src/**/*.js'],
                options: {
                    destination: 'jsdoc-generated',
                    lenient: true,
                    template: "./node_modules/ink-docstrap/template",
                    configure: "./node_modules/ink-docstrap/template/jsdoc.conf.json"
                }
            }
        }
    });
    // Load npm plugins to provide necessary tasks.
    grunt.loadNpmTasks('grunt-jsdoc');
};

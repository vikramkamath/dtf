module.exports = function(grunt){
    grunt.initConfig({
        // configure jshint
        jshint: {
            all: [
                'Gruntfile.js',
                'src/**/*.js',
                'test/**/*.js'
            ],
            options: {
                jshintrc: '.jshintrc'
            }
        },
        // configure jasmine
        jasmine: {
            pivotal: {
                src: 'src/**/*.js',
                options: {
                    specs: 'spec/*Spec.js',
                    helpers: 'spec/*Helper.js'
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.registerTask('default', ['jshint','jasmine']);
};

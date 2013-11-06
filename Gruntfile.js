module.exports = function(grunt) {

    grunt.initConfig({
        // Setting up sass to make it available
        sass: {
            dev: {
                options: {
                    style: 'expanded'
                },
                files: {}
            }
        },
        watch: {
            sass: {
                files: ['src/assets/sass/**/*.scss'],
                tasks: ['sass']
            },
            livereload: {
                options: { livereload: true },
                files: ['src/front/app/**/*.css', 'src/front/app/**/*.js']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', ['sass:dev']);

    // Development version
    grunt.registerTask('dev', ['sass:dev', 'watch']);

};
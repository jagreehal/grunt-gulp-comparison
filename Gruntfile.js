module.exports = function(grunt){
	require('time-grunt')(grunt);

	grunt.initConfig({
		autoprefixer: {
			options: {
				browsers: ['last 10 version']
			},
			css: {
				files: {
					'./dist/grunt.styles.css': './dist/grunt.styles.css'
				}
			}
		},
		cssmin: {
			minify: {
				files: {
					'./dist/grunt.styles.css': './src/*.css'
				}
			}
		},
		watch: {
			styles: {
				files: './src/*.css',
				tasks: ['styles']
			}
		}
	});

	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('styles', ['cssmin', 'autoprefixer'])

	grunt.registerTask('default', ['styles', 'watch']);
};
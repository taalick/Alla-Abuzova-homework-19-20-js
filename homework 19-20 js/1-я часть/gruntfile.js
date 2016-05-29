module.exports = function(grunt) {

  grunt.initConfig({
     concat: {     
      dist: {
        src: ['styles/src/variables.scss','styles/src/reset.scss' ,'styles/src/styles_for_the_header_blocks.scss', 'styles/src/styles_for_the_mean_blocks.scss', 'styles/src/styles_for_the_footer_blocks.scss', 'styles/src/accordion.scss', 'styles/src/styles_for_large_main_blocks.scss'],
        dest: 'styles/dist/style.main.scss'
      }
    },  

    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: 'styles/dist',
          src: ['style.main.scss'],
          dest: 'styles/dist',
          ext: '.main.css'
        }]
        }
    },

     cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'styles/dist/style.main.min.css': ['styles/dist/style.main.css']
        }
      }
    },

    watch: {
      sass: {
        // We watch and compile sass files as normal but don't live reload here
        files: ['styles/src/*.scss'],
        tasks: ['concat','sass','cssmin'],       
      }
    },
   
  });


  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-sass');  
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['concat', 'sass', 'cssmin']);
};
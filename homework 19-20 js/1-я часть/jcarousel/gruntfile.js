module.exports = function(grunt) {

  grunt.initConfig({
     concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['js/src/jquery.jcarousel-core.js', 'js/src/jquery.jcarousel-scrollintoview.js', 'js/src/jquery.jcarousel-control.js', 'js/src/jquery.jcarousel-pagination.js', 'js/src/jquery.jcarousel-autoscroll.js'],
        dest: 'js/dist/jquery.jcarousel.js'
      }
    },

    uglify: {      
        dist: {
          src: ['js/dist/jquery.jcarousel.js'],
          dest: 'js/dist/jquery.jcarousel.min.js'
        }
      },
    
    /*concat_css: {
        options: {
          // Task-specific options go here. 
        },
        all: {
          src: ["css/src/*.css"],
          dest: "css/dist/style.main.css"
        },
      },
    
    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'css/dist/style.main.min.css': ['css/dist/style.main.css']
        }
      }
    }*/
  });


  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  /*grunt.loadNpmTasks('grunt-concat-css');
  grunt.loadNpmTasks('grunt-contrib-cssmin');*/

 // grunt.registerTask('default', ['concat', 'uglify', 'concat_css', 'cssmin']);
 grunt.registerTask('default', ['concat', 'uglify']);
};
module.exports = function(grunt){
  [
    'grunt-cafe-mocha',
    'grunt-contrib-jshint',
    'grunt-exec',
  ].forEach(function(task){
    grunt.loadNpmTasks(task);
  });

grunt.initConfig({
  cafemocha: {
    all: { src: 'qa/tests-unit.js', options: { ui: 'tdd' }, }
  }, jshint: {
    app: ['meadowlark.js', 'public/js/**/*.js',
      'lib/**/*.js'],
    qa: ['Gruntfile.js', 'public/qa/**/*.js', 'qa/**/*.js'],
   }, exec: { // cmd linkchecker localh ko
    linkchecker:
//       { cmd: 'linkchecker http://localhost:3000' }
      { cmd: 'ls' }
  }, 
});

grunt.registerTask('default', ['cafemocha','jshint','exec']);
};

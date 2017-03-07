module.exports = function(config){
  config.set({

    basePath : './',

    files : [
	  'app/bower_components/jquery/jquery.js',
      'app/bower_components/angular/angular.js',
      'app/bower_components/angular-route/angular-route.js',
      'app/bower_components/angular-mocks/angular-mocks.js',
	  'app/app.js',
      'app/components/**/*.js',
      'app/view*/**/*.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-chrome-launcher',
            'karma-jasmine',
			'karma-jasmine-html-reporter',
			'karma-coverage'
            ],

    reporters: ['html','progress', 'coverage'],
	
	preprocessors: {
      // source files, that you wanna generate coverage for 
      // do not include tests or libraries 
      // (these files will be instrumented by Istanbul) 
      'app/components/**/*.js': ['coverage'], 
	  'app/view*/**/*.js': ['coverage']
    },
	
	// optionally, configure the reporter 
    coverageReporter: {
      type : 'html',
      dir : 'coverage/'
    }
	
  });
};

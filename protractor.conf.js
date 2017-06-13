exports.config = {

    baseUrl: 'http://todomvc.com',

    // https://github.com/angular/protractor/blob/master/docs/timeouts.md
    allScriptsTimeout: 110000,

    disableChecks: true,

    // https://github.com/protractor-cucumber-framework/protractor-cucumber-framework#uncaught-exceptions
    ignoreUncaughtExceptions: true,

    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    specs: [ 'features/**/*.feature' ],

    cucumberOpts: {
        require:    [ 'features/**/*.ts' ],
        format:     'pretty',
        compiler:   'ts:ts-node/register'
    },

    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: [
                'disable-infobars'
                // 'incognito',
                // 'disable-extensions',
                // 'show-fps-counter=true'
            ]
        }
    },

    // so that every tests starts with a system in a known state
    restartBrowserBetweenTests: true
};

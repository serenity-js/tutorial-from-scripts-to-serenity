exports.config = {

    baseUrl: 'http://todomvc.com',

    // https://github.com/angular/protractor/blob/master/docs/timeouts.md
    allScriptsTimeout: 110000,

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
                'incognito',
                'disable-extensions'
            ]
        }
    },

    // so that every tests starts with a system in a known state
    restartBrowserBetweenTests: true
};

import { protractor } from 'protractor';

export = function hooks() {

    this.After(() => protractor.browser.executeScriptWithDescription([
        'window.sessionStorage.clear();',
        'window.localStorage.clear();',
    ].join('\n'), 'Clean up local storage'));
};

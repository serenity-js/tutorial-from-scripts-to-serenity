export = function todoUserSteps() {

    this.setDefaultTimeout(30 * 1000);  // The todomvc.com website can sometimes be a bit slow to load, so we tell
                                        // Cucumber to give it up to 30 seconds to get ready.

    this.Given(/^.*that (.*) has a todo list containing (.*)$/, function (name: string, items: string, callback) {
        callback(null, 'pending');
    });

    this.When(/^s?he adds (.*?) to (?:his|her) list$/, function (itemName: string, callback) {
        callback(null, 'pending');
    });

    this.Then(/^.* todo list should contain (.*?)$/, function (items: string, callback) {
        callback(null, 'pending');
    });
};

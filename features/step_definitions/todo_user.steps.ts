export = function todoUserSteps() {

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

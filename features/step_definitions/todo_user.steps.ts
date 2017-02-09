import { Actor } from 'serenity-js/lib/screenplay';
import { BrowseTheWeb } from 'serenity-js/lib/screenplay-protractor';
import { protractor } from 'protractor';

import { Start, AddATodoItem } from '../../spec/screenplay/tasks';
import { listOf } from '../../spec/text';
import { expect } from '../../spec/expect';
import { TodoList } from '../../spec/screenplay/components/todo_list';

export = function todoUserSteps() {

    let actor: Actor;

    this.Given(/^.*that (.*) has a todo list containing (.*)$/, function (name: string, items: string) {
        actor = Actor.named(name).whoCan(BrowseTheWeb.using(protractor.browser));

        return actor.attemptsTo(
            Start.withATodoListContaining(listOf(items))
        );
    });

    this.When(/^s?he adds (.*?) to (?:his|her) list$/, function (itemName: string) {
        return actor.attemptsTo(
            AddATodoItem.called(itemName)
        )
    });

    this.Then(/^.* todo list should contain (.*?)$/, function (items: string) {
        return expect(actor.toSee(TodoList.Items_Displayed)).eventually.deep.equal(listOf(items))
    });
};

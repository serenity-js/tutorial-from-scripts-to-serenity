import { PerformsTasks, Task } from 'serenity-js/lib/screenplay';
import { Open } from 'serenity-js/lib/screenplay-protractor';

import { AddATodoItem } from './add_a_todo_item';

export class Start implements Task {

    static withATodoListContaining(items: string[]) {
        return new Start(items);
    }

    performAs(actor: PerformsTasks): PromiseLike<void> {
        return actor.attemptsTo(
            Open.browserOn('/examples/angularjs/'),
            ...this.addAll(this.items)                          // ``...` is a spread operator,
        );                                                      // which converts a list to vararg
    }

    constructor(private items: string[]) {
    }

    private addAll(items: string[]): Task[] {                   // transforms a list of item names
        return items.map(item => AddATodoItem.called(item));    // into a list of Tasks
    }
}
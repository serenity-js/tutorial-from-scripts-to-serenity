import { Enter, PerformsTasks, Task, step } from 'serenity-js/lib/screenplay-protractor'; // imports the @step
import { protractor } from 'protractor';
import { TodoList } from '../components/todo_list';

export class AddATodoItem implements Task {

    static called(itemName: string) {                       // static method to improve the readability
        return new AddATodoItem(itemName);
    }

    @step('{0} adds a Todo Item called #itemName')          // Gives the Task a more descriptive name
    performAs(actor: PerformsTasks): PromiseLike<void> {
        return actor.attemptsTo(
            Enter.theValue(this.itemName)
                .into(TodoList.What_Needs_To_Be_Done)
                .thenHit(protractor.Key.ENTER)
        );
    }

    constructor(private itemName: string) {                 // constructor assigning the name of the item
    }                                                       // to a private field
}
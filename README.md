# Serenity/JS - Getting Started

This project acts as supplementary material for
the official [Serenity/JS](https://github.com/jan-molak/serenity-js) tutorial: 
["From Scripts to Serenity"](http://serenity-js.org/from-scripts-to-serenity/readme.html).

## Prerequisites

To follow the tutorial, you'll need:

* [Node.js and NPM](https://nodejs.org/en/)
* A web browser, ideally [Chrome](https://www.google.co.uk/chrome/browser/desktop/)

You'll also need access to the [command line interface](https://en.wikipedia.org/wiki/Command-line_interface).

The below code listings, which look like this one below, mean "type `whoami` into the command line":

```
$> whoami
```

## Setup

First, make sure that you have the [required tools](http://serenity-js.org/overview/prerequisites.html) installed.
Next, [clone](https://help.github.com/articles/cloning-a-repository/) this project to your computer:

```
$> git clone https://github.com/serenity-js/tutorial-from-scripts-to-serenity.git
$> cd tutorial-from-scripts-to-serenity
```

Install the dependencies

```
$> npm install
```

And make sure that you can execute the acceptance tests using
[Protractor](https://github.com/angular/protractor) and
[Cucumber](https://github.com/cucumber/cucumber-js):

```
$> npm test
```

Calling the above command should give you output similar to the one below, notifying you of a pending step:

```
Feature: Add new items to the todo list

  In order to avoid having to remember things that need doing
  As a forgetful person
  I want to be able to record what I need to do in a place where I won't forget about them

  Scenario: Adding an item to a list with other items
    Given that James has a todo list containing Buy some cookies, Walk the dog
    When he adds Buy some cereal to his list
    Then his todo list should contain Buy some cookies, Walk the dog, Buy some cereal

Warnings:

1) Scenario: Adding an item to a list with other items - features/add_new_items.feature:7
   Step: Given that James has a todo list containing Buy some cookies, Walk the dog - features/add_new_items.feature:8
   Step Definition: features/step_definitions/todo_user.steps.ts:3
   Message:
     Pending

1 scenario (1 pending)
3 steps (1 pending, 2 skipped)
0m00.002s
```
## That's it!

If you're done with the setup, [head back to the tutorial](http://serenity-js.org/from-scripts-to-serenity/readme.html).

## Your feedback matters!

Do you find [Serenity/JS](https://github.com/jan-molak/serenity-js) useful? Give it a star! &#9733;

Found a bug? Need a feature? Raise [an issue](https://github.com/jan-molak/serenity-js/issues?state=open)
or submit a pull request.

Have feedback? Let me know on twitter: [@JanMolak](https://twitter.com/JanMolak)

var fs = require('fs');
var inquirer = require('inquirer');
var BasicCard = require('./BasicCard.js');
var ClozeCard = require('./ClozeCard.js');
var choice = process.argv[1];


function createCard() {
    inquirer.prompt([{
        type: "list",
        message: "Which card do you want to make?",
        choices: ["Basic Card", "Cloze Card"],
        name: "choice"
    }, {
        type: "confirm",
        message: "Are you sure:",
        name: "confirm",
        default: true
    }]).then(function(decision) {

        if (decision.confirm) {
            if (decision.choice === "Basic Card") {
                inquirer.prompt([

                    {
                        type: "input",
                        message: "What is your question?",
                        name: "front"
                    }, {
                        type: "input",
                        message: "What is the answer?",
                        name: "back"
                    }, {
                        type: "confirm",
                        message: "Are you sure:",
                        name: "confirm",
                        default: true
                    }
                ]).then(function(basicCard) {

                    JSON.stringify(basicCard, null, 2);

                    if (basicCard.confirm) {
                        console.log(basicCard.front);
                        console.log(basicCard.back);
                    } else {
                        console.log("Sorry about that.");
                    }
                });
            } else if (decision.choice === "Cloze Card") {
                inquirer.prompt([{
                    type: "input",
                    message: "What is your sentence?",
                    name: "text"
                }, {
                    type: "input",
                    message: "What word(s) do you want hidden?",
                    name: "cloze"
                }]).then(function(clozeCard) {
                    var replace = clozeCard.text.replace(clozeCard.cloze, "...");
                    console.log(replace);
                    console.log(clozeCard.text);
                    console.log(clozeCard.cloze);
                })
            } else {
                console.log("error");
            }
        } else {
            console.log("error");
        }
    });
}
createCard();

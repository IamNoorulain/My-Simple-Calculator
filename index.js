#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let answer = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "firstnumber" },
    { message: "Enter second number", type: "number", name: "secondnumber" },
    {
        message: "Select one of the operator to perform operation",
        type: "list",
        name: "operator",
        choices: ["addition", "subtraction", "multiplication", "division"]
    }
]);
if (answer.operator === "addition") {
    console.log(chalk.green.bold(answer.firstnumber + answer.secondnumber));
}
else if (answer.operator === "subtraction") {
    console.log(chalk.red.bold(answer.firstnumber - answer.secondnumber));
}
else if (answer.operator === "multiplication") {
    console.log(chalk.blue.bold(answer.firstnumber * answer.secondnumber));
}
else if (answer.operator === "division") {
    console.log(chalk.yellow.bold(answer.firstnumber / answer.secondnumber));
}
else {
    console.log("you typed an invalid operator");
}

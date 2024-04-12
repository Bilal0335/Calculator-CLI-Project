#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const log = console.log;
// class Calculator {
//   welcomMessage() {
//     let animation = chalkAnimation.karaoke(`
//       Hey get ready for some math magic with our calculator.     xD 
//                        _____________________
//                       |  _________________  |
//                       | | JO           0. | |
//                       | |_________________| |
//                       |                     |
//                       |  ___ ___ ___   ___  |
//                       | | 7 | 8 | 9 | | + | |
//                       | |___|___|___| |___| |
//                       | | 4 | 5 | 6 | | - | |
//                       | |___|___|___| |___| |
//                       | | 1 | 2 | 3 | | x | |
//                       | |___|___|___| |___| |
//                       | | . | 0 | = | | / | |
//                       | |___|___|___| |___| |
//                       |_____________________|
//     `);
//     setTimeout((): void => {
//       animation.stop();
//     }, 3000);
//   }
// }
// const myCalculator = new Calculator();
// myCalculator.welcomMessage();
let playAgain;
do {
    const answer = await inquirer.prompt([
        {
            message: chalk.black("Enter Your First Number:"),
            type: "number",
            name: "firsnum",
        },
        {
            message: chalk.bgRed.white.bold.italic("Select one of the operator to perform action"),
            type: "list",
            name: "operator",
            choices: [
                chalk.green("+ Addition"),
                chalk.yellow("- Subtraction"),
                chalk.gray("* Multiplication"),
                chalk.red("/ Division"),
                chalk.blue("^ Power")
            ],
        },
        {
            message: chalk.black("Enter Your Second Number:"),
            type: "number",
            name: "secondnum",
        },
    ]);
    //Condtional Statement
    if (answer.operator === chalk.green("+ Addition")) {
        log(`${chalk.green(`Addition:`)} ${chalk.blue(`${answer.firsnum + answer.secondnum}`)}`);
    }
    else if (answer.operator === chalk.yellow("- Subtraction")) {
        log(`${chalk.yellow(`Substraction:`)} ${chalk.blue(`${answer.firsnum - answer.secondnum}`)}`);
    }
    else if (answer.operator === chalk.gray("* Multiplication")) {
        log(`${chalk.blueBright(`Multiplication:`)} ${chalk.blue(`${answer.firsnum * answer.secondnum}`)}`);
    }
    else if (answer.operator === chalk.red("/ Division")) {
        log(`${chalk.red(`Division:`)} ${chalk.blue(`${(answer.firsnum / answer.secondnum).toFixed(4)}`)}`);
    }
    else if (answer.operator === chalk.blue("^ Power")) {
        log(`${chalk.red(`Power:`)} ${chalk.blue(`${Math.pow(answer.firsnum, answer.secondnum)}`)}`);
    }
    else {
        log(`${chalk.red(`Please Select Invalid Operator`)}`);
    }
    const responses = await inquirer.prompt([
        {
            message: "Do you want to continue (Y/N)?",
            type: "input",
            name: "continue",
        },
    ]);
    playAgain = responses.continue.toUpperCase();
} while (playAgain === "Y");
log(`${chalk.yellow("Exiting calculator. Goodbye!😄")}`);

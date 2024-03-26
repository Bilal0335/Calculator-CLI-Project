#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
const log = console.log;
async function calAni() {
    let titleCal = chalkAnimation.rainbow("\n\t\tSimple Calculator CLI\t\t\n");
    await new Promise((resolve) => setTimeout(resolve, 1000));
    titleCal.stop();
}
await calAni();
let playAgain;
do {
    const answer = await inquirer.prompt([
        {
            message: chalk.black("Enter Your First Number:"),
            type: "number",
            name: "firsnum",
        },
        {
            message: chalk.black("Enter Your Second Number:"),
            type: "number",
            name: "secondnum",
        },
        {
            message: "Select one of the operator to perform action",
            type: "list",
            name: "operator",
            choices: [
                chalk.green("Addition"),
                chalk.yellow("Subtraction"),
                chalk.gray("Multiplication"),
                chalk.red("Division"),
                chalk.blueBright("Exponential"),
                chalk.cyan("Modulus"),
                "Exit",
            ],
        },
    ]);
    if (answer.operator === "Exit") {
        break; // Exit the loop if the user chooses to exit
    }
    let result;
    if (answer.operator === chalk.green("Addition")) {
        result = answer.firsnum + answer.secondnum;
        log(`${chalk.green(`Addition:`)} ${chalk.blue(`${result}`)}`);
    }
    else if (answer.operator === chalk.yellow("Subtraction")) {
        result = answer.firsnum - answer.secondnum;
        log(`${chalk.yellow(`Subtraction:`)} ${chalk.blue(`${result}`)}`);
    }
    else if (answer.operator === chalk.gray("Multiplication")) {
        result = answer.firsnum * answer.secondnum;
        log(`${chalk.blueBright(`Multiplication:`)} ${chalk.blue(`${result}`)}`);
    }
    else if (answer.operator === chalk.red("Division")) {
        result = answer.firsnum / answer.secondnum;
        log(`${chalk.red(`Division:`)} ${chalk.blue(`${result}`)}`);
    }
    else if (answer.operator === chalk.cyan("Modulus")) {
        result = answer.firsnum % answer.secondnum;
        log(`${chalk.cyan(`Modulus:`)} ${chalk.blue(`${result}`)}`);
    }
    else if (answer.operator === chalk.blueBright("Exponential")) {
        result = Math.pow(answer.firsnum, answer.secondnum);
        log(`${chalk.blueBright(`Exponential:`)} ${chalk.blue(`${result}`)}`);
    }
    else {
        log(`${chalk.red(`Please Select Invalid Operator`)}`);
    }
    const response = await inquirer.prompt({
        message: "Do you want to continue (Y/N)?",
        type: "input",
        name: "continue",
    });
    playAgain = response.continue.toUpperCase();
} while (playAgain === "Y");
console.log(chalk.yellow("Exiting calculator. Goodbye!"));

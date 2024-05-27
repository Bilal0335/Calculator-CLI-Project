#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
const log = console.log;
const sleep = (ms = 3000) => new Promise((res) => setTimeout(res, ms));
async function welcome() {
    let rainbowTitle = chalkAnimation.rainbow(`
\t---------------------------------\n\t   Welcome to Simple Calculator   \n\t---------------------------------`);
    await sleep();
    rainbowTitle.stop();
}
await welcome();
let playAgain;
do {
    try {
        const answers = await inquirer.prompt([
            {
                message: chalk.black.bold("Enter Your First Number:"),
                type: "input",
                name: "firstnum",
                validate: (value) => !isNaN(value) || "Please enter a valid number",
                filter: (value) => parseFloat(value),
            },
            {
                message: chalk.bgRed.white.bold.italic("Select one of the operators to perform action"),
                type: "list",
                name: "operator",
                choices: [
                    { name: chalk.green("+ Addition"), value: "+" },
                    { name: chalk.yellow("- Subtraction"), value: "-" },
                    { name: chalk.gray("* Multiplication"), value: "*" },
                    { name: chalk.red("/ Division"), value: "/" },
                    { name: chalk.blue("^ Power"), value: "^" }
                ],
            },
            {
                message: chalk.black.bold("Enter Your Second Number:"),
                type: "input",
                name: "secondnum",
                validate: (value) => !isNaN(value) || "Please enter a valid number",
                filter: (value) => parseFloat(value),
            },
        ]);
        const { firstnum, operator, secondnum } = answers;
        if (isNaN(firstnum) || isNaN(secondnum)) {
            throw new Error("Invalid number input");
        }
        let result;
        switch (operator) {
            case "+":
                result = firstnum + secondnum;
                log(`${chalk.green("Addition:")} ${chalk.blue(result)}`);
                break;
            case "-":
                result = firstnum - secondnum;
                log(`${chalk.yellow("Subtraction:")} ${chalk.blue(result)}`);
                break;
            case "*":
                result = firstnum * secondnum;
                log(`${chalk.blueBright("Multiplication:")} ${chalk.blue(result)}`);
                break;
            case "/":
                if (secondnum === 0) {
                    throw new Error("Division by zero is not allowed.");
                }
                result = (firstnum / secondnum).toFixed(4);
                log(`${chalk.red("Division:")} ${chalk.blue(result)}`);
                break;
            case "^":
                result = Math.pow(firstnum, secondnum);
                log(`${chalk.red("Power:")} ${chalk.blue(result)}`);
                break;
            default:
                throw new Error("Invalid operator selected.");
        }
    }
    catch (error) {
        log(chalk.red(`Error: ${error.message}`));
    }
    const responses = await inquirer.prompt([
        {
            message: "Do you want to continue (Y/N)?",
            type: "input",
            name: "continue",
            validate: (value) => {
                const upperValue = value.toUpperCase();
                return upperValue === "Y" || upperValue === "N" || "Please enter Y or N";
            },
        },
    ]);
    playAgain = responses.continue.toUpperCase();
} while (playAgain === "Y");
log(`${chalk.yellow("Exiting calculator. Goodbye!😄")}`);

#! /usr/bin/env node
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
      message: chalk.bgRed.white.bold.italic(
        "Select one of the operator to perform action"
      ),
      type: "list",
      name: "operator",
      choices: [
        chalk.green("Addition"),
        chalk.yellow("Subtraction"),
        chalk.gray("Multiplication"),
        chalk.red("Division"),
        chalk.blueBright("Expontential"),
        chalk.cyan("Modules"),
        chalk.yellowBright("Sqrt"),
      ],
    },
    {
      message: chalk.black("Enter Your Second Number:"),
      type: "number",
      name: "secondnum",
    },
  ]);
  //Condtional Statement
  if (answer.operator === chalk.green("Addition")) {
    log(
      `${chalk.green(`Addition:`)} ${chalk.blue(
        `${answer.firsnum + answer.secondnum}`
      )}`
    );
  } else if (answer.operator === chalk.yellow("Subtraction")) {
    log(
      `${chalk.yellow(`Substraction:`)} ${chalk.blue(
        `${answer.firsnum - answer.secondnum}`
      )}`
    );
  } else if (answer.operator === chalk.gray("Multiplication")) {
    log(
      `${chalk.blueBright(`Multiplication:`)} ${chalk.blue(
        `${answer.firsnum * answer.secondnum}`
      )}`
    );
  } else if (answer.operator === chalk.red("Division")) {
    log(
      `${chalk.red(`Division:`)} ${chalk.blue(
        `${(answer.firsnum / answer.secondnum).toFixed(4)}`
      )}`
    );
  } else if (answer.operator === chalk.cyan("Modules")) {
    log(
      `${chalk.red(`Modules:`)} ${chalk.blue(
        `${answer.firsnum % answer.secondnum}`
      )}`
    );
  } else if (answer.operator === chalk.blueBright("Expontential")) {
    log(
      `${chalk.red(`Expontential:`)} ${chalk.blue(
        `${Math.pow(answer.firsnum, answer.secondnum)}`
      )}`
    );
  } else {
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

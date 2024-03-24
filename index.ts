#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { name: "firstNumber", type: "number", message: "Enter first number" },
  { name: "secondNumber", type: "number", message: "Enter second number" },
  {
    message: "Select one of the opretors to perform opretions",
    type: "list",
    name: "opretors",
    choices: ["Addition", "Subtraction", "Division", "Multipication"],
  },
]);

//conditional statement
if (answer.opretors === "Addition") {
  console.log(answer.firstNumber + answer.secondNumber);
} else if (answer.opretors === "Subtraction") {
  console.log(answer.firstNumber - answer.secondNumber);
} else if (answer.opretors === "Multipication") {
  console.log(answer.firstNumber * answer.secondNumber);
} else if (answer.opretors === "Division") {
  console.log(answer.firstNumber / answer.secondNumber);
} else {
  console.log("please select valid number");
}

const inquirer = require("inquirer");

const boxIt = require("./lib/box-it");
const cubeIt = require("./lib/cube-it");

const questions = [
  {
    type: "input",
    name: "string",
    message: "Enter a string to be tabled:",
    validate: function() {
      return true;
    }
  },
  {
    type: "list",
    name: "dimensions",
    message: "How many dimensions?",
    choices: ["2D", "3D"]
  }
];

inquirer.prompt(questions).then(answers => {
  // Handle strings with length of 1
  if (answers.string.length === 1) {
    console.log(`You want one character in ${answers.dimensions}? Alright.`);
    const arr = answers.string.split("")
    console.log(arr[0]);
    return;
  }

  // Handle 2D and 3D 
  let rows = [];

  switch (answers.dimensions) {
    case "2D":
      rows = boxIt(answers.string);
      break;
    case "3D":
      rows = cubeIt(answers.string);
      break;
    default:
      console.log("How did you even get here?");
  }

  rows.forEach(row => {
    console.log(row);
  });
});

const inquirer = require("inquirer");

const { boxIt } = require("./lib/box-it");
const { cubeIt } = require("./lib/cube-it");

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

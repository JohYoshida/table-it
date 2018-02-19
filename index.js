const inquirer = require("inquirer");

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
  console.log('Answers', answers);
});

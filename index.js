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
  },
  {
    type: "list",
    name: "formatting",
    message: "Special formatting?",
    choices: [
      {
        name: "None",
        value: "none"
      },
      {
        name: "(Slack) Wrap tabled string with three ticks ```",
        value: "three ticks"
      },
      {
        name: "(Reddit) Start each line with four spaces",
        value: "four spaces"
      }
    ]
  }
];

inquirer.prompt(questions).then(answers => {
  // Handle strings with length of 1
  if (answers.string.length === 1) {
    console.log(`You want one character in ${answers.dimensions}? Alright.`);
    const arr = answers.string.split("");
    console.log(arr[0]);
    return;
  }

  // Initialize array of rows to print
  let rows = [];

  // Handle 2D and 3D
  switch (answers.dimensions) {
    case "2D":
      rows = boxIt(answers.string);
      break;
    case "3D":
      rows = cubeIt(answers.string);
      break;
    default:
      console.error("Error: Default case in answers.string");
  }

  // Handle special formatting
  switch (answers.formatting) {
    case "none":
      break;
    case "three ticks":
      rows.unshift("```");
      rows.push("```");
      break;
    case "four spaces":
      const formattedRows = [];
      rows.forEach(row => {
        let arr = row.split("");
        arr.unshift("    ");
        arr = arr.join("");
        formattedRows.push(arr);
        rows = formattedRows;
      });
      break;
    default:
      console.error("Error: Default case in answers.formatting");
  }

  // Print rows
  rows.forEach(row => {
    console.log(row);
  });
});

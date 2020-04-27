const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");

inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "What is your project title",
    },
    {
      type: "input",
      name: "description",
      message: "Please write a brief description of your project",
    },
    {
      type: "input",
      name: "installation",
      message: "What command should be run to install the project",
      default: "npm install",
    },
    {
      type: "input",
      name: "usage",
      message: "What does the user need to know about using the project",
    },
    {
      type: "list",
      name: "license",
      choices: ["LGPLv3", "MPL 1.1", "Affero GPLv3", "Apache 2.0"],
    },
    {
      type: "input",
      name: "contributing",
      message: "Please enter the name of the contributor",
    },
    {
      type: "input",
      name: "test",
      default: "npm test",
    },
    {
      type: "input",
      name: "email",
      message: "What is your GitHub email",
    },
    {
      type: "input",
      name: "user",
      message: "Please enter your GitHub username",
    },
  ])
  .then (function (data) {
      fs.writeFile("goodreadme", generateMdfile (data), (err) => {
          if (err) return console.log(err);
          console.log ("File created Successfully");
      });
  })
  
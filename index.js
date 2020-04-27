const fs = require("fs");
const inquirer = require("inquirer");
const util = require ("util");


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
  .then(function (data) {
    fs.writeFile("goodreadme.md", generateMdFile(data), function (err) {
      if (err) return console.log(err);
      console.log("Success");
    });
  })
  .catch(function (err) {
    console.log(err);
  });

function generateMdFile(data) {
  return `
             
# Project Title

## ${data.title}
   ____
## Description 
    
  ${data.description}

x## Table of Contents

  1. Project Title
  2. Description
  3. Installation
  4. Usage
  5. License
  6. Contributor
  7. Test
  8. Email
  9. GitHub Username

## Installation 
  
  ${data.installation}

## Usage
  
  ${data.usage}

  ## License
    
  ${data.license}

## Contributor

  ${data.contributing}

## Tests
  
  ${data.test}

## Email

  ${data.email}

## GitHub Username

  ${data.user}

                `;
}




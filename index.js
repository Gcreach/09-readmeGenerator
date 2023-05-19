// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [
        {
            name: 'title',
            message: 'filename?',
            type: 'input',
        },
        {
            name: 'description',
            message: 'What is the description?',
            type: 'input',
        },
        {
            name: 'installation',
            message: 'How will this be installed?',
            type: 'input',
        },
        {
            name: 'usage',
            message: 'How can you use this app?',
            type: 'input',
        },
        {
            name: 'credits',
            message: 'Who is credited for the work?',
            type: 'input',
        },
        {
            name: 'license',
            message: 'What is the license?',
            choices: ['MIT', 'ISC', 'IBM'],
            type: 'list',
        }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    

    fs.writeFile(fileName, generateMarkdown(data), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        writeToFile("README.md", answers);
    })

}

// Function call to initialize app
init();

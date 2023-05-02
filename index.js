// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');



// TODO: Create an array of questions for user input

const questions = [
    {
        type: 'confirm',
        name: 'isBored',
        message: 'Are you bored?',
    },
    {
        type: 'confirm',
        name: 'isHot',
        message: 'Are you hot?',
    },
    {
        type: 'confirm',
        name: 'isThereYet',
        message: 'Are we there yet?',
    },


]

// TODO: Create a function to write README file
function writeToFile(fileName, data) { 
fs.writeFile(fileName, JSON.stringify(data, null, '\t'), (err) => err ? console.error(err) : console.log('Answers saved to ' + filename)
);
}
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        writeToFile('answers.json', answers);
    });
 }

// Function call to initialize app
init();

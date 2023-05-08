const inquirer = require('inquirer');
const fs = require('fs');
const { schablone, licenses, generateLicenseIcons } = require('./utils/markdown');
const licenseChoices = Object.keys(licenses).map(key => ({
    name: licenses[key],
    value: key
}));

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Write the description of your project:',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Explain (if any) installation instructions:',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Include usage information:',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'List collaborators (if any), third-party assets (if any), and/or tutorials followed (if any):',
        name: 'credits',
    },
    {
        type: 'list',
        message: 'Select a license:',
        name: 'license',
        // All the license choices I found that were available on GitHub
        choices: licenseChoices
    },
    {
        type: 'input',
        message: 'Enter test instructions:',
        name: 'test',
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
];

// Function to generate the README content based on user's answers



// Function to initialize the application
function init() {
    inquirer.prompt(questions).then((answers) => {
        const data = schablone(answers);
        // console.log('Data:', data);      
        writeToFile('README.md', data);
    });
}
// Function to write the README file
function writeToFile(fileName, data) {
    // console.log('Writing to file:', fileName);
    // console.log('Data:', data);
    fs.writeFileSync(fileName, data);
}

// Call the init function to start the application
init();


// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const licenses = require('./markdown')
//const generateLicenseIcons = require('./utils/markdown');
// const { generateLicenseIcons } = require('./markdown');


const licenseChoices =Object.keys(licenses).map(key => ({
    name:licenses[key],
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
function generateLicenseIcons(licensesObjectChoice) {
    if (licensesObjectChoice !== 'none') {
      const chosenLicenseInput = licenses[licensesObjectChoice];
      return `![${chosenLicenseInput}](https://img.shields.io/badge/License-${chosenLicenseInput}-blue.svg)`;
    }
    return '';
  }


// Function to generate the README content based on user's answers
function schablone(answers) {
    // Call generateLicenseIcons to get the license badge
   const licenseBadge = generateLicenseIcons(answers.license);
    
    // Include the license badge in the License section
    return `# ${answers.title}
  
    ## Description
    ${answers.description}
    
    ## Table of Contents
    
    - [Installation](#installation)
    - [Usage](#usage)
    - [Credits](#credits)
    - [License](#license)
    - [Tests](#tests)
    - [Questions](#questions)
    
    ## Installation
    ${answers.installation}
    
    ## Usage
    ${answers.usage}
    
    ## Credits
    ${answers.credits}
    
    ## License
    ${answers.license}
    ${licenseBadge} 
    
    ## Tests
    ${answers.test}
    
    ## Questions
    For any additional questions, contact me at:
     - [Github](https://github.com/${answers.username})
     - [Email](${answers.email})
    
  `;
  }
  

// Function to write the README file
function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, data);
}

// Function to initialize the application
function init() {
    inquirer.prompt(questions).then((answers) => {
        const data = schablone(answers);
       // const licenseBadge = generateLicenseIcons(answers.license);
      writeToFile('README.md', data);
  });
}

// Call the init function to start the application
init();

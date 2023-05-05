// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const license = require("./utils/generateMarkdown")

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
        choices: [
            'None',
            'Apache License 2.0',
            'GNU General Public License v3.0',
            'MIT License',
            'BSD 2-Clause "Simplified" License',
            'BSD 3-Clause "New" or "Revised" License',
            'Boost Software License 1.0',
            'Creative Commons Zero v1.0 Universal',
            'Eclipse Public License 1.0',
            'GNU Affero General Public License v3.0',
            'GNU General Public License v2.0',
            'GNU Lesser General Public License v3.0',
            'Mozilla Public License 2.0',
            'The Unlicense',
        ],
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
function generateReadmeContent(answers) {
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
    const data = generateReadmeContent(answers);
    writeToFile('README.md', data);
  });
}

// Call the init function to start the application
init();

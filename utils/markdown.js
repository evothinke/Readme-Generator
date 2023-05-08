const licenses = {
  'MIT': 'MIT',
  'BSD2': 'BSD 2-Clause "Simplified" License',
  'BSD3': 'BSD 3-Clause "New" or "Revised" License',
  'BOOST': 'Boost Software License 1.0',
  'CC0': 'Creative Commons Zero v1.0 Universal',
  'EPL': 'Eclipse Public License 1.0',
  'AGPLv3': 'GNU Affero General Public License v3.0',
  'GPLv2': 'GNU General Public License v2.0',
  'LGPLv3': 'GNU Lesser General Public License v3.0',
  'MPL': 'Mozilla Public License 2.0',
  'UNLICENSE': 'The Unlicense'
};

function schablone(answers) {
  // Call generateLicenseIcons to get the license badge
  const licenseBadge = generateLicenseIcons(answers.license);

  // Include the license badge in the License section
  return `

  # ${answers.title}  ${licenseBadge}

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
 ${licenseBadge}

   ## Tests
  ${answers.test}
  
  ## Questions
  For any additional questions, contact me at:
   - [Github](https://github.com/${answers.username})
   - [Email](mailto:${answers.email})
  
`;
}


function generateLicenseIcons(licensesObjectChoice) {
  if (licensesObjectChoice !== 'none') {
      // const chosenLicenseInput = licenses[licensesObjectChoice];
      // const licenseIconGenerated = "`![](https://img.shields.io/badge/License-${licensesObjectChoice}-blue.svg)`"
      const generatedIconGenerated = '<img src="https://img.shields.io/badge/License-' + licensesObjectChoice + '-blue.svg"/>'
      return generatedIconGenerated;
  }
  return '';
}

module.exports = { schablone, licenses, generateLicenseIcons };

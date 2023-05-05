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

function generateLicenseIcons(licensesObjectChoice) {
  if (licensesObjectChoice !== 'none') {
    const chosenLicenseInput = licenses[licensesObjectChoice];
    return `![${chosenLicenseInput}](https://img.shields.io/badge/License-${chosenLicenseInput}-blue.svg)`;
  }
  return '';
}

module.exports = { generateLicenseIcons };
 module.exports = licenses;

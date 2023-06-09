// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`;
  }
  
  else if (license == 'ISC'){
    return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]';
  }

  else if (license == 'IBM') {
    return '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)]';
  }

  else {
    return;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == 'MIT') {
    return '(https://opensource.org/licenses/MIT)';
  }

  else if (license == 'ISC') {
    return '(https://opensource.org/licenses/ISC)';
  }

  else if (license == 'IBM') {
    return '(https://opensource.org/licenses/IPL-1.0)';
  }
  else {
    return;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `## license 
    
 `;
  }

  else {
    return;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
return `# ${data.title}

# Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

${renderLicenseSection(data.license)} ${renderLicenseBadge(data.license)}${renderLicenseLink(data.license)}
This application is licensed by ${data.license}


## Description

${data.description}

## Installation

${data.installation}

## Usage

${data.usage}

## Credits

${data.credits}

## Tests 

${data.tests}

## Questions 

If you have any questions, reach out to me using the following:

Email: ${data.email}
GitHub: ${data.github}
`;
}

module.exports = generateMarkdown;

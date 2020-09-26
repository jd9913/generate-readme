const inquirer = require('inquirer');
//const readmeFile = require('./src/readme-template');

console.log(inquirer);



// array of questions for user
const questions = () => {

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your project? (Required)',
            validate: projectInput => {
                if (projectInput) {
                    return true;
                } else {
                    console.log('Please enter the name of your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username (Required)',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log("Please enter your GitHub username!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter a contact email address (Required)",
            validate: contEmail => {
                if (contEmail) {
                    return true;
                } else {
                    console.log("Please enter a contact email address!")
                }
            }
        },
        {
            type: 'input',
            name: 'repoLink',
            message: "Please add a link to the repository (Required)",
            validate: repLink => {
                if (repLink) {
                    return true;
                } else {
                    console.log("Please enter a contact email address!")
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: "Please enter the description for your project (Required)",
            validate: fileDesc => {
                if (fileDesc) {
                    return true;
                } else {
                    console.log("Please enter a project description!")
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: "Please enter installation instructions for your project (Required)",
            validate: fileInstall => {
                if (fileInstall) {
                    return true;
                } else {
                    console.log("Please enter installation instructions for your project!")
                }
            }
        },
        {
            type: 'input',
            name: 'information',
            message: "Please enter usage information for your project (Required)",
            validate: usageInfo => {
                if (usageInfo) {
                    return true;
                } else {
                    console.log("Please enter usage information for your project!")
                }
            }
        },
        {
            type: 'input',
            name: 'contributing',
            message: "Please enter contribution guidelines for your project (Required)",
            validate: contguide => {
                if (contguide) {
                    return true;
                } else {
                    console.log("Please enter contribution guidelines for your project!")
                }
            }
        },
        {
            type: 'input',
            name: 'tests',
            message: "Please enter test instructions for your project (Required)",
            validate: fileDesc => {
                if (fileDesc) {
                    return true;
                } else {
                    console.log("Please enter test instructions for your project!")
                }
            }
        },
   
        {
            type: 'checkbox',
            name: 'licenses',
            choices: ['MIT License', 'GNU GPLv3', 'ApacheLicense 2.0']
        },


    ]);

};

questions().then(answers => console.log(answers))
    .then(questions => {
        promptReadme.projectInfo.push(readmeData);
        if (promptReadme.confirmAddReadme) {
            return questions(readmeData);
        } else {
            return readmeData;
        }
    });


const promptReadme = readmeData => {

    //only intialize the variable if it is empty on the first pass
    if (!readmeData.projectInfo) {
        readmeData.projectInfo = [];
    }
}

const licenseBadge = (licenses) => {
    const badges = [];

    if (licenses[0]) {
        badges.push('[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)');
    };

    if (licenses[1]) {
        badges.push('[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)');
    };

    if (licenses[2]) {
        badges.push('[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)');
    };
    return badges;
};


//const readmePage = generateReadme();

// function to write README file

//fs.writeFile('./index.html', readmePage, err => {
  //  if (err) throw err;

//console.log('Readme file complete.  Check out readme.md file to see the output!'); 

//});

// function to initialize program
//function init() {

//}

// function call to initialize program
//init();

const inquirer = require('inquirer');
const generateReadme = require('./src/readme-template.js');


const userQuestions = () => {

    return inquirer
        .prompt([
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
                        return false;
                    }
                }
            },

        ])
};


const readmeQuestions = allReadme => {
    console.log(`
-------------------------
Add Readme.md Information
-------------------------
`);

    if (!readmeData.readme) {
        readmeData.readme = [];
    }

    return inquirer
        .prompt([
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
                name: 'repoLink',
                message: "Please add a link to the repository (Required)",
                validate: repoLink => {
                    if (repoLink) {
                        return true;
                    } else {
                        console.log("Please enter a link to the repository!")
                        return false;
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
                        return false;
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
                        return false;
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
                        return false;
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
                        return false;
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
                        return false;
                    }
                }
            },

            {
                type: 'checkbox',
                name: 'licenses',
                choices: ['MIT License', 'GNU GPLv3', 'ApacheLicense 2.0']
            },
            {
                type: 'confirm',
                name: 'confirmAddNext',
                message: 'Would you like to add another Readme file?',
                default: false
            }
        ])
        .then(readmeData => {
            allReadme.readme.push(readmeData);
            if (readmeData.confirmAddNext) {
                return readmeQuestions(readmeData)
            } else {
                return readmeData;
            }
        });

};

userQuestions()

    .then(readmeQuestions)
    .then(allReadme => {
        return generateReadme(allReadme);
    })
    .then(readmeFile => {
        return writeFile(readmeFile);
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse);
        return copyFile();
    })
    .then(copyFileResponse => {
        console.log(copyFileResponse);
    })
    .catch(err => {
        console.log(err);
    })



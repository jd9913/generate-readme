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
            type: 'checkbox',
            name: 'licenses',
            choices: ['license1', 'license2', 'license3']
        },


    ]);

};

questions().then(answers => console.log(answers));


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

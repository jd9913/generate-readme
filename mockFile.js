const inquirer = require('inquirer');
const generateReadme = require('./src/readme-template.js');
//const writeFile = require('./utils/generate-file');

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

                },
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


const readmeQuestions = readmeData => {
    console.log(`
-------------------------
Add Readme.md Information
-------------------------
`);

    

    return readme = [
        {
            name: 'Generate Readme',
            description: 'The sign said there was road work ahead so he decided to speed up.',
            repoLink: 'https://github.com',
            installation: "Improve your goldfish's physical fitness by getting him a bicycle.",
            information: 'The sunblock was handed to the girl before practice, but the burned skin was proof she did not apply it.',
            contributing: 'He quietly entered the museum as the super bowl started.',
            tests: 'He had decided to accept his fate of accepting his fate.',
            licenses: 'MIT License',
            confirmAddNext: true

        },

        {
            name: 'App in Testing',
            description: 'The hummingbird\'s wings blurred while it eagerly sipped the sugar water from the feeder.',
            repoLink: 'https://github.com',
            installation: "8% of 25 is the same as 25% of 8 and one of them is much easier to do in your head.",
            information: 'The complicated school homework left the parents trying to help their kids quite confused.',
            contributing: 'The crowd yells and screams for more memes.',
            tests: 'They did nothing as the raccoon attacked the lady’s bag of food.',
            licenses: 'GNU GPLv3',
            confirmAddNext: true
        },
        {
            name: 'Needle In a Haystack',
            description: 'The hummingbird\'s wings blurred while it eagerly sipped the sugar water from the feeder.',
            repoLink: 'https://github.com',
            installation: "Random words in front of other random words create a random sentence.",
            information: 'I am counting my calories, yet I really want dessert.',
            contributing: 'Please tell me you don\'t work in a morgue.',
            tests: 'He set out for a short walk, but now all he could see were mangroves and water were for miles.',
            licenses: 'ApacheLicense 2.0',
            confirmAddNext: false
        }

    ]

    const mockFile = allReadme => {
    readmeData.readme.push(allReadme);
    console.log(allReadme);

    /*if (readmeData.confirmAddNext) {
        return readmeQuestions(readmeData)
    } else {
        return allReadme;
    }*/

};

   

};

readmeQuestions()





userQuestions()
        
    .then(readmeQuestions)
    .then(allReadme => {
        return generateReadme(allReadme);
    })
    /*.then(readmeFile => {
        return writeFile(readmeFile);
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse);
    })
    .catch(err => {
        console.log(err);
    })*/


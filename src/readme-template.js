//create the description section


const generateReadme = readmeProfile => {

    const { github, email, readme } = readmeProfile;

    let temp = {};

    temp = readme.map(({ name, repoLink, description, installation, information, contributing, tests, licenses }) => {

        let badges = {};

        badges = licenses.filter(license => {


            if (license = 'MIT_License') {
                return ('[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)');
                

            };

            if (license = 'GNU_GPLv3') {
               return ('[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)');
                
            };

            if (license = 'ApacheLicense_2.0') {
                return badges.push('[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)');
                
            };

          });
        console.log(github, email, name, repoLink, description, installation, information, contributing, tests, licenses);
        

        return `

${badges}

:house: ${name} <br>
==

Description
--
>${description}<br>
<br>

### Table of Contents
<a name ="install">Installation Instructions</a><br>
<a name ="usage">Usage Information</a><br>
<a name ="contribute">Contribution Guidelines</a><br>
<a name ="test">Testing Instructions</a><br>
<a name ="quest">Questions</a><br>

:memo: [Installation Instructions](#install)
========
>${installation}

:computer: [Usage Information](#usage)
===
>${information}

:incoming_envelope: [Contribution Guidelines](#contribute)
==
>${contributing}

:notebook: [Testing instructions](#test)
==
>${tests}

:question: [Questions](#quest)
==
>:email:Email: ${email}<br>
>GitHub Username: ${github}<br>
>:link: Repository Link: ${repoLink}<br>

[Licenses](#license)
==
>This application is covered under the following license(s): <br>
>>${licenses}<br>
>>click [here](https://choosealicense.com/licenses/) to read about these licenses.

Footer
--

Made with love :gift_heart: by ${github}.<br>\
:copyright: ${new Date().getFullYear()}

        `;

    });


}



module.exports = generateReadme;

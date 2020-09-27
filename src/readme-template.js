//create the description section

const generateReadme = readmeProfile => {

    
    const licenseBadge = readmeProfile.filter(({ licenses }) => {
        
        const badges = [];

        if (licenses ='MIT License') {
            badges.push('[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)');
            return ${ badges.join('') };
        };

        if (licenses = 'GNU GPLv3') {
            badges.push('[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)');
            return ${ badges.join('') };
        };

        if (licenses = 'ApacheLicense 2.0') {
            return badges.push('[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)');
            return ${ badges.join('') };
        };
        
    });
}

module.exports = makeReadme => {

    const { description, information, installation, contributing, tests, licenses, ...user } = makeReadme;

    return `

${licenseBadge(badges)}

:house: ${user.name} <br>
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
>:email:Email: ${user.email}<br>
>GitHub Username: ${user.github}<br>
>:link: Repository Link: ${user.repoLink}<br>

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

}



module.exports = generateReadme;
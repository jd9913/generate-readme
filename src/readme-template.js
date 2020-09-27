//create the description section

const generateReadme = readmeProfile => {
    console.log(readmeProfile);

    const { github, email, readme } = readmeProfile;

    console.log(github);

    let temp = {};





    //module.exports = (github, email, name, repoLink, description, installation, information, contributing, tests, licenses);


    return `

[Licenses](https://img.shields.io/badge/License-${readmeProfile.licenses}-blue.svg)

:house: ${readmeProfile.name} <br>
==

Description
--
>${readmeProfile.description}<br>
<br>

### Table of Contents
<a name ="install">Installation Instructions</a><br>
<a name ="usage">Usage Information</a><br>
<a name ="contribute">Contribution Guidelines</a><br>
<a name ="test">Testing Instructions</a><br>
<a name ="quest">Questions</a><br>

:memo: [Installation Instructions](#install)
========
>${readmeProfile.installation}

:computer: [Usage Information](#usage)
===
>${readmeProfile.information}

:incoming_envelope: [Contribution Guidelines](#contribute)
==
>${readmeProfile.contributing}

:notebook: [Testing instructions](#test)
==
>${readmeProfile.tests}

:question: [Questions](#quest)
==
>:email:Email: ${readmeProfile.email}<br>
>GitHub Username: ${readmeProfile.github}<br>
>:link: Repository Link: ${readmeProfile.repoLink}<br>

[Licenses](#license)
==
>This application is covered under the following license(s): <br>
>>${readmeProfile.licenses}<br>
>>click [here](https://choosealicense.com/licenses/) to read about these licenses.

Footer
--

Made with love :gift_heart: by ${readmeProfile.github}.<br>\
:copyright: ${new Date().getFullYear()}

        `;

};




module.exports = generateReadme;

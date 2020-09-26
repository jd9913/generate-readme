//create the description section

const generateReadme = (readmeData) => {

    licenseBadge();

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

Made with love :gift_heart: by ${github}.



`
}


module.exports = generateReadme;
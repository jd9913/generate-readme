//create the description section
const generateReadme = (readmeData) => {

    licenseBadge();

    return `


${badges}


:house:
#${name}//name of the project

>${description}


### Table of Contents
[Installation instructions](link)<br>
[Usage Information](link)<br>
[Contribution Guidelines](link)<br>
[Testing instructions](link)<br>
[Questions}(link)<br>


:memo:  
##Installation Instructions
>${installation}


:computer:
##Usage Information
>${information}


:incoming_envelope:
##Contribution Guidelines
>${contributing}

:notebook:
##Testing instructions
>${tests}


:question:
##Questions
>:email:Email: ${email}<br>
>GitHub Username: ${github}<br>
>Repository Link: ${repoLink}<br>


##Licenses
>This application is covered under the following license(s): <br>
>>${licenses}
>>click [here](https://choosealicense.com/licenses/) to read about these licenses.

####Footer

Made with love :gift_heart: by ${github}. 



`
}


module.exports = readmePage;
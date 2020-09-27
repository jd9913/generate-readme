const fs = require('fs');

//write file

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/readme.md', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'Readme File Created!'
            });
        });
    });
};


module.exports = writeFile;
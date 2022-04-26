const fs = require('fs')
//const readStream = fs.createReadStream(path.join(__filename,'dummyTxtFile.txt'))

const readline = require('readline').createInterface({
    input:process.stdin,
    output: process.stdout
});

readline.question('File Name you are searching for? :  ', userInput => {
    readline.close();
    fs.readFile(userInput, function (error, buffer) {
        if (error) {
            console.log('you messed up, try again');
            return;
        } 
        let entry = buffer.toString();
        let bigTxt = entry.toUpperCase();
        console.log(bigTxt);
    });

});
const repeatString = function (string, num) {
    let retString = '';
    if (num < 0) {
        return 'ERROR';
    } else {
        for (let i = 0; i < num; i++) {
            retString += string;
        }
        return retString;
    }
};

// Do not edit below this line
module.exports = repeatString;

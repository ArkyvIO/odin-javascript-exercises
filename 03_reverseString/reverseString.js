const reverseString = function(userInput) {
    let array = userInput.split('');
    let revArray = array.reverse();
    let endString = revArray.join('');
    return endString;
};

// Do not edit below this line
module.exports = reverseString;

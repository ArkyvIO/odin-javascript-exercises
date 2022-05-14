const removeFromArray = function(userArr, ...args) {
    return userArr.filter(i => !args.includes(i));
};

// Do not edit below this line
module.exports = removeFromArray;

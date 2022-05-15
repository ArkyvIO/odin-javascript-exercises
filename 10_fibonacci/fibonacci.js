const fibonacci = function (x) {
    let fibNum;
    let num1 = 1;
    let num2 = 1;
    let i;
    if (x < 0) {
        return 'OOPS'
    }
    if (x === 1 || x === 2) {
        return num1;
    } else {
        for (i = 2; i < x; i++) {
            if (i % 2 === 0) {
                num1 += num2;
            } else {
                num2 += num1;
            }
        }
        if (i % 2 === 0) {
            return num2;
        } else {
            return num1;
        }
    }
};

// 1,1,2,3,5,8

// Do not edit below this line
module.exports = fibonacci;

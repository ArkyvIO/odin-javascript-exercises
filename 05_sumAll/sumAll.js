const sumAll = function (start, end) {
    let sum = 0;
    let x;

    // Swap if larger number first
    if (start > end) {
        x = start;
        start = end;
        end = x;
    }

    if (typeof start === 'number' && typeof end === 'number' && start >= 0 && end >= 0) {
        if (start < end) {
            for (i = start; i <= end; i++)
                sum += i;
        };
    } else {
        return 'ERROR';
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;

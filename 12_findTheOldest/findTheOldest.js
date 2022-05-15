const findTheOldest = function (x) {
    x.sort((a, b) => {
        let currentYear = new Date().getFullYear();
        let xa;
        let xb;
        
        if ('yearOfDeath' in a) {
            xa = (a.yearOfDeath - a.yearOfBirth);
        } else {
            xa = (currentYear - a.yearOfBirth);
        }
  
        if ('yearOfDeath' in b) {
            xb = (b.yearOfDeath - b.yearOfBirth);
        } else {
            xb = (currentYear - b.yearOfBirth);
        }

        return xb - xa;
    })
    return x[0];
};

// Do not edit below this line
module.exports = findTheOldest;

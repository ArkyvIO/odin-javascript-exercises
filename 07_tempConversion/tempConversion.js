const ftoc = function (f) {
  let converted = (f - 32) * (5 / 9)
  return Math.round(converted * 10) / 10;
};

const ctof = function (c) {
  let converted = (c * (9 / 5)) + 32
  return Math.round(converted * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};

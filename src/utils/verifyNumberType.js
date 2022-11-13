const verifyNumberType = (input) => {
  return Number.isNaN(Number(input)) ? false : true;
};

module.exports = verifyNumberType;

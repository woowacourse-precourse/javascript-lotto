const MONEY_UNIT = 1000;

const returnCount = (userInput) => {
  return parseInt(userInput) / MONEY_UNIT;
};

module.exports = returnCount;

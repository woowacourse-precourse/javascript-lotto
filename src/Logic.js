const splitWinningNumbers = (numbers) => {
  return numbers.split(",").map((num) => parseInt(num));
};

const divideBudget = (budget) => {
  return Math.floor(budget / 1000);
};

exports.splitWinningNumbers = splitWinningNumbers;
exports.divideBudget = divideBudget;

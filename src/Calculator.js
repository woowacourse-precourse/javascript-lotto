const Calculator = {
  howManyWinningNums: function (winningNums, myNums) {
    let correct = 0;
    for (let i = 0; i < winningNums.length; i++) {
      if (myNums.indexOf(winningNums[i]) !== -1) {
        correct += 1;
      }
    }
    return correct;
  },

  bonusNum: function (bonusNum, myNums) {
    return myNums.indexOf(bonusNum) !== -1 ? 1 : 0;
  },

  getTotalPrize(stateObject) {
    let totalPrize =
      stateObject.matching_3 * 5000 +
      stateObject.matching_4 * 50000 +
      stateObject.matching_5 * 1500000 +
      stateObject.matching_5_bonus * 30000000 +
      stateObject.matching_6 * 2000000000;

    return totalPrize;
  },

  getWinningRate(totalPrize, howManyLottos) {
    return ((totalPrize / (howManyLottos * 1000)) * 100).toFixed(1);
  },
};

module.exports = Calculator;

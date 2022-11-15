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
};

module.exports = Calculator;

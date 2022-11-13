const Judge = require('./Judge');

class Referee {
  static compare(lotto, winnings, bonus) {
    const correctCnt = Judge.countCorrect(lotto, winnings);
    if (correctCnt === 6) return 1;
    if (correctCnt === 5) return Judge.checkBonus(lotto, bonus) ? 2 : 3;
    if (correctCnt === 4) return 4;
    if (correctCnt === 3) return 5;
    return -1;
  }
}

module.exports = Referee;

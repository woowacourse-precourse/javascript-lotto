function getPrizeByResultCnt(numbersCnt, isBonusNmberMatched) {
  switch (numbersCnt) {
    case 3:
      return 5000;
    case 4:
      return 50000;
    case 5:
      return isBonusNmberMatched ? 30000000 : 1500000;
    case 6:
      return 2000000000;
    default:
      return 0;
  }
}

module.exports = { getPrizeByResultCnt };

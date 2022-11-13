function getRankByResultCnt(numbersCnt, isBonusNmberMatched) {
  switch (numbersCnt) {
    case 3:
      return { prize: 5000, type: 0 };
    case 4:
      return { prize: 50000, type: 1 };
    case 5:
      return isBonusNmberMatched
        ? { prize: 30000000, type: 2 }
        : { prize: 1500000, type: 3 };
    case 6:
      return { prize: 2000000000, type: 4 };
    default:
      return { prize: 0, type: null };
  }
}

function getRate(pay, result) {
  return ((result / pay) * 100).toFixed(1);
}

module.exports = { getRankByResultCnt, getRate };

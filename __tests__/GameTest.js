const Game = require("../src/Game");
const { PAY_UNIT, LOTTO_NUMBER, PRIZE_UNITS, ROUND_OFF, MESSAGES } = require('../src/Constants');

describe("게임 클래스 테스트", () => {
  test("예상 번호와 당첨 번호를 비교한다.", () => {
    const matchCountTotal = compareGuessAndWinning([[1, 2, 3, 4, 5, 6]], [1, 2, 3, 4, 5, 6], 1);
    expect(matchCountTotal).toEqual([6]);
  });

  test("예상 번호와 보너스 번호를 비교한다.", () => {
    const BonusCountTotal = compareGuessandBounus([[1, 2, 3, 4, 5, 6]], [5], 6, 1);
    expect(BonusCountTotal).toEqual([true]);
  });

  test("수익률을 계산한다.", () => {
    const earning = getEarningRate(getWinStats([3], [null], 8), 8);
    expect(Number(earning)).toEqual(62.5);
  });
});

function compareGuessAndWinning(guessNumbersTotal, winningNumArray, numOfTickets) {
  let matchCountTotal = [];
  matchCountTotal = guessNumbersTotal.map((guessNumbers) => {
    const matchCount = guessNumbers.filter((guessNumber) =>
      winningNumArray.includes(guessNumber)
    ).length;
    return matchCount;
  });
  return matchCountTotal;
}

function compareGuessandBounus(guessNumbersTotal, matchCountTotal, bonusNumber, numOfTickets) {
  const bonusMatchTotal = matchCountTotal.map((matchCount, index) => {
    if (matchCount !== 5) {
      return null;
    }
    return guessNumbersTotal[index].includes(bonusNumber);
  });
  return bonusMatchTotal;
}

  function getWinStats(matchCountTotal, bonusMatchTotal, numOfTickets) {
    const winStats = new Map();
    winStats.set(MESSAGES.THREE_MATCHED, matchCountTotal.filter((matchCount) => matchCount === 3).length);
    winStats.set(MESSAGES.FOUR_MATCHED, matchCountTotal.filter((matchCount) => matchCount === 4).length);
    winStats.set(MESSAGES.FIVE_MATCHED, bonusMatchTotal.filter((bonusMatch) => bonusMatch === false).length);
    winStats.set(MESSAGES.FIVE_PLUS_BONUS_MATCHED, bonusMatchTotal.filter((bonusMatch) => bonusMatch === true).length);
    winStats.set(MESSAGES.SIX_MATCHED, matchCountTotal.filter((matchCount) => matchCount === 6).length);
    return winStats;  
}

function roundOffToNearestTenth(number) {
    const roundedResult = Number(`${Math.round(Number(`${number}e${ROUND_OFF.DECIMAL_PLACES}`))}e-${ROUND_OFF.DECIMAL_PLACES}`).toFixed(ROUND_OFF.DECIMAL_PLACES);
    return roundedResult;
}

function getEarningRate(winStats, numOfTickets) {
    const earnings =
      winStats.get(MESSAGES.THREE_MATCHED) * PRIZE_UNITS.FIVE_THOUSAND +
      winStats.get(MESSAGES.FOUR_MATCHED) * PRIZE_UNITS.FIFTY_THOUSAND +
      winStats.get(MESSAGES.FIVE_MATCHED) * PRIZE_UNITS.ONE_POINT_FIVE_MILLION +
      winStats.get(MESSAGES.FIVE_PLUS_BONUS_MATCHED) * PRIZE_UNITS.THIRTY_MILLION +
      winStats.get(MESSAGES.SIX_MATCHED) * PRIZE_UNITS.TWO_BILLION;
    const earningRate = roundOffToNearestTenth((earnings / (numOfTickets * 1000)) * 100);
    return earningRate;  
}

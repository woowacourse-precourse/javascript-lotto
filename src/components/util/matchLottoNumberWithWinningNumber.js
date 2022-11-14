const {
  LottoNumberData,
  LottoRanking,
} = require('../lotto-data/LottoNumberData');
const { RANK, PLUS_ONE } = require('../lotto-data/Constant');

function matchLottoNumberWithWinningNumber() {
  LottoNumberData.Issued.forEach((issued) => {
    checkNumberOfWins(matchNumbers(issued), issued);
  });
}

function matchNumbers(Issued) {
  return LottoNumberData.Winning.reduce((acc, winningNumber) => {
    Issued.includes(+winningNumber) && acc.push(+winningNumber);
    return acc;
  }, []);
}

function checkNumberOfWins(array, issued) {
  switch (array.length) {
    case RANK.first:
      LottoRanking.first += PLUS_ONE;
      break;
    case RANK.secondOrThird:
      determineWhetherIsSecondOrThird(issued);
      break;
    case RANK.fourth:
      LottoRanking.fourth += PLUS_ONE;
      break;
    case RANK.fifth:
      LottoRanking.fifth += PLUS_ONE;
      break;
  }
}

function determineWhetherIsSecondOrThird(issued) {
  issued.includes(+LottoNumberData.Bonus)
    ? (LottoRanking.second += PLUS_ONE)
    : (LottoRanking.third += PLUS_ONE);
}

module.exports = matchLottoNumberWithWinningNumber;

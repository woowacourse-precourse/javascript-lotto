const ConsoleWork = require('./ConsoleWork');
const Message = require('./Message');

class LottoMain {
  static takeBonus(lottoList, prize) {
    ConsoleWork.takeInput(Message.BONUSNUMBER_MESSAGE + '\n', function (bonus) {
      printResult(lottoList, prize, bonus);
    });
  }
}

function printResult(lottoList, prize, bonus) {
  ConsoleWork.print('당첨 통계\n---\n');
}

function lottoLoop(lottoList, prize, bonus) {
  for (let i = 0; i < lottoList.length; i++) {
    const countArray = countCorrectNumber(lottoList[i], prize, bonus);
    const prizeCount = countArray[0];
    const bonusCount = countArray[1];
  }
}

function countCorrectNumber(lotto, prize, bonus) {
  const prizeCount = 0;
  const bonusCount = 0;
  if (lotto.includes(prize)) {
    prizeCount++;
  }
  if (lotto.includes(bonus)) {
    bonusCount++;
  }
  return [prizeCount, bonusCount];
}

module.exports = LottoMain;

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
  lottoLoop(lottoList, prize, bonus);
}

function lottoLoop(lottoList, prize, bonus) {
  const prizeArray = stringToArray(prize);
  console.log(prizeArray);
  for (let i = 0; i < lottoList.length; i++) {
    const countArray = countCorrectNumber(lottoList[i], prizeArray, bonus);
    const prizeCount = countArray[0];
    const bonusCount = countArray[1];
    const result = prizeResult(prizeCount, bonusCount);
    ConsoleWork.print(result);
  }
}

function stringToArray(str) {
  const array = str.split(',').map(Number);
  return array;
}

function countCorrectNumber(lotto, prize, bonus) {
  let prizeCount = 0;
  let bonusCount = 0;
  for (let j = 0; j < prize.length; j++) {
    if (lotto.includes(prize[j])) {
      prizeCount++;
    }
  }
  if (lotto.includes(bonus)) {
    bonusCount++;
  }
  return [prizeCount, bonusCount];
}

function prizeResult(prizeCount, bonusCount) {
  if (prizeCount == 3) {
    return 'CORRECT3';
  }
  if (prizeCount == 4) {
    return 'CORRECT4';
  }
  if (prizeCount == 5) {
    if (bonusCount == 1) {
      return 'CORRECT5_BONUS';
    }
    return 'CORRECT5';
  }
  if (prizeCount == 6) {
    return 'CORRECT6';
  }
  return 'NOTHING';
}

module.exports = LottoMain;

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
  const staticLotto = lottoLoop(lottoList, prize, Number(bonus));
  printResultMessages(staticLotto);
}

function lottoLoop(lottoList, prize, bonus) {
  const prizeArray = stringToArray(prize);
  resultArray = [0, 0, 0, 0, 0];
  for (let i = 0; i < lottoList.length; i++) {
    const countArray = countCorrectNumber(lottoList[i], prizeArray, bonus);
    const prizeCount = countArray[0];
    const bonusCount = countArray[1];
    const result = prizeResult(prizeCount, bonusCount);
    if (result !== 'NOTHING') {
      resultArray[result]++;
    }
  }
  return resultArray;
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
    return 0;
  }
  if (prizeCount == 4) {
    return 1;
  }
  if (prizeCount == 5) {
    if (bonusCount == 1) {
      return 3;
    }
    return 2;
  }
  if (prizeCount == 6) {
    return 4;
  }
  return 'NOTHING';
}

function printResultMessages(staticLotto) {
  ConsoleWork.print(`${Message.CORRECT3_MESSAGE}${staticLotto[0]}개`);
  ConsoleWork.print(`${Message.CORRECT4_MESSAGE}${staticLotto[1]}개`);
  ConsoleWork.print(`${Message.CORRECT5_MESSAGE}${staticLotto[2]}개`);
  ConsoleWork.print(`${Message.CORRECT5_BONUS_MESSAGE}${staticLotto[3]}개`);
  ConsoleWork.print(`${Message.CORRECT6_MESSAGE}${staticLotto[4]}개`);
}
module.exports = LottoMain;

const MissionUtils = require('@woowacourse/mission-utils');
const MESSAGE = require('./MESSAGE');
const NumberWonMap = require('./NumberWonMap');
const numberObj = require('./NumberEqaulCount');

const {
  Three,
  Four,
  Five,
  FiveBonus,
  Six,
  LOTTO_EQUAL_MESSAGE,
  WON,
  FiveBonusStr,
} = MESSAGE;

function winnumStr(number, count) {
  if (number === FiveBonus) {
    const fivebounsStr = `${Five}${LOTTO_EQUAL_MESSAGE}${FiveBonusStr}${' ('}${NumberWonMap.get(
      number
    )}${WON}${')'}${' - '}${count}${'개'}`;
    return fivebounsStr;
  }

  return `${number}${LOTTO_EQUAL_MESSAGE}${' ('}${NumberWonMap.get(
    number
  )}${WON}${')'}${' - '}${count}${'개'}`;
}

const ordercountNum = [Three, Four, Five, FiveBonus, Six];
let sum = 0;

function printorderNum() {
  ordercountNum.forEach((eachorder) => {
    sum +=
      numberObj[eachorder] *
      NumberWonMap.get(eachorder).replace(MESSAGE.LOTTO_WIN_SEPERATOR, '');
    MissionUtils.Console.print(winnumStr(eachorder, numberObj[eachorder]));
  });
  return sum;
}

module.exports = printorderNum;

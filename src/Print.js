const MissionUtils = require("@woowacourse/mission-utils");
const { MESSAGES, getProfitMessage, getStatisticsMessage } = require('./constant/Constant');

const printAmounts = function printAmountsByDividedPrice (amounts) {
  MissionUtils.Console.print(`${amounts}${MESSAGES.PURCHASED}`);
}

const printLotto = function printLottoCorrectPrintForm (lotto) {
  const str = makeString(lotto);
  MissionUtils.Console.print(str);
};

const  printResult = function printStatisticsMessageAndProfitMessage ({ three, four, five, bonus, six }, profitRate) {
  MissionUtils.Console.print(getStatisticsMessage({ three, four, five, bonus, six }));
  MissionUtils.Console.print(getProfitMessage(profitRate));
  MissionUtils.Console.close();
};

const makeString = function makeArraytoString (lotto) {
  let str = '[';
  lotto.forEach((cur, idx) => {
    str += cur;
    if(idx != lotto.length - 1)
      str += ', ';
  });
  str += ']';

  return str;
};

module.exports = { printAmounts, printLotto, printResult, makeString };

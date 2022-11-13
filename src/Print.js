const MissionUtils = require("@woowacourse/mission-utils");
const { MESSAGES, getStatisticsMessage } = require('./constant/Constant');

function printAmounts (amounts) {
  MissionUtils.Console.print(`${amounts}${MESSAGES.PURCHASED}`);
}

function printLotto (lotto) {
  const str = makeString(lotto);
  MissionUtils.Console.print(str);
};

function printResult ({ three, four, five, bonus, six }) {
  MissionUtils.Console.print(getStatisticsMessage({ three, four, five, bonus, six }));
  MissionUtils.Console.close();
};

function makeString (lotto) {
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

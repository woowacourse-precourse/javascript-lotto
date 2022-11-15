const MissionUtils = require("@woowacourse/mission-utils");
const {
  MESSAGES,
  ProfitMessage,
  StatisticsMessage,
} = require("./constant/Constant");

const printNumber = (purchased) => {
  MissionUtils.Console.print(`${purchased}${MESSAGES.PURCHASEDLOTTO}`);
};

const makeStrLotto = (lotto) => {
  let str = "[";
  lotto.forEach((cur, idx) => {
    str += cur;
    if (idx != lotto.length - 1) str += ", ";
  });
  str += "]";

  return str;
};

const printLotto = (lotto) => {
  const str = makeStrLotto(lotto);
  MissionUtils.Console.print(str);
};

const printResult = ({ three, four, five, bonus, six }, profitRate) => {
  MissionUtils.Console.print(
    StatisticsMessage({ three, four, five, bonus, six })
  );
  MissionUtils.Console.print(ProfitMessage(profitRate));
  MissionUtils.Console.close();
};

module.exports = { printNumber, printLotto, printResult, makeStrLotto };

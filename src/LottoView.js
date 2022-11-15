// 화면 출력
const MissionUtils = require("@woowacourse/mission-utils");
const {
  MESSAGES,
  ProfitMessage,
  StatisticsMessage,
} = require("./constant/Constant");

const printNumber = (amounts) => {
  MissionUtils.Console.print(`${amounts}${MESSAGES.PURCHASEDLOTTO}`);
};

const printLotto = (lotto) => {
  const str = makeStrLotto(lotto);
  MissionUtils.Console.print(str);
};

const printResult = ({ three, four, five, bonus, six }, profitRate) => {
  MissionUtils.Console.print(
    StatisticsMessage({ three, four, five, bonus, six })
  );
  MissionUtils.Console.close();
  MissionUtils.Console.print(ProfitMessage(profitRate));
};
// 로또의 문자열화
const makeStrLotto = (lotto) => {
  let str = "[";
  lotto.forEach((cur, idx) => {
    str += cur;
    if (idx != lotto.length - 1) str += ", ";
  });
  str += "]";

  return str;
};

module.exports = { printNumber, printLotto, printResult, makeStrLotto };

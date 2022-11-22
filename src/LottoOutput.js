const { Console } = require("@woowacourse/mission-utils");
const { RESULT_MESSAGE } = require("./ResultMessage.js");
const printUserPurchaseAmount = (amount) => {
  Console.print(`\n${amount}개를 구매했습니다.`);
};

const printLottoResult = (res) => {
  Console.print("\n당첨통계");
  Console.print("---");
  res.forEach((el, i) => Console.print(RESULT_MESSAGE[i] + `${el}개`));
};

const printProfit = (profit, purchase) => {
  let profitPercentage = isNaN((profit / purchase) * 100)
    ? "0.0"
    : ((profit / purchase) * 100).toFixed(1);
  Console.print(`총 수익률은 ${profitPercentage}%입니다.`);
  Console.close();
};

module.exports = { printUserPurchaseAmount, printLottoResult, printProfit };

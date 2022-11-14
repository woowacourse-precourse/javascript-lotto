const { Print } = require("./lib/MissionUtils.js");
const { RESULT_MESSAGE } = require("./ResultMessage.js");
const printUserPurchaseAmount = (amount) => {
  return Print(`\n${amount}개를 구매했습니다.`);
};

const printLottoResult = (res) => {
  Print("\n당첨통계");
  Print("---");
  res.forEach((el, i) => Print(RESULT_MESSAGE[i] + `${el}개`));
};

const printProfit = (profit, purchase) => {
  let profitPercentage = isNaN((profit / purchase) * 100)
    ? "0.0"
    : ((profit / purchase) * 100).toFixed(1);
  Print(`총 수익률은 ${profitPercentage}%입니다.`);
};

module.exports = { printUserPurchaseAmount, printLottoResult, printProfit };

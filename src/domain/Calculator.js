const { REGEXP_KOREAN_MONEY_COMMA_LOCATION } = require("../utils/validator");
const MessageOutput = require("./MessageOutput");

class Calculator {
  messageOutput = new MessageOutput();
  calcReturnMoney(lottoMoneyOutput, moneyInput) {
    console.log(lottoMoneyOutput, moneyInput, "🌮");
    const returnMoney = ((lottoMoneyOutput / moneyInput) * 100).toFixed(2);
    const koreanMoney = returnMoney
      // .toLocaleString("ko-KR")
      .replace(REGEXP_KOREAN_MONEY_COMMA_LOCATION, ",");
    this.messageOutput.printMesage(
      `총 수익률은 ${parseFloat(koreanMoney)}%입니다.`
    );
  }
}

module.exports = Calculator;

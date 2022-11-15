const { REGEXP_KOREAN_MONEY_COMMA_LOCATION } = require("../utils/validator");
const MessageOutput = require("./MessageOutput");

class Calculator {
  messageOutput = new MessageOutput();
  calcReturnMoney(lottoMoneyOutput, moneyInput) {
    const returnMoney = (lottoMoneyOutput / moneyInput).toFixed(2);
    const koreanMoney = returnMoney
      .toLocaleString("ko-KR")
      .replace(REGEXP_KOREAN_MONEY_COMMA_LOCATION, ",");
    this.messageOutput.printMesage(`${koreanMoney}%`);
  }
}

module.exports = Calculator;

const { REGEXP_KOREAN_MONEY_COMMA_LOCATION } = require("../utils/validator");
const MessageOutput = require("./MessageOutput");

class Calculator {
  calcReturnMoney(lottoMoneyOutput, moneyInput) {
    const returnMoney = ((lottoMoneyOutput / moneyInput) * 100).toFixed(2);
    const koreanMoney = returnMoney.replace(
      REGEXP_KOREAN_MONEY_COMMA_LOCATION,
      ","
    );
    return parseFloat(koreanMoney);
  }

  plusLottoMoney(count, price) {
    return count ? parseInt(price.split(",").join("")) : 0;
  }
}

module.exports = Calculator;

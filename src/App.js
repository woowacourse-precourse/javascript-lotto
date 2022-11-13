const MissionUtils = require("@woowacourse/mission-utils");
const { Lotto } = require('./Lotto.js');

function getLottoPurchaseAmount(){
  var inputMoney = 0;
  MissionUtils.Console.readLine('구입금액을 입력해 주세요.', (input) => {
    inputMoney = moneyValidationCheck(input);
  });
  return inputMoney;
}

function isNumeric(str) {
  if (typeof str != "string") return false;
  return !isNaN(str) && !isNaN(parseFloat(str));
}

function moneyValidationCheck(money){
  if(!isNumeric(money)){
    throw new Error("[ERROR] 구입금액은 숫자이어야 합니다. : " + money);
  }
  if(Number(money) % 1000 != 0){
    throw new Error("[ERROR] 구입금액은 1,000원 단위여야 합니다. : " + money);
  }
  if(Number(money) < 0){
    throw new Error("[ERROR] 올바른 구입 금액을 입력해주세요. : " + money);
  }
  return Number(money);
}

class App {
  constructor() {
    this.winningNumber = [];
    this.lottoCount = 0;
    this.lottoarray = [];
  }
  play() {
    this.playLotto();
  }
  playLotto(){
    this.lottoCount = getLottoPurchaseAmount() / 1000;
  }
}

module.exports = App;

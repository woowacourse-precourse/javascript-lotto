const MissionUtils = require("@woowacourse/mission-utils");
class PurchaseAmount {


  inputPurchaseAmount(){
    MissionUtils.Console.readLine('구입금액을 입력해 주세요.', (input_money) => {
      console.log(input_money);
    });
  }
}


module.exports = PurchaseAmount;

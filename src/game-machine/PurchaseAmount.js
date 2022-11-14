const MissionUtils = require("@woowacourse/mission-utils");
class PurchaseAmount {

  inputPurchaseAmount(){
    MissionUtils.Console.readLine('닉네임을 입력해주세요.', (answer) => {
      console.log(`닉네임: ${answer}`);
    });
  }
  
}
module.exports = PurchaseAmount;

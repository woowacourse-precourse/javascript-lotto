const MissionUtils = require("@woowacourse/mission-utils");
class Coin{
    userInputMoney = 0;
    constructor(){
        this.insertCoin();
    }
    insertCoin() { 
        let inputCoin=0;
        MissionUtils.Console.readLine("구매 금액을 입력하세요 : ",(answer)=>{
           inputCoin = answer;
        this.userInputMoney = parseInt(inputCoin / 1000);
        })
      } // user 구매 금액 입력
}
module.exports = Coin;


const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    this.inputMoeny();
    
  }

  buyingLotto() {
    
  }

  inputMoeny() {
    let userInput = 0;
    MissionUtils.Console.readLine('구입 금액을 입력해 주세요.\n', (answer) => { 
      userInput = answer;
    });
    if(Number(userInput)%1 === 0) return userInput;
    throw new Error("[ERROR] 1,000원 단위로 구매할 수 있습니다.");
  }

}

module.exports = App;

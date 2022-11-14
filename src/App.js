const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    const ticket = this.inputMoeny();
  }

  createLotto(numbers) {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, numbers)
    .sort((a,b) => a - b)
  }


  inputMoeny() {
    let userInput = 0;
    MissionUtils.Console.readLine('구입 금액을 입력해 주세요.\n', (answer) => { 
      userInput = Number(answer);
    });
    if(userInput%1000 === 0 && userInput > 0) return userInput/1000;
    throw new Error("[ERROR] 1,000원 단위로 구매할 수 있습니다.");
  }

}

module.exports = App;

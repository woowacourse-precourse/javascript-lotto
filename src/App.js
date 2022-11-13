const MissionUtils = require("@woowacourse/mission-utils");
class App {
  play() {

  }

  getMoney(){ //구매 금액 입력받기
    MissionUtils.Console.readline('구입금액을 입력해 주세요.\n', (money) => {
      
    });
  }
}

module.exports = App;

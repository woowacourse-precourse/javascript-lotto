const MissionUtils = require("@woowacourse/mission-utils");

class App {

  purchasePrice() { // 구입 금액을 입력받는 메서드
    MissionUtils.Console.readLine('구입금액을 입력해 주세요.\n', (price) => {
      if (checkPrice(price)) { }
    })
  }

  checkPrice(price) { // 구입 금액이 조건에 맞게 입력했는지 확인하는 메서드
    for (let i = 0; i < price.length; i++) {
      if (isNaN(parseInt(price[i]))) {
        throw new Error("[ERROR] 구입 금액은 정수여야 합니다.");
      }
    }
    if ((price === '0') || (price % 1000 !== 0)) {
      throw new Error("[ERROR] 구입 금액은 1000원 단위로 입력해야 합니다.");
    }
    return;
  }
  play() { }
}

module.exports = App;

// const app = new App();
// app.play();
const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("../src/Lotto")

class App {

  purchasePrice() { // 구입 금액을 입력받는 메서드
    MissionUtils.Console.readLine('구입금액을 입력해 주세요.\n', (price) => {
      if (this.checkPrice(price)) {
        this.autoLotto(price);
      }
    })
  }

  checkPrice(price) { // 구입 금액이 조건에 맞게 입력했는지 확인하는 메서드
    for (let i = 0; i < price.length; i++) {
      if (isNaN(parseInt(price[i]))) {
        throw new Error("[ERROR] 구입 금액은 1000원 단위로 입력해야 합니다.");
      }
    }
    if ((price === '0') || (price % 1000 !== 0)) {
      throw new Error("[ERROR] 구입 금액은 1000원 단위로 입력해야 합니다.");
    }
    return true;
  }

  autoLotto(price) { // 입력한 금액의 개수만큼 로또 번호를 출력하는 메서드
    const LOTTO_AUTO = [];
    const GAME_NUMBER = parseInt(price / 1000);
    MissionUtils.Console.print(`\n${GAME_NUMBER}개를 구매했습니다.`)
    for (let i = 0; i < GAME_NUMBER; i++) {
      const NEW_LOTTO = new Lotto();
      MissionUtils.Console.print(NEW_LOTTO.lottoGame());
      LOTTO_AUTO.push(NEW_LOTTO.lottoGame());
      MissionUtils.Console.close();
    }
    return LOTTO_AUTO;
  }

  play() {
    this.purchasePrice();
  }
}

module.exports = App;

// const app = new App();
// app.play();
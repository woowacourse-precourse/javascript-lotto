const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("../src/Lotto")

class App {

  purchasePrice() { // 구입 금액을 입력받는 메서드
    MissionUtils.Console.readLine('구입금액을 입력해 주세요.\n', (price) => {
      if (this.checkPrice(price)) {
        const AUTO_LOTTO = this.autoLotto(price);
        const MANUAL_LOTTO = this.manualLotto();
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

  lottoGame() { // 1부터 45까지의 숫자 중 6개를 자동으로 고르고 오름차순으로 정렬하는 메서드
    const LOTTO_RESULT = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    LOTTO_RESULT.sort((a, b) => {
      return a - b;
    });
    return LOTTO_RESULT;
  }

  autoLotto(price) { // 입력한 금액의 개수만큼 로또 번호를 출력하는 메서드
    const LOTTO_AUTO = [];
    const GAME_NUMBER = parseInt(price / 1000);
    MissionUtils.Console.print(`\n${GAME_NUMBER}개를 구매했습니다.`)
    for (let i = 0; i < GAME_NUMBER; i++) {
      LOTTO_AUTO.push(this.lottoGame());
      MissionUtils.Console.print(LOTTO_AUTO[i]);
    }
    return LOTTO_AUTO;
  }

  manualLotto() { // 당첨 번호를 입력 받고 유효성을 확인하는 메서드
    MissionUtils.Console.readLine('\n당첨 번호를 입력해 주세요.\n', (manual) => {
      const NUMBERS = manual.split(',');
      const NEW_LOTTO = new Lotto(NUMBERS);
      MissionUtils.Console.print(NEW_LOTTO.manual());
      MissionUtils.Console.close();
    })
  }

  play() {
    this.purchasePrice();
  }
}

module.exports = App;
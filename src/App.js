const MissionUtils = require("@woowacourse/mission-utils");
class App {
  lottoPrice;
  lottos;

  play() {
    this.getMoney();
    this.lottos = this.buyLotto(this.lottoPrice / 1000);
  }

  getMoney() {
    MissionUtils.Console.readLine("구입 금액을 입력해주세요 :", (price) => {
      const isValidInput = this.checkValidPrice(price);
      if (isValidInput == true) {
        this.lottoPrice = price;
        MissionUtils.Console.print(`${price / 1000}개를 구매했습니다.`);
      } else {
        MissionUtils.Console.close();
      }
    });

    return;
  }

  checkValidPrice(price) {
    if (price % 1000 !== 0) {
      throw "[ERROR] invalid price";
    }
    return true;
  }

  buyLotto(number) {
    const lottos = [];

    for (let i = 0; i < number; i++) {
      const lotto = this.generateRandomLotto();
      MissionUtils.Console.print(lotto);
      lottos.concat(lotto);
    }

    return lottos;
  }

  generateRandomLotto() {
    const lotto = [];
    while (lotto.length < 6) {
      const num = MissionUtils.Random.pickNumberInRange(1, 45);
      if (!lotto.includes(num)) {
        lotto.push(num);
      }
    }
    lotto.sort(function (a, b) {
      if (a > b) return 1;
      if (a === b) return 0;
      if (a < b) return -1;
    });
    return lotto;
  }
}

module.exports = App;

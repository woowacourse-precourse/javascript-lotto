const MissionUtils = require("@woowacourse/mission-utils");
const { Console, Random } = MissionUtils;

class App {
  unit;
  lottos;

  constructor() {
    this.unit = 1000;
    this.lottos = [];
  }
  createLottos(money) {
    const lottoNum = money / this.unit;

    for (let idx = 0; idx < lottoNum; idx++) {
      const newLottoNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      const newLotto = newLotto(newLottoNumbers);
      this.lottos(newLotto);
    }
  }
  validateMoney(money) {
    const remains = money % this.unit;
    if (remains !== 0) {
      throw new Error(`[ERROR] 1000원 단위로 금액을 입력해주세요.`);
    }
  }
  buyLottos() {
    Console.readLine("구입금액을 입력해 주세요.", (money) => {
      this.validateMoney(money);
      this.createLottos(money);
    });
  }
  play() {}
}

module.exports = App;

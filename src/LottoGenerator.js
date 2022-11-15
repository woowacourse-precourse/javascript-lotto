const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");

const LOTTO_PRICE = 1000;
const MIN_NUMBER = 1;
const MAX_NUMBER = 45;
const PICK_COUNT = 6;

class LottoGenerator {
  constructor(payment) {
    this.validate(payment);
    this.totalNumberOfLotto = Number(payment) / LOTTO_PRICE;
  }

  validate(payment) {
    if (isNaN(payment)) {
      throw new Error("[ERROR] 구매 금액은 숫자만 입력하셔야 합니다.");
    }

    if (payment % LOTTO_PRICE !== 0) {
      throw new Error("[ERROR] 구매 금액은 천원 단위로 입력하셔야 합니다.");
    }
  }

  createLottos() {
    const lottos = [];
    let numberOfCreatedLotto = 0;

    while (numberOfCreatedLotto < this.totalNumberOfLotto) {
      const randomNumbers = MissionUtils.Random.pickUniqueNumbersInRange(MIN_NUMBER, MAX_NUMBER, PICK_COUNT);
      lottos.push(new Lotto(randomNumbers));
      numberOfCreatedLotto++;
    }

    return lottos;
  }
}

module.exports = LottoGenerator;

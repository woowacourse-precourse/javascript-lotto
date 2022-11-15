const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
const SETTING = require("./constants/setting");

const LOTTO_PRICE = 1000;

const ERROR_MESSAGE = {
  WRONG_TYPE: "[ERROR] 구매 금액은 숫자만 입력하셔야 합니다.",
  WRONG_UNIT: `[ERROR] 구매 금액은 ${LOTTO_PRICE}원 단위로 입력하셔야 합니다.`,
};

class LottoGenerator {
  constructor(payment) {
    this.validate(payment);
    this.numberOfPurchasedLotto = Number(payment) / LOTTO_PRICE;
    this.print(this.numberOfPurchasedLotto);
  }

  print(numberOfPurchasedLotto) {
    MissionUtils.Console.print(`${numberOfPurchasedLotto}개를 구매했습니다.`);
  }

  validate(payment) {
    if (isNaN(payment)) {
      throw new Error(ERROR_MESSAGE.WRONG_TYPE);
    }

    if (payment % LOTTO_PRICE !== 0) {
      throw new Error(ERROR_MESSAGE.WRONG_UNIT);
    }
  }

  createLottos() {
    const lotteries = [];
    let numberOfCreatedLotto = 0;

    while (numberOfCreatedLotto < this.numberOfPurchasedLotto) {
      const uniqueNumbers = MissionUtils.Random.pickUniqueNumbersInRange(SETTING.MIN_NUMBER, SETTING.MAX_NUMBER, SETTING.LOTTO_NUMBER_LENGTH);
      lotteries.push(new Lotto(uniqueNumbers));
      numberOfCreatedLotto++;
    }

    return lotteries;
  }
}

module.exports = LottoGenerator;

const MissionUtils = require("@woowacourse/mission-utils");
const { LOTTO_MESSAGE, LOTTO_SETTING } = require("./constant.js");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  static checkMoney(money) {
    const IS_TYPE_NUMBER = !Number.isNaN(money);
    const IS_MULTIPLE_THOUSAND =
      Number(money) % LOTTO_SETTING.LOTTO_PRICE === 0;
    const IS_VALID = IS_TYPE_NUMBER && IS_MULTIPLE_THOUSAND;

    if (!IS_VALID) {
      throw new Error("[ERROR] 금액은 1000의 배수인 숫자이여야 합니다.");
    }
  }

  static genLottoNumArr(money) {
    const LOTTO_NUM_COUNT = money / LOTTO_SETTING.LOTTO_PRICE;
    MissionUtils.Console.print(
      LOTTO_NUM_COUNT + LOTTO_MESSAGE.BUY_LOTTO_NUM_MSG
    );

    let lottoNumArr = [];
    for (let count = 0; count < LOTTO_NUM_COUNT; count++) {
      const numbers = MissionUtils.Random.pickUniqueNumbersInRange(
        LOTTO_SETTING.LOTTO_NUM_MIN,
        LOTTO_SETTING.LOTTO_NUM_MAX,
        LOTTO_SETTING.LOTTO_NUM_LENGTH
      );
      lottoNumArr.push(numbers);
    }

    return lottoNumArr;
  }

  static printLottoNumArr(lottoNumArr) {
    lottoNumArr.forEach((lottoNum) => {
      const sortedLottoNum = lottoNum.sort((a, b) => a - b);
      MissionUtils.Console.print(sortedLottoNum);
    });
  }
}

module.exports = Lotto;

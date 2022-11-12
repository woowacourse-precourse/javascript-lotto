const MissionUtils = require("@woowacourse/mission-utils");
const { LOTTO_MESSAGE, LOTTO_SETTING } = require("./constant.js");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.checkWinNumLength(numbers);
    this.checkWinNumRange(numbers);
    this.checkWinNumDuplicate(numbers);
    this.#numbers = numbers;
  }

  checkWinNumLength(numbers) {
    if (numbers.length !== 6) {
      throw new Error(LOTTO_MESSAGE.WIN_NUM_LENGTH_ERROR_MSG);
    }
  }

  checkWinNumRange(numbers) {
    const filteredWinNum = numbers.filter(
      (number) =>
        LOTTO_SETTING.LOTTO_NUM_MIN <= number &&
        number <= LOTTO_SETTING.LOTTO_NUM_MAX
    );

    const IS_VALID_RANGE = filteredWinNum.length === numbers.length;
    if (!IS_VALID_RANGE) {
      throw new Error(LOTTO_MESSAGE.WIN_NUM_RANGE_ERROR_MSG);
    }
  }

  checkWinNumDuplicate(numbers) {
    const setWinNum = new Set(numbers);
    const IS_DUPLICATE = setWinNum.size < numbers.length;
    if (IS_DUPLICATE) {
      throw new Error(LOTTO_MESSAGE.WIN_NUM_DUPLICATE_ERROR_MSG);
    }
  }

  static checkMoney(money) {
    const IS_TYPE_NUMBER = !Number.isNaN(money);
    const IS_MULTIPLE_THOUSAND =
      Number(money) % LOTTO_SETTING.LOTTO_PRICE === 0;
    const IS_VALID = IS_TYPE_NUMBER && IS_MULTIPLE_THOUSAND;

    if (!IS_VALID) {
      throw new Error(LOTTO_MESSAGE.LOTTO_PRICE_ERROR_MSG);
    }
  }

  static genLottoNumArr(money) {
    const LOTTO_NUM_COUNT = money / LOTTO_SETTING.LOTTO_PRICE;

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

  static printBuyLottoMSG(money) {
    const LOTTO_NUM_COUNT = money / LOTTO_SETTING.LOTTO_PRICE;
    MissionUtils.Console.print(
      LOTTO_NUM_COUNT + LOTTO_MESSAGE.BUY_LOTTO_NUM_MSG
    );
  }

  static printLottoNumArr(lottoNumArr) {
    lottoNumArr.forEach((lottoNum) => {
      const sortedLottoNum = lottoNum.sort((a, b) => a - b);
      MissionUtils.Console.print(sortedLottoNum);
    });
  }

  static checkBonusNum(bonusNum) {
    const IS_TYPE_NUMBER = !Number.isNaN(bonusNum);
    const IS_VALID_RANGE = 1 <= bonusNum && bonusNum <= 45;
    const IS_VALID = IS_TYPE_NUMBER && IS_VALID_RANGE;
    if (!IS_VALID) {
      throw new Error(LOTTO_MESSAGE.BONUS_NUM_ERROR_MSG);
    }
  }
}

module.exports = Lotto;

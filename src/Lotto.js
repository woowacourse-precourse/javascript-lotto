const MissionUtils = require("@woowacourse/mission-utils");
const {
  LOTTO_MESSAGE,
  LOTTO_SETTING,
  RESULT_MATCH_COUNT,
} = require("./constant.js");

class Lotto {
  #numbers;

  constructor(winNums, bonusNum, lottoNumArr) {
    this.#numbers = winNums;
    this.bonusNum = bonusNum;
    this.totalWinNums = [...winNums, bonusNum];
    this.lottoNumArr = lottoNumArr;
  }

  static checkWinNumLength(numbers) {
    if (numbers.length !== 6) {
      throw new Error(LOTTO_MESSAGE.WIN_NUM_LENGTH_ERROR_MSG);
    }
  }

  static checkWinNumRange(numbers) {
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

  static checkWinNumDuplicate(numbers) {
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

  static checkBonusNum(bonusNum, winNums) {
    const IS_TYPE_NUMBER = !Number.isNaN(bonusNum);
    const IS_VALID_RANGE = 1 <= bonusNum && bonusNum <= 45;
    const IS_DUPLICATE = winNums.includes(Number(bonusNum));
    const IS_VALID = IS_TYPE_NUMBER && IS_VALID_RANGE && !IS_DUPLICATE;
    if (!IS_VALID) {
      throw new Error(LOTTO_MESSAGE.BONUS_NUM_ERROR_MSG);
    }
  }

  calResult() {
    const bonusAndWinMatchNum = this.filterMatchNum();
    const onlyMatchNum =
      this.deleteBonusNumExceptSecondLottery(bonusAndWinMatchNum);
    console.log("onlyMatchNum", onlyMatchNum);

    let resultLottery = {};
    for (let matchNum in RESULT_MATCH_COUNT) {
      resultLottery[matchNum] = this.classifyLottery(onlyMatchNum, matchNum);
    }

    const FirstSecondLottery = this.splitFirstandSecondLottery(resultLottery);
    delete resultLottery.FIRST_OR_SECOND_LOTTERY;
    resultLottery = { ...resultLottery, ...FirstSecondLottery };

    console.log("resultLottery", resultLottery);
  }

  filterMatchNum() {
    const bonusAndWinMatchNum = this.lottoNumArr.map((lottoNum) =>
      this.totalWinNums.filter((winNum) => lottoNum.includes(winNum))
    );

    return bonusAndWinMatchNum;
  }

  deleteBonusNumExceptSecondLottery(bonusAndWinMatchNum) {
    console.log("bonusAndWinMatchNum", bonusAndWinMatchNum);
    return bonusAndWinMatchNum.map((matchNums) =>
      matchNums.filter(
        // 보너스 번호랑 같으면서 length === 6 (2등)이면 true
        // 보너스 번호랑 같기만하면 false
        // 그외 보너스 번호랑 다르면 true
        (matchNum) => {
          if (matchNum === this.bonusNum && matchNums.length === 6) {
            return true;
          }

          if (matchNum === this.bonusNum) {
            return false;
          }

          return true;
        }
      )
    );
  }

  classifyLottery(onlyMatchNum, matchNum) {
    return onlyMatchNum.filter(
      (result) => result.length === RESULT_MATCH_COUNT[matchNum]
    );
  }

  splitFirstandSecondLottery(resultLottery) {
    const SECOND_LOTTERY = resultLottery.FIRST_OR_SECOND_LOTTERY.filter(
      (result) => result.includes(this.bonusNum)
    );

    const FIRST_LOTTERY = resultLottery.FIRST_OR_SECOND_LOTTERY.filter(
      (result) => !result.includes(this.bonusNum)
    );
    return {
      SECOND_LOTTERY,
      FIRST_LOTTERY,
    };
  }
}

module.exports = Lotto;

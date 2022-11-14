const MissionUtils = require("@woowacourse/mission-utils");
const {
  LOTTO_MESSAGE,
  LOTTO_SETTING,
  RESULT_MATCH_COUNT,
  RESULT_MESSAGE,
  LOTTERY_OUTPUT_MONEY,
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
      MissionUtils.Console.print(`[${sortedLottoNum.join(", ")}]`);
    });
  }

  static checkBonusNum(bonusNum, winNums) {
    const IS_TYPE_NUMBER = !Number.isNaN(bonusNum);
    const IS_VALID_RANGE =
      LOTTO_SETTING.LOTTO_NUM_MIN <= bonusNum &&
      bonusNum <= LOTTO_SETTING.LOTTO_NUM_MAX;
    const IS_DUPLICATE = winNums.includes(Number(bonusNum));
    const IS_VALID = IS_TYPE_NUMBER && IS_VALID_RANGE && !IS_DUPLICATE;
    if (!IS_VALID) {
      throw new Error(LOTTO_MESSAGE.BONUS_NUM_ERROR_MSG);
    }
  }

  calResult() {
    // 보너스번호, 당첨번호와 일치하는 숫자들만 필터링
    const bonusAndWinMatchNum = this.filterMatchNum();
    // 2등을 제외한 보너스번호들을 삭제
    const onlyMatchNum =
      this.deleteBonusNumExceptSecondLottery(bonusAndWinMatchNum);

    // 각 당첨등수를 분류
    let resultLottery = this.classifyLottery(onlyMatchNum);

    // 1,2등의 당첨 번호들에서 보너스번호 포함여부로 1,2등을 분류
    const FirstAndSecondLottery =
      this.splitFirstandSecondLottery(resultLottery);
    delete resultLottery.FIRST_OR_SECOND_LOTTERY;
    resultLottery = { ...resultLottery, ...FirstAndSecondLottery };

    return resultLottery;
  }

  filterMatchNum() {
    const bonusAndWinMatchNum = this.lottoNumArr.map((lottoNum) =>
      this.totalWinNums.filter((winNum) => lottoNum.includes(winNum))
    );

    return bonusAndWinMatchNum;
  }

  deleteBonusNumExceptSecondLottery(bonusAndWinMatchNum) {
    return bonusAndWinMatchNum.map((matchNums) =>
      matchNums.filter(
        // 보너스 번호랑 같으면서 length === 6 (2등)이면 true
        // 보너스 번호랑 같기만하면 false
        // 그외 보너스 번호랑 다르면 true
        (matchNum) => {
          if (
            matchNum === this.bonusNum &&
            matchNums.length === RESULT_MATCH_COUNT.FIRST_OR_SECOND_LOTTERY
          ) {
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

  // 해당 길이 로또 번호들만 필터링
  // 여기서 길이는 당첨이 되는 5등부터 3,4,5,6 이다
  filterOnlyWinLottery(onlyMatchNum, matchCount) {
    return onlyMatchNum.filter(
      (result) => result.length === RESULT_MATCH_COUNT[matchCount]
    );
  }

  classifyLottery(onlyMatchNum) {
    let resultLottery = {};
    for (let matchCount in RESULT_MATCH_COUNT) {
      resultLottery[matchCount] = this.filterOnlyWinLottery(
        onlyMatchNum,
        matchCount
      );
    }
    return resultLottery;
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

  printResult() {
    const resultLottery = this.calResult();

    for (let rank in resultLottery) {
      MissionUtils.Console.print(
        `${RESULT_MESSAGE[rank] + resultLottery[rank].length}개`
      );
    }

    const rateOfReturn = this.calRateOfReturn(resultLottery);
    MissionUtils.Console.print(
      `${RESULT_MESSAGE.RATE_OF_RETURN + rateOfReturn.toFixed(1)}%입니다.`
    );
  }

  calRateOfReturn(resultLottery) {
    const inputMoney = this.lottoNumArr.length * LOTTO_SETTING.LOTTO_PRICE;
    let outputMoney = 0;
    for (let rank in resultLottery) {
      outputMoney += LOTTERY_OUTPUT_MONEY[rank] * resultLottery[rank].length;
    }
    const rateOfReturn = (outputMoney / inputMoney) * 100;

    return rateOfReturn;
  }
}

module.exports = Lotto;

const Constant = require("./utils/Constant");
const MissionUtils = require("@woowacourse/mission-utils");
class Lotto {
  #numbers;
  #bonusNumber;

  constructor(numbers, lottoList, money) {
    this.#numbers = this.validate(numbers);
    this.#bonusNumber = 0;
    this.lottoList = lottoList;
    this.money = money;
    this.prizeList = {
      totalPrize: 0,
      firstPrize: 0,
      secondPrize: 0,
      thirdPrize: 0,
      fourthPrize: 0,
      fifthPrize: 0,
    };
  }

  validate(numbers) {
    const numbersArr = numbers.split(",").map((elem) => parseInt(elem));
    if (numbersArr.length !== 6) {
      throw new Error(Constant.MESSAGE.ERROR.OUT_OF_RANGE);
    }
    return numbersArr;
  }

  setBonusNum(number) {
    //유효성 검사
    this.#bonusNumber = number;
  }

  checkNumber() {
    for (let i = 0; i < this.lottoList.length; i++) {
      let prizeCnt = 0;
      let hitBonus = false;

      for (let j = 0; j < this.lottoList[i].length; j++) {
        this.#numbers.find((e) => e === this.lottoList[i][j]) ? prizeCnt++ : "";
        this.lottoList[i][j] === this.#bonusNumber ? (hitBonus = true) : "";
      }
      if (prizeCnt >= 3) {
        this.saveResult(prizeCnt, hitBonus);
      }
    }
    this.resultStatics();
  }
  saveResult(prizeCnt, hitBonus) {
    if (prizeCnt === 3) {
      this.prizeList.fifthPrize++;
      this.prizeList.totalPrize += Constant.LOTTO.FIFTH_PRIZE;
    }
    if (prizeCnt === 4) {
      this.prizeList.fourthPrize++;
      this.prizeList.totalPrize += Constant.LOTTO.FOURTH_PRIZE;
    }
    if (prizeCnt === 5) {
      if (hitBonus) {
        this.prizeList.secondPrize++;
        this.prizeList.totalPrize += Constant.LOTTO.SECOND_PRIZE;
        return;
      }
      this.prizeList.thirdPrize++;
      this.prizeList.totalPrize += Constant.LOTTO.THIRD_PRIZE;
    }
    if (prizeCnt === 6) {
      this.prizeList.firstPrize++;
      this.prizeList.totalPrize += Constant.LOTTO.FIRST_PRIZE;
    }
  }

  resultStatics() {
    const earningsRate = (
      (this.prizeList.totalPrize / this.money) *
      100
    ).toFixed(1);
    MissionUtils.Console.print(
      Constant.MESSAGE.GUIDE.WINNING_STATICS_LIST(this.prizeList)
    );
    MissionUtils.Console.print(
      Constant.MESSAGE.GUIDE.EARNINGS_RATE(earningsRate)
    );
    MissionUtils.Console.close();
  }
}

module.exports = Lotto;

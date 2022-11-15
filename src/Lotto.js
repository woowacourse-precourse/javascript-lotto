const { LOTTO_DETAILS, ERROR, LOTTO } = require("./constant/constant");
const { Console } = require("@woowacourse/mission-utils");
const Validation = require("./utils/Validation");
const UI = require("./utils/UI");
const { RANK } = LOTTO_DETAILS;

class Lotto {
  #numbers;

  constructor(numbers, userLottoArr) {
    this.validate(numbers);
    this.getBonusNumber(userLottoArr);
  }

  validate(numbers) {
    const splitNumbers = numbers.split(",");
    Validation.isNumber(splitNumbers.join(""));
    Validation.isLottoInput(splitNumbers);
    Validation.isOverlap(splitNumbers);
    splitNumbers.forEach((lottoNumber) => {
      Validation.isLottoVariable(Number(lottoNumber));
    });

    const toNumberSplitNumbers = splitNumbers.map((string) => Number(string));
    this.#numbers = toNumberSplitNumbers;
  }

  validateBonusNumber(bonusNumber) {
    Validation.isNumber(bonusNumber);
    const toNumberBonusNumber = Number(bonusNumber);
    Validation.isIncludeNumberInArr(bonusNumber, this.#numbers);
    Validation.isLottoVariable(toNumberBonusNumber);
  }

  getBonusNumber(userLottoArr) {
    Console.readLine(LOTTO.BONUS_ANNOUNCEMENT, (bonusNumber) => {
      const toNumberBonusNumber = Number(bonusNumber);
      this.validateBonusNumber(toNumberBonusNumber);
      const winningBoard = this.calculate(toNumberBonusNumber, userLottoArr);
      const profit = this.getProfit(winningBoard, userLottoArr);
      this.printWinningBoard(winningBoard, profit);
    });
  }

  calculate(bonusNumber, userLottoArr) {
    const winningBoard = { ...LOTTO.WINNING_BOARD };

    userLottoArr.forEach((lotto) => {
      const intersectionLottoAndUser = lotto.filter((x) =>
        this.#numbers.includes(x)
      ).length;

      if (intersectionLottoAndUser < RANK.FIFTH) return;

      if (
        intersectionLottoAndUser === RANK.THIRD &&
        lotto.includes(bonusNumber)
      ) {
        winningBoard.SECOND += 1;
        return;
      }

      winningBoard[this.checkWinning(intersectionLottoAndUser)] += 1;
    });
    return winningBoard;
  }

  checkWinning(intersection) {
    switch (intersection) {
      case RANK.FIFTH:
        return "FIFTH";
      case RANK.FORTH:
        return "FORTH";
      case RANK.THIRD:
        return "THIRD";
      case RANK.FIRST:
        return "FIRST";
      default:
        throw new Error(ERROR.WRONG_ROUTE);
    }
  }

  getProfit(winningBoard, userLottoArr) {
    const userRevenue = this.checkRevenue(winningBoard);
    const userMoney = userLottoArr.length;
    const profit = Math.round((userRevenue / userMoney) * 100 * 10) / 10;
    //소수점 한자리까지 반올림

    return profit;
  }

  checkRevenue(winningBoard) {
    let revenue = 0;
    revenue += winningBoard.FIFTH * 5;
    revenue += winningBoard.FORTH * 50;
    revenue += winningBoard.THIRD * 1500;
    revenue += winningBoard.SECOND * 30000;
    revenue += winningBoard.FIRST * 2000000;
    return revenue;
  }

  printWinningBoard(winningBoard, profit) {
    UI.print("당첨 통계");
    UI.print("---");
    const a = [
      `3개 일치 (5,000원) - ${winningBoard.FIFTH}개`,
      `4개 일치 (50,000원) - ${winningBoard.FORTH}개`,
      `5개 일치 (1,500,000원) - ${winningBoard.THIRD}개`,
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${winningBoard.SECOND}개`,
      `6개 일치 (2,000,000,000원) - ${winningBoard.FIRST}개`,
    ];
    a.forEach((item) => UI.print(item));
    UI.print(`총 수익률은 ${profit}%입니다.`);
  }
}

module.exports = Lotto;

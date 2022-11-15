const { Random, Console } = require("@woowacourse/mission-utils");
const { PRIZE, ERROR } = require("../constants/constants");
class Lotto {
  #numbers;
  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
    this.myLotto = [];
  }

  validate(numbers) {
    if (numbers !== undefined) {
      if (numbers.length !== 6) throw new Error(ERROR.LENGTH);
      if (numbers.some((number) => number > 45) || numbers.some((number) => number < 1)) throw new Error(ERROR.MUST_BETWEEN_NUMBER);
      if ([...new Set(numbers)].length !== numbers.length) throw new Error(ERROR.DUPLICATED_NUMBER);
    }
  }

  getInputMoney() {
    Console.readLine("구매금액을 입력해주세요.\n", (money) => {
      if (money != Number(money)) throw new Error(ERROR.NOT_NUMBER);
      if (money < 1000) throw new Error(ERROR.NOT_ENOUGH_MONEY);
      const buyLotto = Math.floor(money / 1000);
      this.getRandomNumber(buyLotto);
    });
  }

  getRandomNumber(buyLotto) {
    Console.print(`${buyLotto}개를 구매했습니다.`);
    for (let i = 0; i < buyLotto; i++) {
      const randomNumber = Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
      this.myLotto.push(randomNumber);

      Console.print(`[${randomNumber.join(", ")}]`);
    }
    this.addWinningNumber();
  }

  addWinningNumber() {
    const winningNumber = { winningNumberList: [], bonusNumber: 0 };
    Console.readLine("당첨 번호를 입력해 주세요.\n", (number) => {
      const reg = /\d{1,2},\d{1,2},\d{1,2},\d{1,2},\d{1,2},\d{1,2}/;
      if (!reg.test(number)) {
        throw new Error(ERROR.NOT_SAVE_RULE);
      }

      const winningNumberList = number.split(",").map((str) => Number(str));
      this.validate(winningNumberList);

      winningNumber.winningNumberList = winningNumberList;
      this.addBonusNumber(winningNumber);
    });
  }

  addBonusNumber(winningNumber) {
    Console.readLine("보너스 번호를 입력해 주세요.\n", (bonusNumber) => {
      if (bonusNumber > 45 || bonusNumber < 1) throw new Error(ERROR.MUST_BETWEEN_NUMBER);
      if (winningNumber.winningNumberList.includes(bonusNumber)) throw new Error(ERROR.DUPLICATED_NUMBER);
      winningNumber.bonusNumber = Number(bonusNumber);
      this.checkLottoNumber(winningNumber);
    });
  }

  checkLottoNumber(winningNumber) {
    const rankList = new Array(8).fill(0);
    const correctNumber = this.myLotto.map((lotto) => ({
      winningCount: lotto.filter((num) => winningNumber.winningNumberList.includes(num)).length,
      bonusNumber: lotto.includes(winningNumber.bonusNumber) ? 1 : 0,
    }));
    correctNumber.forEach(({ winningCount, bonusNumber }) => {
      let rank = winningCount + bonusNumber;
      if (rank === 6 && bonusNumber === 0) {
        rank = 7;
      }
      rankList[rank]++;
    });

    this.getResult(rankList);
  }

  getResult(rankList) {
    const { FIFTH_PRIZE, FORTH_PRIZE, THIRD_PRIZE, SECOND_PRIZE, FIRST_PRIZE } = PRIZE;
    const writeComma = (number) => {
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };
    Console.print("당첨 통계\n");
    Console.print("---\n");
    Console.print(`3개 일치 (${writeComma(FIFTH_PRIZE)}원) - ${rankList[3]}개`);
    Console.print(`4개 일치 (${writeComma(FORTH_PRIZE)}원) - ${rankList[4]}개`);
    Console.print(`5개 일치 (${writeComma(THIRD_PRIZE)}원) - ${rankList[5]}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (${writeComma(SECOND_PRIZE)}원) - ${rankList[6]}개`);
    Console.print(`6개 일치 (${writeComma(FIRST_PRIZE)}원) - ${rankList[7]}개`);
    Console.print(
      `총 수익률은 ${
        ((FIFTH_PRIZE * rankList[3] + FORTH_PRIZE * rankList[4] + THIRD_PRIZE * rankList[5] + SECOND_PRIZE * rankList[6] + FIRST_PRIZE * rankList[7]) /
          (this.myLotto.length * 1000)) *
        100
      }%입니다.`
    );
  }
}

module.exports = Lotto;

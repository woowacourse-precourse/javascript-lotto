const { Console, Random } = require('@woowacourse/mission-utils');
const {
  UNIT_OF_AMOUNT,
  VALID_LENGTH,
  VALID_MIN_NUM,
  VALID_MAX_NUM,
} = require('./constant/index');
const { RESULT } = require('./constant/Result');
const Lotto = require('./Lotto');
const { convertToNumber, convertToNumberArray } = require('./util/convert');
const { validateUnitOfAmount, validateMinAmount } = require('./util/validate');
const WinningLotto = require('./WinningLotto');

class App {
  #money;
  #lotto;
  #winningLotto;
  #bonusNumber;
  #result;

  constructor() {
    this.#money = null;
    this.#lotto = [];
    this.#winningLotto = [];
    this.#bonusNumber = null;
    this.#result = RESULT;
  }

  play() {
    this.startGame();
  }

  startGame() {
    this.insertMoney();
  }

  insertMoney() {
    Console.readLine('구입금액을 입력해 주세요.\n', (answer) => {
      this.#money = convertToNumber(answer);

      this.validate(this.#money);

      const quantutyOfLotto = this.getQuantityOfLotto(this.#money);
      this.createLotto(quantutyOfLotto);
    });
  }

  validate(money) {
    validateUnitOfAmount(money);
    validateMinAmount(money);
  }

  getQuantityOfLotto(amount) {
    return amount / UNIT_OF_AMOUNT;
  }

  printMessage(message) {
    return Console.print(message);
  }

  createLotto(number) {
    this.printMessage(`${number}개를 구매했습니다.`);

    for (let i = 0; i < number; i++) {
      const generateLottoNumbers = Random.pickUniqueNumbersInRange(
        VALID_MIN_NUM,
        VALID_MAX_NUM,
        VALID_LENGTH
      );
      generateLottoNumbers.sort((a, b) => a - b);

      const playerLotto = new Lotto(generateLottoNumbers);
      playerLotto.print();
      this.#lotto.push(playerLotto.Lotto());
    }

    this.setWinningLotto();
  }

  setWinningLotto() {
    Console.readLine('당첨 번호를 입력해 주세요.\n', (answer) => {
      const setWinningnumbers = convertToNumberArray(answer);
      this.#winningLotto = new WinningLotto(setWinningnumbers);

      this.setBonusNumber();
    });
  }

  setBonusNumber() {
    Console.readLine('보너스 번호를 입력해 주세요.\n', (answer) => {
      const number = convertToNumber(answer);
      this.#winningLotto.validateBonusNumber(number);
      this.#bonusNumber = this.#winningLotto.BonusNumber();

      this.compareLotto();
    });
  }

  compareLotto() {
    for (const lottoNumber of this.#lotto) {
      const matchNumber = lottoNumber.filter((number) =>
        this.#winningLotto.WinningLotto().includes(number)
      ).length;
      const hasBonusNumber = lottoNumber.includes(this.#bonusNumber);
      this.setMatchCount(matchNumber, hasBonusNumber);
    }

    this.printResult();
  }

  setMatchCount(matchNumber, hasBonusNumber) {
    if (matchNumber < 3) return;
    if (matchNumber === 3) {
      this.#result.FIFTH_PLACE.MATCH_COUNT += 1;
      return;
    }
    if (matchNumber === 4) {
      this.#result.FORTH_PLACE.MATCH_COUNT += 1;
      return;
    }
    if (matchNumber === 5) {
      if (hasBonusNumber) {
        this.#result.SECOND_PLACE.MATCH_COUNT += 1;
        return;
      }
      this.#result.THIRD_PLACE.MATCH_COUNT += 1;
      return;
    }
    if (matchNumber === 6) {
      this.#result.FIRST_PLACE.MATCH_COUNT += 1;
      return;
    }
  }

  printResult() {
    Console.print('당첨 통계\n---');
    for (const place in this.#result) {
      Console.print(
        `${this.#result[place].DESCRIPTION} - ${
          this.#result[place].MATCH_COUNT
        }개`
      );
    }

    const profitRate = this.calulateProfitRate();
    Console.print(`총 수익률은 ${profitRate}%입니다.`);
    Console.close();
  }

  calulateProfitRate() {
    let sumProfit = 0;
    for (const place in this.#result) {
      sumProfit += this.#result[place].PRIZE * this.#result[place].MATCH_COUNT;
    }

    const profitRate = ((sumProfit / this.#money) * 100).toFixed(1);

    return profitRate;
  }
}

const app = new App();
app.play();

module.exports = App;

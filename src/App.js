const { Console } = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');
const Input = require('./Input');
const { MESSAGE, EACH_RANK } = require('./Contants');
const Rank = require('./Rank').default;
const BonusNumber = require('./BonusNumber');

class App {
  constructor() {
    this.profits = 0;
    this.compareLotto = null;
    this.userLotto = null;
  }

  play() {
    this.inputMoney();
  }

  inputMoney() {
    Console.readLine(`${MESSAGE.INPUT_MONEY}\n`, inputMoney => {
      const input = new Input(inputMoney);
      this.compareLotto = Input.createRandomLotto(input.countLotto);
      this.printCountLotto(input.countLotto);
      this.printRandomLottoNumber();
      this.inputWinningLottoNumber();
    });
  }

  printCountLotto(countLotto) {
    Console.print(`\n${countLotto}${MESSAGE.PRINT_COUNTLOTTO}`);
  }

  printRandomLottoNumber() {
    this.compareLotto.forEach(item => {
      Console.print(`[${item.join(', ')}]`);
    });
  }

  inputWinningLottoNumber() {
    Console.readLine(`${MESSAGE.INPUT_WINNING_NUMBER}\n`, number => {
      const splitedInput = Lotto.getSplited(number);
      this.userLotto = Lotto.UserLotto(splitedInput);
      new Lotto(this.userLotto);
      this.inputBonusNumber();
    });
  }

  inputBonusNumber() {
    Console.readLine(`${MESSAGE.INPUT_BONUS_NUMBER}\n`, bonus => {
      new BonusNumber(this.userLotto, bonus);
      const result = new Rank(this.compareLotto, this.userLotto, bonus);
      result.calculateEachLotto();

      this.showResult(result.rank);
      this.showEarningsRate(result.earningsRate);
    });
  }

  showResult(rank) {
    Console.print('\n당첨 통계\n---');

    rank.forEach((item, index) => {
      Console.print(`${EACH_RANK[index]}` + `${item}개`);
    });
  }

  showEarningsRate(earningsRate) {
    Console.print(`총 수익률은 ${earningsRate}%입니다.`);
    Console.close();
  }

  // rankResult(compareLotto, winningLottoNumber, bonusNumber) {
  //   const rankArray = [0, 0, 0, 0, 0];
  //   compareLotto.forEach(lottoArray => {
  //     let matchCount = this.matchingNumber(lottoArray, winningLottoNumber);
  //     if (matchCount == 6) rankArray[0] += 1;
  //     if (matchCount == 5 && this.checkBonusNumber(lottoArray, bonusNumber))
  //       rankArray[1] += 1;
  //     if (matchCount == 5 && !this.checkBonusNumber(lottoArray, bonusNumber))
  //       rankArray[2] += 1;
  //     if (matchCount == 4) rankArray[3] += 1;
  //     if (matchCount == 3) rankArray[4] += 1;
  //   });
  //   this.printRankResult(rankArray);
  // }

  // matchingNumber(lottoNumber, winningLottoNumber) {
  //   return lottoNumber.reduce((sum, number) => {
  //     winningLottoNumber.includes(number) ? (sum += 1) : null;
  //     return sum;
  //   }, 0);
  // }

  // checkBonusNumber(lottoNumber, bonusNumber) {
  //   return lottoNumber.includes(bonusNumber);
  // }

  // printRankResult(results) {
  //   Console.print(RESULT.RESULT_MESSAGE);
  //   Console.print(RESULT.RESULT_RANK_6 + `${results[0]}개`);
  //   Console.print(RESULT.RESULT_RANK_5_BONUS + `${results[1]}개`);
  //   Console.print(RESULT.RESULT_RANK_5 + `${results[2]}개`);
  //   Console.print(RESULT.RESULT_RANK_4 + `${results[3]}개`);
  //   Console.print(RESULT.RESULT_RANK_3 + `${results[4]}개`);
  //   this.calculateEarningsRate(results, this.inputMoney);
  // }

  // calculateEarningsRate(rankArray, inputMoney) {
  //   const winningsArray = [2000000000, 30000000, 1500000, 50000, 5000];
  //   const total = rankArray.reduce((sum, count, countIndex) => {
  //     return sum + count * winningsArray[countIndex];
  //   }, 0);
  //   console.log(total);
  //   const profits = ((total / inputMoney) * 100).toFixed(1);
  //   Console.print(`총 수익률은 ${profits}%입니다.`);
  // }

  // inputMoney() {
  //   Console.readLine(`${MESSAGE.INPUT_MONEY}\n`, inputMoney => {
  //     // this.setInputMoney(inputMoney);
  //     // this.validate(inputMoney);

  //     const input = new Input(inputMoney)
  //     this.compareLotto = Input.createRandomLotto(input.countLotto);
  //     this.printCountLotto(input.countLotto);
  //     this.printRandomLottoNumber();
  //     // this.buyLotto(inputMoney);
  //   });
  // }
  // setInputMoney(inputMoney) {
  //   this.inputMoney = inputMoney;
  // }
  // validate(price) {
  //   this.checkNumber(price);
  //   this.checkThousandUnit(price);
  // }
  // checkNumber(price) {
  //   if (isNaN(price)) {
  //     throw new Error(ERROR.NOT_NUMBER_ERROR);
  //   }
  // }
  // checkThousandUnit(price) {
  //   if (price % 1000 !== 0) {
  //     throw new Error(ERROR.NOT_THOUSAND_ERROR);
  //   }
  // }
  // buyLotto(inputMoney) {
  //   this.#numbers = Number(inputMoney) / 1000;
  //   this.printCountLotto(this.#numbers);
  //   this.makeLotto();
  //   this.inputWinningLottoNumber(); // 당첨 번호 입력
  // }

  // makeLotto() {
  //   for (let i = 0; i < this.#numbers; i++) {
  //     let lottoNumber = this.ascendingLottoArray(this.makeRandomLottoNumber());
  //     this.printRandomLottoNumber(lottoNumber);
  //     this.compareLotto.push(lottoNumber);
  //   }
  // }
  // makeRandomLottoNumber() {
  //   return Random.pickUniqueNumbersInRange(LOTTO_NUMBER.MIN_RANGE, LOTTO_NUMBER.MAX_RANGE, LOTTO_NUMBER.COUNT);
  // }
  // ascendingLottoArray(lottoNumber) {
  //   return lottoNumber.sort((a, b) => a - b);
  // }

  // isValidBonusNumber(number) {
  //   this.checkBonusIsNumber(number);
  //   this.checkBonusRange(number);
  //   this.checkBonusOverlap(number);
  // }

  // checkBonusIsNumber(number) {
  //   if (isNaN(number)) {
  //     throw new Error(ERROR.CHECK_BONUS_IS_NUMBER);
  //   }
  // }

  // checkBonusRange(number) {
  //   if (number < LOTTO_NUMBER.MIN_RANGE || number > LOTTO_NUMBER.MAX_RANGE) {
  //     throw new Error(ERROR.CHECK_BONUS_IS_NUMBER);
  //   }
  // }

  // checkBonusOverlap(number) {
  //   if (this.winningLottoNumber.includes(+number)) {
  //     throw new Error(ERROR.CHECK_BONUS_OVERLAP);
  //   }
  // }
}

const app = new App();
app.play();

module.exports = App;

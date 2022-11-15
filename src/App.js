const { Console } = require('@woowacourse/mission-utils');

const { read, reducer, print, inputControl } = require('./Funcs.js');
const {
  moneyInputCheckHandler,
  lottoInputCheckHandler,
} = require('./Validator.js');
const User = require('./User.js');
const Lotto = require('./Lotto.js');
const { RECORD, RESULTS, MESSAGES } = require('./Constants.js');

class App {
  constructor() {
    this.user = new User();
  }

  inputMoneyHandler() {
    read(MESSAGES.MONEY, input => {
      moneyInputCheckHandler(input, input => this.user.purchaseLotto(input));
      this.user.myLottos();
      this.inputWinningNumberHandler();
    });
  }

  inputWinningNumberHandler() {
    read(MESSAGES.WINNING_NUMBER, input => {
      const inputConfig = inputControl(input);
      const numbers = lottoInputCheckHandler(inputConfig);
      console.log(numbers);
      this.lotto = new Lotto(numbers);
      this.inputBonusNumberHandler(numbers);
    });
  }

  inputBonusNumberHandler(winningNumbers) {
    read(MESSAGES.BONUS_NUMBER, input => {
      const fullNumbers = [...winningNumbers, input];
      lottoInputCheckHandler(fullNumbers, 7);
      this.lotto.setBonusNumber(input);
      // this.user.lottos.map(item =>
      //   this.lotto.calculateRank(item, this.lotto.numbers, RECORD),
      // );
      this.printResult();
    });
  }

  printResult() {
    const myLottos = this.user.lottos;
    print(MESSAGES.PURCHASED_LOTTO(this.user.lottos.length));
    reducer(
      myLottos,
      myLottos.map(item => print(item)),
      myLottos.map(item =>
        this.lotto.calculateRank(
          item,
          this.lotto.numbers.winningNumbers,
          this.lotto.numbers.bonusNumber,
          RECORD,
        ),
      ),
    );
    print(MESSAGES.HEADER);
    print(MESSAGES.LINE);
    RESULTS.FIFTH_PRICE(RECORD.fifth.count);
    RESULTS.FOURTH_PRICE(RECORD.fourth.count);
    RESULTS.THIRD_PRICE(RECORD.third.count);
    RESULTS.SECOND_PRICE(RECORD.second.count);
    RESULTS.FIRST_PRICE(RECORD.first.count);
    print(
      `총 수익률은 ${this.lotto.calculateProfitRatio(
        RECORD,
        this.user.money,
      )}%입니다.`,
    );
    Console.close();
  }

  play() {
    this.inputMoneyHandler();
  }
}

const app = new App();
app.play();

module.exports = App;

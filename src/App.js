const { Console } = require('@woowacourse/mission-utils');

const { read, reducer, print } = require('./Funcs.js');
const {
  moneyInputCheckHandler,
  lottoInputCheckHandler,
} = require('./Validator.js');
const User = require('./User.js');
const Lotto = require('./Lotto.js');
const { RECORD, RESULTS } = require('./Constants.js');

class App {
  constructor() {
    this.user = new User();
  }
  inputMoneyHandler() {
    read('구입금액을 입력해주세요.\n', input => {
      moneyInputCheckHandler(input, input => this.user.purchaseLotto(input));
      this.user.myLottos();

      print(`\n${this.user.quentity}개를 구매했습니다.`);
      this.user.lottos.forEach(item => print(item));
      this.inputWinningNumberHandler();
    });
  }

  inputWinningNumberHandler() {
    read(`\n당첨 번호를 입력해주세요\n`, input => {
      const target = [...input.split(',')].filter(x => !isNaN(x));
      const numbers = lottoInputCheckHandler(target);
      this.lotto = new Lotto(numbers);
      this.inputBonusNumberHandler(numbers);
    });
  }

  inputBonusNumberHandler(winningNumbers) {
    read(`\n보너스 번호를 입력해주세요\n`, input => {
      const fullNumbers = [...winningNumbers, input];
      lottoInputCheckHandler(fullNumbers, 7);
      this.lotto.setBonusNumber(input);
      this.lotto.calculateRank(this.user.lottos, this.lotto, RECORD);
      this.printResult();
    });
  }

  printResult() {
    print('\n당첨 통계\n---');
    RESULTS.FIFTH_PRICE(RECORD.fifth.count);
    RESULTS.FOURTH_PRICE(RECORD.fourth.count);
    RESULTS.THIRD_PRICE(RECORD.third.count);
    RESULTS.SECOND_PRICE(RECORD.second.count);
    RESULTS.FIRST_PRICE(RECORD.first.count);
    print(`총 수익률은 ${this.user.calculateProfitRatio(RECORD)}%입니다.`);
    Console.close();
  }

  play() {
    this.inputMoneyHandler();
  }
}

const app = new App();
app.play();

module.exports = App;

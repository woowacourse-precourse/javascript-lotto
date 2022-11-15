const { read } = require('./Funcs.js');
const {
  moneyInputCheckHandler,
  lottoInputCheckHandler,
} = require('./Validator.js');
const User = require('./User.js');

class App {
  constructor() {
    this.user = new User();
  }

  inputMoneyHandler() {
    read('구입 금액을 입력해주세요\n', input => {
      moneyInputCheckHandler(input, input => User.purchaseLotto(input));
      this.inputWinningNumberHandler();
    });
  }

  inputWinningNumberHandler() {
    read(`당첨 번호를 입력해주세요\n`, input => {
      const target = [...input.split('')].filter(x => !isNaN(x));
      const numbers = lottoInputCheckHandler(target);
      this.inputBonusNumberHandler(numbers);
    });
  }

  inputBonusNumberHandler(winningNumbers) {
    read(`보너스 번호를 입력해주세요\n`, input => {
      const fullNumbers = [...winningNumbers, input];
      lottoInputCheckHandler(fullNumbers, 7);
    });
  }
  play() {
    this.inputMoneyHandler();
  }
}

const app = new App();
app.play();

module.exports = App;

const { Console } = require('@woowacourse/mission-utils');
const BonusLotto = require('./BonusLotto');
const Lotto = require('./Lotto');
const PurChase = require('./Purchase');

class App {
  constructor() {
    this.purChaseLottoAmount;
    this.fullLottoNumber;
  }

  play() {
    this.purChaseLotto();
  }

  purChaseLotto() {
    Console.readLine('구입금액을 입력해 주세요.\n', (amount) => {
      this.purChaseLottoAmount = new PurChase(amount) ? Number(amount) / 1000 : '';
      this.inputLottoNumber();
    });
  }

  inputLottoNumber() {
    Console.readLine('당첨 번호를 입력해 주세요.\n', (lottoInput) => {
      new Lotto(lottoInput);
      Console.readLine('보너스 번호를 입력해 주세요.\n', (bonusInput) => {
        this.fullLottoNumber = new BonusLotto([lottoInput.split(','), bonusInput])
          ? [lottoInput.split(','), bonusInput]
          : '';
        this.showStats();
      });
    });
  }

  showStats() {
    console.log(this.purChaseLottoAmount, this.fullLottoNumber);
  }
}

new App().play();

// module.exports = App;

const Lotto = require('./Lotto');
const LottoNumberGenerator = require('./LottoGenerator');
const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('./constants/constants');
const MessageFunc = require('./MessageFunc');

class Manager {
  constructor() {
    this.boughtLottos = [];
    this.Lotto = null;
    this.lottoResults = [];
  }

  buyLottoValidate(answer) {
    const money = Number(answer);
    if (money < 1000) {
      throw new Error(`${MESSAGE.ERROR} 로또는 1000원부터 구매가 가능합니다.`);
    }
    if (!money) {
      throw new Error(`${MESSAGE.ERROR}  숫자만 입력이 가능합니다.`);
    }
    if (money % 1000 != 0) {
      throw new Error(
        `${MESSAGE.ERROR} 로또는 1000원 단위로만 구매가 가능합니다.`
      );
    }
  }

  getResultNumberValidate(answer) {
    if (answer.split('').filter((text) => text == ',').length != 5) {
      throw new Error(
        `${MESSAGE.ERROR} 쉼표(",")로 구분하여 6개의 수를 입력하여야 합니다.`
      );
    }
  }
  getBonusNumberValidate(answer) {
    if (!(1 <= answer && answer <= 45)) {
      throw new Error(
        `${MESSAGE.ERROR} 로또 번호는 1에서 45 사이의 숫자입니다.`
      );
    }
    if (!Number(answer)) {
      throw new ERROR(
        `${MESSAGE.ERROR} 보너스 번호는 1개만 입력하여야 합니다.`
      );
    }
  }

  buyLotto() {
    Console.readLine(MESSAGE.BUYLOTTO, (answer) => {
      this.buyLottoValidate(answer);

      const generator = new LottoNumberGenerator(answer);
      this.boughtLottos = generator.createLotto();

      MessageFunc.BOUGHTLOTTO(this.boughtLottos.length, this.boughtLottos);
      return this.getResultNumber();
    });
  }

  getResultNumber() {
    Console.readLine(MESSAGE.WINNUMBER, (answer) => {
      this.getResultNumberValidate(answer);

      const lotto = new Lotto(answer.split(','));
      this.Lotto = lotto;
      return this.getBonusNumber();
    });
  }

  getBonusNumber() {
    Console.readLine(MESSAGE.BONUS, (answer) => {
      console.log('왜 안돔?');
      this.getBonusNumberValidate(answer);
      this.boughtLottos.forEach((element) => {
        const compareResult = this.Lotto.result(element, answer);
        this.lottoResults.push(compareResult);
      });
      return MessageFunc.RESULT(this.lottoResults, this.boughtLottos.length);
    });
  }
}

module.exports = Manager;

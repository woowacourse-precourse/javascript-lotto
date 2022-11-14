const { Console, Random } = require('@woowacourse/mission-utils');
const { ERROR, MESSAGE } = require('./Contants.js');

class Lotto {
  #countLotto;

  validate(price) {
    this.isNumber(price);
    this.isThousandUnit(price);
  };

  isNumber(price) {
    if(isNaN(price)) {
        throw new Error(ERROR.NOT_NUMBER_ERROR)
    }
  };

  isThousandUnit(price) {
    if(price % 1000 !== 0) {
        throw new Error(ERROR.NOT_THOUSAND_ERROR)
    }
  };

  inputMoney() {
    Console.readLine('구입금액을 입력해 주세요.\n', inputMoney => {
      this.validate(inputMoney);
      this.buyLotto(inputMoney);
    });
  }

  buyLotto(inputMoney) {
    this.#countLotto = Number(inputMoney) / 1000
    this.printCountLotto(this.#countLotto);
    this.makeLotto();
    Console.close();
  }

  printCountLotto(inputCount) {
    Console.print(`\n${inputCount}`+ MESSAGE.PRINT_COUNTLOTTO);
  }

  makeLotto() {
    for (let i = 0; i < this.#countLotto; i++) {
      let lottoNumber = this.ascendingLottoArray(this.makeRandomLottoNumber());
      this.printRandomLottoNumber(lottoNumber);
    }
  }

  makeRandomLottoNumber() {
    return Random.pickUniqueNumbersInRange(1, 45, 6);
  }

  ascendingLottoArray(lottoNumber) {
    return lottoNumber.sort((a, b) => a - b);
  }

  printRandomLottoNumber(lottoNumber) {
    return Console.print(`[${lottoNumber.join(', ')}]`);
  }

  play() {
    this.inputMoney();
  }
}

module.exports = Lotto;

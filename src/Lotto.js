const { Console, Random } = require('@woowacourse/mission-utils');
const { ERROR, MESSAGE } = require('./Contants.js');

class Lotto {
  #countLotto;

  inputMoney() {
    Console.readLine(MESSAGE.INPUT_MONEY, inputMoney => {
      this.validate(inputMoney);
      this.buyLotto(inputMoney);
    });
  }

  buyLotto(inputMoney) {
    this.#countLotto = Number(inputMoney) / 1000
    this.printCountLotto(this.#countLotto);
    this.makeLotto();
  }


  validate(price) {
    this.checkNumber(price);
    this.checkThousandUnit(price);
  };

  checkNumber(price) {
    if(isNaN(price)) {
        throw new Error(ERROR.NOT_NUMBER_ERROR)
    }
  };

  checkThousandUnit(price) {
    if(price % 1000 !== 0) {
        throw new Error(ERROR.NOT_THOUSAND_ERROR)
    }
  };


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


  inputWinningLottoNumber() {
    Console.readLine(MESSAGE.INPUT_WINNING_NUMBER+'\n', number => {this.isValidWinningLottoNumber(number);});
  }

  isValidWinningLottoNumber(number) {
    const inputValue = number.split(",")
    this.checkEachVaule(inputValue);
    this.checkOverlap(inputValue);
  }
  

  checkOverlap(inputValue) {
    if ([...new Set(inputValue)].length !== 6) {
      throw new Error(ERROR.CHECK_OVERLAP_LENGTH);
    }
  }

  checkEachVaule(inputValue) {
    inputValue.forEach((value) => {
      if (isNaN(value)) {
        throw new Error(ERROR.CHECK_NUMBER_RANGE_IS_NUMBER);
      }
      if (value < 1 || value > 45) {
        throw new Error(ERROR.CHECK_NUMBER_RANGE_IS_NUMBER);
      }
    });
  }




  play() {
    // this.inputMoney();
    this.inputWinningLottoNumber();
  }

}

module.exports = Lotto;

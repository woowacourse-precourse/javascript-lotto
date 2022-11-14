const { Console, Random } = require('@woowacourse/mission-utils');

class Lotto {
  #countLotto;

  thorwError(message) {
    throw new Error(message);
  }

  validate(inputMoney) {
    if (
      this.isBlank(inputMoney) ||
      !this.isNumber(inputMoney) ||
      !this.isThousandUnit(inputMoney)
    ) {
      return this.thorwError(
        '[ERROR] 일단은 통합한 오류 입력금액을 다시 적으세요.'
      );
    }
    return true;
  }

  isBlank(input) {
    return !input;
  }

  isNumber(input) {
    return !input.isNaN; //
  }

  isThousandUnit(input) {
    return input % 1000 === 0;
  }

  inputMoney() {
    Console.readLine('구입금액을 입력해 주세요.\n', (inputMoney) => {
      this.validate(inputMoney);
      this.#countLotto = Number(inputMoney) / 1000;
      this.printCountLotto(this.#countLotto);
      this.buyLotto();
      Console.close();
    });
  }

  printCountLotto(inputCount) {
    Console.print(`\n${inputCount}개를 구매했습니다.`);
  }

  buyLotto() {
    for(let i = 0; i < this.#countLotto; i++) {
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
    return Console.print(`[${lottoNumber.join(', ')}]`)
  }

  

  play() {
    this.inputMoney();
  }
}

module.exports = Lotto;

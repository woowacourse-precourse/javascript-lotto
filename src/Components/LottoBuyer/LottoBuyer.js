const { Console } = require('@woowacourse/mission-utils');

class LottoBuyer {
  setPromiseFunction(func) {
    return new Promise((resolve) => func(resolve));
  }

  ready() {
    return new Promise(async (resolve) => {
      await this.setPromiseFunction(this.inputMoney.bind(this));
      //   await Console.close();

      resolve(this);
    });
  }

  selectLottoNumber() {
    return new Promise(async (resolve) => {
      await this.setPromiseFunction(this.inputLottoNumbers.bind(this));
      // await this.setPromiseFunction(this.inputBonusNumber.bind(this));
      //   Console.close();

      resolve(this);
    });
  }

  inputMoney(resolve) {
    Console.readLine('구입금액을 입력해 주세요.', (amount) => {
      if (isNaN(amount)) return this.inputMoney(resolve);

      resolve(amount);
    });
  }

  inputLottoNumbers(resolve) {
    Console.readLine('당첨 번호를 입력해 주세요.', (amount) => {
      if (isNaN(amount)) return this.inputLottoNumbers(resolve);

      resolve(amount);
    });
  }

  inputBonusNumber(resolve) {
    Console.readLine('당첨11 번호를 입력해 주세요.', (amount) => {
      if (isNaN(amount)) return this.inputLottoNumbers(resolve);

      resolve(amount);
    });
  }
}

module.exports = LottoBuyer;

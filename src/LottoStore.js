const { pickUniqueNumbersInRange } = require('@woowacourse/mission-utils').Random;
const { NUMBER } = require('./Constants');


class LottoStore {
  #amount;
  #number;
  #lottoNumber = [];

  constructor(amount) {
    this.validate(amount);
    this.#amount = amount;
  }

  validate(amount) {
    if (/[^0-9]/g.test(amount)) {
        throw new Error("[ERROR] 구입금액은 숫자로만 이루어져야 합니다.")
    }

    if (amount % 1000 !== 0) {
      throw new Error("[ERROR] 구입금액은 1,000 단위여야 합니다.");
    }
  }

  getLottoAmount() {
    this.#number = this.#amount / 1000;
    return this.#number
  }

  getLottoNumber() {
    for(let index = 0; index < this.#number; index++){
      let numbers = pickUniqueNumbersInRange(1, 45, 6).sort();
      this.#lottoNumber.push(numbers);
    }    
    return this.#lottoNumber;
  }



  


}

module.exports = LottoStore;

const { NUMBER } = require('./Constant');

class LottoResult {
  #lotto;
  #bonus;
  #autoLotto;

  constructor(lotto, autoLotto) {
    this.#bonus = lotto.pop();
    this.#lotto = lotto;
    this.#autoLotto = autoLotto;
  }

  print(){
    console.log(this.#lotto.includes(lotto));
  }

  getCount(autoLotto){
    let count = 0;
    let bonus = false;

    autoLotto.map((lotto) => {
        if (this.#lotto.includes(String(lotto))){
            count += 1
        }
        if (String(lotto).includes(this.#bonus)){
            bonus = true;
        }
    });

    return { count, bonus };
  }

  getResult(){
    let result = [0, 0, 0, 0, 0];
    this.#autoLotto.map((lotto) => {
        const { count, bonus } = this.getCount(lotto);
        
        if (count === 3) result[0] += 1;
        if (count === 4) result[1] += 1;
        if (count === 5 && !bonus) result[2] += 1;
        if (count === 5 && bonus) result[3] += 1;
        if (count === 6) result[4] += 1;
    });

    return result;
  }

  getRate(result) {
    let total = 0;
    total += result[0] * NUMBER.LOTTO_FIFTH_PLACE;
    total += result[1] * NUMBER.LOTTO_FOURTH_PLACE;
    total += result[2] * NUMBER.LOTTO_THIRD_PLACE;
    total += result[3] * NUMBER.LOTTO_SECOND_PLACE;
    total += result[4] * NUMBER.LOTTO_FIRST_PLACE;

    return (total / (this.#autoLotto.length * 10)).toFixed(1); 
  }

}

module.exports = LottoResult;

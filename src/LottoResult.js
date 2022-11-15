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

}

module.exports = LottoResult;

class LottoResult {
  #lotto;
  #bonus;
  #autoLotto;

  constructor(lotto, autoLotto) {
    this.#bonus = lotto.pop();
    this.#lotto = lotto;
    this.#autoLotto = autoLotto;
  }

  getCount(autoLotto){
    let count = 0;
    let bonus = false;

    autoLotto.map((lotto) => {
        if (this.#lotto.includes(lotto)){
            count += 1
        }
        if (this.#lotto.includes(this.#bonus)){
            bonus = true;
        }
    });

    return [count, bonus];
  }

  getResult(){
    
  }



}

module.exports = LottoResult;

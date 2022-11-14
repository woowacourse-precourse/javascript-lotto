class LottoResult {
  #number;
  #bonus;
  #lottoMachine;

  constructor(winningLotto, bonusNumber, LottoMachine) {
    this.#lottoMachine = LottoMachine;
    this.#number = winningLotto;
    this.#bonus = bonusNumber;
  }

  checkWinning(lotto) {
    let equalCnt = 0;
    this.#number.forEach((number)=>{
      if(lotto.includes(number)){
        equalCnt = equalCnt + 1;
      }
    });
    return equalCnt;
  }
}

module.exports = LottoResult;
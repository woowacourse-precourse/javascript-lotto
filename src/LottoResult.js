class LottoResult {
  #number;
  #bonus;
  #lottoMachine;
  #rank;

  constructor(winningLotto, bonusNumber, LottoMachine) {
    this.#lottoMachine = LottoMachine;
    this.#number = winningLotto;
    this.#bonus = bonusNumber;
    this.#rank = Array(5).fill(0);
  }

  checkRank() {
    this.#lottoMachine.getLottoList().forEach((Lotto)=>{
      const matchCnt = this.checkWinning(Lotto.getNumbers());
      if(matchCnt === 3 || matchCnt === 4){
        this.#rank[matchCnt-3] += 1;
      }
      if(matchCnt === 5){
        this.checkBonus(Lotto.getNumbers()) ? this.#rank[matchCnt-2] += 1 : this.#rank[matchCnt-3] += 1;
      }
      if(matchCnt === 6){
        this.#rank[matchCnt-2] += 1; 
      }
    })
  }

  checkWinning(lotto) {
    let matchCnt = 0;
    this.#number.forEach((number)=>{
      if(lotto.includes(number)){
        matchCnt = matchCnt + 1;
      }
    });
    return matchCnt;
  }

  checkBonus(lotto) {
    if(lotto.includes(this.#bonus)){
      return true
    }
    return false;
  }
}

module.exports = LottoResult;
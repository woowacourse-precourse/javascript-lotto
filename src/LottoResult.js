const MissionUtils = require("@woowacourse/mission-utils");
const { WINNING_MONEY } = require("./constants");

class LottoResult {
  #number;
  #bonus;
  #lottoMachine;
  #rank;

  constructor(winningLotto, bonusNumber, LottoMachine) {
    this.#lottoMachine = LottoMachine;
    this.#number = winningLotto;
    this.#bonus = bonusNumber;
    this.#rank = {};
  }

  getRank() {
    return this.#rank;
  }

  makeResult() {
    this.#lottoMachine.getLottoList().forEach((Lotto)=>{
      const matchCnt = this.checkWinning(Lotto.getNumbers());
      if(matchCnt > 2) {
        const rank = this.checkRank(matchCnt);
        this.#rank = {...this.#rank, [rank] : this.#rank?.[rank] + 1 || 1};
      }  
    });
  }

  checkRank(matchCnt) {
    if(matchCnt === 3){
      return 'RANK_5';
    }
    if(matchCnt === 4){
      return 'RANK_4';
    }  
    if(matchCnt === 5){
      return `RANK_${this.checkBonus(Lotto.getNumbers()) ?  2 : 3}`
    }
    if(matchCnt === 6){
      return 'RANK_1';
    }
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

  haveProfitRate(purchaseMoney) {
    let winningMoney = 0;
    Object.keys(this.#rank).forEach((rank) => {
      winningMoney += WINNING_MONEY[rank];
    })
    return ((winningMoney/purchaseMoney) * 100).toFixed(1);
  }
}

module.exports = LottoResult;
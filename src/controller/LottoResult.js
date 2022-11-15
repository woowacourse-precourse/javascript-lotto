const { WINNING_MONEY } = require("../constants");
class LottoResult {
  #lottoList;
  #winningNumbers;
  #bonusNumber;
  #rankInfo

  constructor(numbers, bonus, lottoList) {
    this.#lottoList = lottoList;
    this.#winningNumbers = numbers;
    this.#bonusNumber = bonus;
  }

  makeResult() {
    let rankInfo = {};
    this.#lottoList.forEach((Lotto)=>{
      const matchCnt = this.checkWinning(Lotto.getNumbers());
      if(matchCnt > 2) {
        const rank = this.checkRank(matchCnt);
        rankInfo = {...rankInfo, [rank] : rankInfo?.[rank] + 1 || 1};
      }  
    });
    this.#rankInfo = rankInfo;
    return rankInfo;
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
    this.#winningNumbers.forEach((number)=>{
      if(lotto.includes(number)){
        matchCnt = matchCnt + 1;
      }
    });
    return matchCnt;
  }

  checkBonus(lotto) {
    if(lotto.includes(this.#bonusNumber)){
      return true
    }
    return false;
  }

  haveProfitRate(purchaseMoney) {
    let winningMoney = 0;
    Object.keys(this.#rankInfo).forEach((rank) => {
      winningMoney += WINNING_MONEY[rank];
    })
    return ((winningMoney/purchaseMoney) * 100).toFixed(1);
  }
}

module.exports = LottoResult;

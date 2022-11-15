const { WINNING_MONEY, ERROR_MESSAGE } = require("./constants");

class LottoResult {
  #number;
  #bonus;
  #lottoMachine;
  #rank;

  constructor(winningLotto, bonusNumber, LottoMachine) {
    this.validate(winningLotto,bonusNumber);
    this.#lottoMachine = LottoMachine;
    this.#number = winningLotto;
    this.#bonus = bonusNumber;
    this.#rank = {};
  }

  getRank() {
    return this.#rank;
  }

  validate(winningLotto, bonusNumber) {
    this.validateBonusNumberDuplication(winningLotto,bonusNumber);
    this.validateBonusNumberIsNaN(bonusNumber);
    this.validateBonusNumberRange(bonusNumber);
    this.validateWinningLottoDuplication(winningLotto);
    this.validateWinningLottoIsNaN(winningLotto);
    this.validateWinningLottoRange(winningLotto);
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

  validateWinningLottoDuplication(winningLotto) {
    const winningLottoSet = new Set(winningLotto);
    if(winningLottoSet.size !== 6){
      throw ERROR_MESSAGE.WINNING_LOTTO_DUPLICATION_ERROR;
    }
  }
  
  validateBonusNumberDuplication(winningLotto, bonusNumber) {
    if(winningLotto.includes(bonusNumber)){
      throw ERROR_MESSAGE.BONUS_NUMBER_DUPLICATION_ERROR;
    }
  }

  validateWinningLottoRange(winningLotto) {
    winningLotto.forEach((number)=>{
      if(number < 1 || number > 45){
        throw ERROR_MESSAGE.NUMBER_RANGE_ERROR;
      }
    });
  }

  validateBonusNumberRange(bonusNumber) {
    if(bonusNumber < 1 || bonusNumber > 45){
      throw ERROR_MESSAGE.NUMBER_RANGE_ERROR;
    }
  }
  
  validateWinningLottoIsNaN(winningLotto) {
    winningLotto.forEach((number)=>{
      if(isNaN(number)){
        throw ERROR_MESSAGE.NUMBER_IS_NAN_ERROR;
      }
    });
  }
  
  validateBonusNumberIsNaN(bonusNumber) {
    if(isNaN(bonusNumber)){
      throw ERROR_MESSAGE.NUMBER_IS_NAN_ERROR;
    }
  }
}

module.exports = LottoResult;

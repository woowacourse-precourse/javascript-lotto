const {Console}  = require("@woowacourse/mission-utils");

class LottoResult {
  #rank1;
  #rank2;
  #rank3;
  #rank4;
  #rank5;
  #totalMoney;
  
  constructor() {
    this.#rank1 = 0;
    this.#rank2 = 0;
    this.#rank3 = 0;
    this.#rank4 = 0;
    this.#rank5 = 0;
    this.#totalMoney = 0;
  }

  /** 7. 당첨결과 몇개가 일치했는지 비교 */
  compareLotto(lottoArr, winningNumber) {
    var winningNumbers = winningNumber.winningNumbers;
    lottoArr.forEach(lotto => {
      var lottoNumbers = lotto.numbers;
      var matchArr = lottoNumbers.filter(number => winningNumbers.includes(number));
      var isBonus = lottoNumbers.includes(Number(winningNumber.bonusNumber));
      this.setResult(matchArr.length, isBonus);
    });
  }

  setResult(count, isBonus) {
    switch(count) {
      case 3:
        this.#rank5++;
        this.#totalMoney += 5000;
        break;
      case 4:
        this.#rank4++;
        this.#totalMoney += 50000;
        break;
      case 5:
        this.#rank3++;
        this.#totalMoney += 1500000;
        break;
      case 6:
        this.#rank1++;
        this.#totalMoney += 2000000000;
        break;
    }
    if(isBonus = true && count === 5) {
      this.#rank2++;
      this.#totalMoney +=30000000;
    }
  }

}

module.exports = LottoResult;

const {Console}  = require("@woowacourse/mission-utils");
const { WINNING_PRICE } = require("./Constant");


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
        this.#totalMoney += WINNING_PRICE.RANK5;
        break;
      case 4:
        this.#rank4++;
        this.#totalMoney += WINNING_PRICE.RANK4;
        break;
      case 5:
        this.#rank3++;
        this.#totalMoney += WINNING_PRICE.RANK3;
        break;
      case 6:
        this.#rank1++;
        this.#totalMoney += WINNING_PRICE.RANK2;
        break;
    }
    if(isBonus = true && count === 5) {
      this.#rank2++;
      this.#totalMoney += WINNING_PRICE.RANK1;
    }
  }

  /** 8. 수익률 및 통계값 계산 */
  printResult(amount) {
    Console.print('');
    Console.print('당첨 통계 \n---');
    Console.print(`3개 일치 (${this.convertKr(WINNING_PRICE.RANK5)}원) - ${this.#rank5}개`);
    Console.print(`4개 일치 (${this.convertKr(WINNING_PRICE.RANK4)}원) - ${this.#rank4}개`);
    Console.print(`5개 일치 (${this.convertKr(WINNING_PRICE.RANK3)}원) - ${this.#rank3}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (${this.convertKr(WINNING_PRICE.RANK2)}원) - ${this.#rank2}개`);
    Console.print(`6개 일치 (${this.convertKr(WINNING_PRICE.RANK1)}원) - ${this.#rank1}개`);
    this.printRate(amount);
  }

  convertKr(price) {
    return price.toLocaleString('ko-KR');
  }
  
  printRate(amount) {
    var rate = this.calculate(amount);
    Console.print(`총 수익률은 ${rate}%입니다.`);
  }

  /** 수익률 계산 */
  calculate(amount) {
    return (this.#totalMoney / amount * 100).toFixed(1);
  }

}

module.exports = LottoResult;

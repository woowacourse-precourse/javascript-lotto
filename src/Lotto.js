class Lotto {
  #numbers;
  constructor(numbersArr) {
    this.#numbers = numbersArr;
    this.matchingResult = {};
    this.prizeResult = {};
    this.isValidLotto();
  }
  matching(lottoArr, bonusNumber) {
    let numbersMatching = 12 - new Set(this.#numbers.concat(lottoArr)).size;
    let bonusCheck = this.#numbers.filter(x => x === bonusNumber).length;
    let bonusMatching = false;
    if (bonusCheck === 1) {
      bonusMatching = true;
    }
    this.matchingResult.numbersMatching = numbersMatching;
    this.matchingResult.bonusMatching = bonusMatching;
  }
  prize() {
    let matchings = this.matchingResult.numbersMatching;
    let bonus = this.matchingResult.bonusMatching;
    if (matchings < 3) {
      this.prizeResult.money = 0;
      this.prizeResult.text = '3개 미만 일치 (0원)';
    }
    if (matchings === 3) {
      this.prizeResult.money = 5000;
      this.prizeResult.text = '3개 일치 (5,000원)';
    }
    if (matchings === 4) {
      this.prizeResult.money = 50000;
      this.prizeResult.text = '4개 일치 (50,000원)';
    }
    if (matchings === 5) {
      this.prizeResult.money = 1500000;
      this.prizeResult.text = '5개 일치 (1,500,000원)';
    }
    if (matchings === 5 && bonus) {
      this.prizeResult.money = 30000000;
      this.prizeResult.text = '5개 일치, 보너스 볼 일치 (30,000,000원)';
    }
    if (matchings === 6) {
      this.prizeResult.money = 2000000000;
      this.prizeResult.text = '6개 일치 (2,000,000,000원)';
    }
  }

  isValidLotto() {
    if (this.#numbers.includes(0)) throw new Error("[ERROR] 0 또는 공백이 포함되어 있습니다.")
    if (this.#numbers.filter(x => x < 1 && x > 45).length !== 0) throw new Error("[ERROR] 1~45 사이의 정수만 입력가능합니다.");
    if (this.#numbers.length !== 6) throw new Error("[ERROR] 6개의 숫자가 필요합니다.");
    if (new Set(this.#numbers).size !== 6) throw new Error("[ERROR] 서로 중복되지 않는 숫자들만 입력 가능합니다.");
    return true;
  }

}

module.exports = Lotto;
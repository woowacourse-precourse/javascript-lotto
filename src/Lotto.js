class Lotto {
  #numbers;

  constructor(numbers, lottoCount) {
    this.validateLotto(numbers);
    this.validateCount(lottoCount)
    this.#numbers = numbers;
  }

  validateLotto(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }

    const numberSet = new Set(numbers);
    if(numberSet.size < numbers.length) throw new Error("[ERROR] 중복된 숫자가 있습니다.");
  }

  validateCount(lottoCount) {
    if(lottoCount % 1 !== 0) throw new Error("[ERROR] 정수만 입력해주세요.");
    if(lottoCount / 1000 !== 0) throw new Error("[ERROR] 1,000원 단위로 입력해주세요.");
  }

}

module.exports = Lotto;

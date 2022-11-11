class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    if (!this.checkDuplicateNumber(numbers)) {
      throw new Error("[ERROR] 로또 번호는 중복이 없어야 합니다.");
    }
  }
  duplicateNumber(lottoNumberArr) {
    let notDuplicateArr = [];
    for (let i = 0; i < lottoNumberArr.length; i++) {
      if (notDuplicateArr.indexOf(lottoNumberArr[i]) === -1)
        notDuplicateArr.push(lottoNumberArr[i]);
      else return false;
    }
    return true;
  }
  // TODO: 추가 기능 구현
}

module.exports = Lotto;

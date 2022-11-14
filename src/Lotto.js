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
    numbers.forEach(x => {
      if (x < 1 || x > 45) throw new Error("[ERROR] 로또 번호는 0보다 크고 46보다 작아야 합니다.");
    })
    let set = new Set(numbers);
    if (set.size !== 6) throw new Error("[ERROR] 로또 번호는 중복되지 않아야 합니다.")
  }

  userLottoWinningLottoCompare(winningLottoArr) {
    let set = new Set(this.#numbers);
    winningLottoArr[0].forEach(x => set.add(x))
    return this.setSizeCount(set, winningLottoArr[1]) //set.size를 통해 중복번호 확인하기
  }

}

module.exports = Lotto;
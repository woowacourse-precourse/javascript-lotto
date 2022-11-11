class CorrectLotto {
  #lottoArr = [];
  #answer;
  #bonus;
  #correctArr = [];
  constructor(lottoArr = [], answer, bonus) {
    this.#lottoArr = lottoArr;
    this.#answer = answer;
    this.#bonus = bonus;
  }
  //몇개의 숫자가 같은지 알 수 있다.
  haveCorrect() {
    this.#correctArr = [];
    this.#lottoArr.forEach((arr) => {
      this.#correctArr.push(
        arr.reduce(
          (count, element) =>
            this.#answer.includes(element) ? (count += 1) : count,
          0
        )
      );
    });
    return this.#correctArr; // ex [0, 2, 0, 1, 0, 0, 1, 3]
  }
  haveBonus() {
    this.haveCorrect();
    let bonusArr = [];
    if (this.#correctArr.includes(5))
      bonusArr = this.#lottoArr[this.#correctArr.indexOf(5)];
    return bonusArr.includes(Number(this.#bonus));
  }
}
module.exports = CorrectLotto;

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다");
    }
    if(new Set(numbers).size!==6){
      throw new Error("[ERROR] 로또 번호는 중복되지 않는 숫자여야 합니다.");
    }
  }
  // TODO: 추가 기능 구현
  printList() {
    return "[" + this.#numbers.join(", ") + "]";
}
  check(arr) {
    let score = 0;
    for(var i in this.#numbers){
      score+= arr[this.#numbers[i]];
    }
    if (score < 6) return 0;
    if (score < 8) return 1;
    if (score < 10) return 2;
    if (score < 11) return 3;
    if (score < 12) return 4;
    return 5;
}
}

module.exports = Lotto;

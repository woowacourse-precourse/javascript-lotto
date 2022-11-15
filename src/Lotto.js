
//로또 당첨 번호 확인 및 에러 검수 하는 용도
class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) { //로또 번호 예외 처리 함수 
    const setCollection = new Set(numbers);
    const isDuplicate = setCollection.size < numbers.length;
    let rangeNum;

    if (numbers.length !== 6) throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    if (isDuplicate) throw new Error("[ERROR] 로또 번호는 중복되지 않은 숫자여야 합니다.");
    if (rangeNum = numbers.filter((item) => item < 0 || item > 45).length > 0) throw new Error("[ERROR] 로또 번호는 1부터 45까지의 숫자여야 합니다.");
  }

  // TODO: 추가 기능 구현

}

module.exports = Lotto;

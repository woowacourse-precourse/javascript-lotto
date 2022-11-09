class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  /**
   * TODO: 추가 기능 구현
   * 1. 당첨 내역
   * 2. 수익률
   * 3. 1부터 45의 숫자가 아닌 경우 예외 처리
   * 4. 로또 발행 및 오름차순 정렬하여 번호와 수량 반환
   */

  get numbers() {
    return this.#numbers;
  }
}

module.exports = Lotto;

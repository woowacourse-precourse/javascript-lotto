class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    // 개수가 올바르지 않은 경우 에러 처리
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    // 중복된 숫자가 있는 경우 에러 처리
    if ([...new Set(numbers)].length < 6) {
      throw new Error("[ERROR] 로또 번호는 중복되지 않아야 합니다.");
    }
    // 숫자가 아닌 경우 에러 처리
    if (isNaN(numbers.join(""))) {
      throw new Error("[ERROR] 로또 번호는 숫자만 입력되어야 합니다.");
    }
    // 숫자가 범위를 벗어난 경우 에러 처리
    numbers.forEach((number) => {
      if (number < 1 || number > 45) {
        throw new Error("[ERROR] 로또 번호는 1부터 45까지의 숫자입니다.");
      }
    });
  }
}
module.exports = Lotto;

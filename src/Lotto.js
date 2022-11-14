class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    this.checkNumber(numbers);
    this.checkCountNumber(numbers);
  }

  checkNumber(numbers) {
    const START_LOTTO_NUMBER = 1;
    const END_LOTTO_NUMBER = 45;
    numbers.map((number, index) => {
      if (
        !(parseInt(number) >= START_LOTTO_NUMBER) ||
        !(parseInt(number) <= END_LOTTO_NUMBER)
      ) {
        throw new Error(
          `[ERROR] 당첨 번호는 ${START_LOTTO_NUMBER}부터 ${END_LOTTO_NUMBER}까지의 숫자여야 합니다.`
        );
      }
    });
  }
  checkCountNumber(numbers) {
    const NUMBER_LENGTH = 6;
    if (numbers.length !== NUMBER_LENGTH) {
      throw new Error(`[ERROR] 당첨 번호는 ${NUMBER_LENGTH}개여야 합니다.`);
    }
  }
}
module.exports = Lotto;

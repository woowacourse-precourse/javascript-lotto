class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6)
      throw new Error(
        "[ERROR] 로또 번호는 6개를 쉼표(,)로 구분하여 정확하게 입력해 주세요."
      );
    if (numbers.filter((number) => isNaN(number)).length > 0)
      throw new Error("[ERROR] 숫자를 입력하세요.");
    if (
      numbers.filter(
        (number) => numbers.indexOf(number, numbers.indexOf(number) + 1) !== -1
      ).length > 0
    )
      throw new Error("[ERROR] 중복되지 않는 숫자를 입력하세요.");
    if (numbers.filter((number) => number < 1 || number > 45).length > 0)
      throw new Error("[ERROR] 1부터 45까지 숫자 중 입력하세요.");
    if (numbers.filter((number) => !Number.isInteger(number)).length > 0)
      throw new Error("[ERROR] 정수를 입력하세요.");
  }
}
module.exports = Lotto;

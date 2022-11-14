class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] ','로 구분해서 입력해주세요.");
    }
    let uniqueNumbers = new Set(numbers);
    if ([...uniqueNumbers].length !== 6) {
      throw new Error("[ERROR] 로또 번호에 중복이 존재합니다.");
    }
    numbers.forEach((number) => {
      if (isNaN(number)) {
        throw new Error("[ERROR] 숫자 6개를 입력해주세요.");
      }
      number = Number(number);
      if (number > 45 || number < 1) {
        throw new Error("[ERROR] 1~45 사이의 숫자를 입력해주세요.");
      }
    });
  }
}

export default Lotto;

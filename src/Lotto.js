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
    //객체 Set을 통해서 중복된 원소 제거 가능
    if (new Set(numbers).size !== numbers.length)
      throw '[ERROR] 중복된 번호가 있습니다.';

    numbers.forEach((number) => {
      if (number > 45 || number < 1)
        throw '[ERROR] 1~45 사이에 숫자만 뽑을 수 있습니다.';
      if (isNaN(number)) throw '[ERROR] 숫자를 입력하세요.';
    });
  }
}

module.exports = Lotto;

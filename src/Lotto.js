class Lotto {
  #numbers;
  #bonus;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
    this.#bonus = 0;
  }

  validate(numbers) {
    const numberRange = numbers.map((number) => number >= 1 && number <= 45);
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    if (numbers.length !== new Set(numbers).size) {
      throw new Error('[ERROR] 중복된 숫자는 입력할 수 없습니다.');
    }
    if (numberRange.includes(false)) {
      throw new Error('[ERROR] 숫자의 범위는 1부터 45까지 입력할 수 있습니다.');
    }
  }

  validateBonus(number) {
    this.#bonus = number;
    if (this.#numbers.includes(number)) {
      throw new Error('[ERROR] 보너스 번호는 중복될 수 없습니다.');
    }
  }
  // #numbers;
  // #bonus;
  // #lottos;
  // #userPay;
  //
  // constructor(numbers, lottos, userPay) {
  //   this.#numbers = numbers;
  //   this.#lottos = lottos;
  //   this.#userPay = userPay;
  //   this.validate(numbers);
  // }
  //
  // validate(numbers) {
  //   this.#numbers = numbers.split(',');
  //   numbers = this.#numbers.map((number) => Number(number));
  //   const numberRange = numbers.map((number) => number >= 1 && number <= 45);
  //   console.log(numbers);
  //   if (numbers.length !== 6) {
  //     throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
  //   }
  //   if (numbers.length !== new Set(numbers).size) {
  //     throw new Error('[ERROR] 중복된 숫자는 입력할 수 없습니다.');
  //   }
  //   if (numberRange.includes(false)) {
  //     throw new Error('[ERROR] 숫자의 범위는 1부터 45까지 입력할 수 있습니다.');
  //   }
  // }
  //
  // validateBonus(number) {
  //   console.log(number);
  //   this.#bonus = number;
  //   if (this.#numbers.includes(number)) {
  //     throw new Error('[ERROR] 보너스 번호는 중복될 수 없습니다.');
  //   }
  //   this.winning();
  // }
  //
  // winning() {
  //   this.winning = new Winning(this.#lottos, this.#numbers, this.#bonus, this.#userPay);
  // }
  // TODO: 추가 기능 구현
}

module.exports = Lotto;

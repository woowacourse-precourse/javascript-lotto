class Lotto {
  #numbers;
  constructor(numbers) {
    this.validate(numbers);
    this.overlap(numbers);
    this.rangeCheck(numbers);
    this.letterCheck(numbers);
    this.#numbers = numbers;
  };

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    };
  };

  overlap(numbers) {
    this.#numbers = new Set(numbers);
    if (this.#numbers.size !== numbers.length) {
      throw new Error("[ERROR] 로또 번호는 중복이 없습니다.");
    };
  };

  rangeCheck(numbers) {
    for(let index = 0 ;index<numbers.length;index++){
      if(!(numbers[index]>=1 && numbers[index]<=45)){
        throw new Error("[ERROR] 로또 번호는 숫자는 1~45 까지 입니다.");
      };
    };
  };
  letterCheck(numbers) {
    this.#numbers = String(numbers).replace(/[^0-9]/g, '');
    if (this.#numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 숫자만 입력해야 합니다.");
    };
  };
  // TODO: 추가 기능 구현
};

module.exports = Lotto;
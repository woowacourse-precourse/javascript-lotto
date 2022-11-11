class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
    this.validate(numbers);
  };
  validate(winning) {
    this.lengthCheck(winning);
    this.overlapCheck(winning);
    this.rangeCheck(winning);
    this.letterCheck(winning);
  };
  lengthCheck(winning) {
    if (winning.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    };
  };
  overlapCheck(winning) {
    const setWinning = new Set(this.#numbers);
    if (setWinning.size !== winning.length) {
      throw new Error("[ERROR] 로또 번호는 중복이 없습니다.");
    };
  };
  rangeCheck(winning) {
    for (let index = 0; index < winning.length; index++) {
      if (!(winning[index] >= 1 && winning[index] <= 45)) {
        throw new Error("[ERROR] 로또 번호는 숫자는 1~45 까지 입니다.");
      };
    };
  };
  letterCheck(winning) {
    const regex = /[^0-9]/g;
    const result = String(this.#numbers).replace(regex, '');
    if (result.length !== winning.join("").length) {
      throw new Error("[ERROR] 로또 번호는 숫자만 입력해야 합니다.");
    };
  };

  // TODO: 추가 기능 구현
};

module.exports = Lotto;
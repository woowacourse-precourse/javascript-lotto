class Winning {
  #Winning;
  constructor(inputNumber) {
    this.validate(inputNumber);
    this.#Winning = inputNumber;
  }
  validate(inputNumber) {
    const splitInputNumber = inputNumber.split(",");
    if (!splitInputNumber.every((num) => !isNaN(num))) {
      throw new Error("[ERROR] 숫자를 입력해주세요.");
    }
    if (splitInputNumber.length !== 6) {
      throw new Error("[ERROR] 6개를 입력하지 않았습니다.");
    }
    if (new Set(splitInputNumber).size !== 6) {
      throw new Error("[ERROR] 중복된 데이터가 있습니다.");
    }
  }
}

module.exports = Winning;

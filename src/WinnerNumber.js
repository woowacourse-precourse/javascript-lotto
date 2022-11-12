class WinnerNumber {
  constructor(number) {
    this.number = number;
    this.numberWithoutSpace = this.getNumberWithoutSpace();
    this.validateRange();
  }

  getNumberWithoutSpace() {
    return this.number.replace(/\s/g, "").split(",");
  }

  validateRange() {
    this.validateFromOneToFourtyFiveNumber();
    this.validateSixNumberByComma();
    this.validateNumberWithoutDuplicate();
  }

  validateFromOneToFourtyFiveNumber() {
    this.numberWithoutSpace.map((number) => {
      if (number < 1 || number > 45 || !new RegExp("^[0-9]+$").test(number)) {
        throw new Error("[ERROR] 쉼표(,)를 기준으로 1부터 45까지의 숫자만 입력 해주세요");
      }
    });
  }

  validateSixNumberByComma() {
    if (this.number.split(",").length !== 6) {
      throw new Error("[ERROR] 쉼표(,)를 기준으로 6자리를 입력해주세요");
    }
  }

  validateNumberWithoutDuplicate() {
    if (new Set(this.numberWithoutSpace).size !== 6) {
      throw new Error("[ERROR] 중복없이 숫자를 입력해주세요.");
    }
  }
}

module.exports = WinnerNumber;

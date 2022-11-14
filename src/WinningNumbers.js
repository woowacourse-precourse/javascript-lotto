const validation = require("./errors/checkValidation");

class WinningNumbers {
  constructor(numbers) {
    validation.checkLottoList(numbers);
    this.value = numbers;
  }
}

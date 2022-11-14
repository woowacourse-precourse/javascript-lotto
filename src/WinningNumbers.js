class WinningNumbers {
  constructor(numbers) {
    validation.checkLottoList(numbers);
    this.value = numbers;
  }
}
module.exports = WinningNumbers;

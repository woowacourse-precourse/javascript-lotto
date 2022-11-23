const Validate = {
  isNumber(num, errorText) {
    if (!Number(num)) throw new Error(errorText);
  },
  isArray(numbers, errorText) {
    if (!Array.isArray(numbers)) throw new Error(errorText);
  },
  isSixNumbers(numbers, errorText) {
    if (numbers.length !== 6) throw new Error(errorText);
  },
  isLotteryNumber(num, errorText) {
    if (num < 1 || num > 45) throw new Error(errorText);
  },
  isDuplicated(numbers, errorText) {
    if ([...new Set(numbers)].length !== 6) throw new Error(errorText);
  },
  isDividedByThousand(num, errorText) {
    if (parseInt(num) % 1000 !== 0) throw new Error(errorText);
  },
  lotteryNumbers(numbers) {
    this.isArray(numbers, '[ERROR] 배열이 아닙니다.');
    this.isSixNumbers(numbers, '[ERROR] 당첨번호는 6개여야 합니다.');
    numbers.forEach((num) => this.isNumber(num, '[ERROR] 당첨번호는 숫자여야 합니다.'));
    numbers.forEach((num) =>
      this.isLotteryNumber(num, '[ERROR] 당첨번호는 1에서 45사이어야 합니다.'),
    );
    this.isDuplicated(numbers, '[ERROR] 당첨번호가 중복되면 안됩니다.');
  },
  bonusNumber(num, winningLotteryNumbers) {
    this.isNumber(num, '[ERROR] 보너스 번호는 숫자여야 합니다.');
    if (winningLotteryNumbers.includes(num)) {
      throw new Error('[ERROR] 당첨번호와 중복되면 안됩니다.');
    }
    this.isLotteryNumber(num, '[ERROR] 보너스 번호는 1에서 45사이어야 합니다.');
  },
  lotto(numbers) {
    this.isSixNumbers(numbers, '[ERROR] 로또 번호는 6개여야 합니다.');
    this.isArray(numbers, '[ERROR] 배열이 아닙니다.');
    this.isDuplicated(numbers, '[ERROR] 로또 번호가 중복되면 안됩니다.');
  },
  price(price) {
    this.isNumber(price, '[ERROR] 구입금액은 숫자여야 합니다.');
    this.isDividedByThousand(price, '[ERROR] 구입금액은 1,000원 단위로 입력하셔야 합니다.');
  },
};
module.exports = Validate;

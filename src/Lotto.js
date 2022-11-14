// 당첨번호를 입력받고, 비교
class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (isNaN(numbers)) {
      throw new Error("[ERROR] 로또 번호는 숫자여야 합니다.");
    }
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    if (
      numbers.filter((number) => number >= 1 && number <= 45) !== numbers.length
    ) {
      throw new Error("[ERROR] 로또 번호는 1~45범위 내의 숫자여야 합니다.");
    }
    const overlap = new Set(numbers);
    if (overlap.size !== 0) {
      throw new Error("[ERROR] 로또 번호는 중복되지 않아야 합니다.");
    }
  }

  // 일치 갯수 반환
  matchLotto(lottosNumbers, winningNumber, bonusNumber) {
    let matchingCountArr = [];
    let bonusMatch = [];
    for (let i = 0; i < lottosNumbers.length; i++) {
      const lottoPiece = lottosNumbers[i];
      const matchingNumber = winningNumber.filter((num) =>
        lottoPiece.includes(num)
      );
      if (
        matchingNumber.length === 5 &&
        lottosNumbers[i].includes(bonusNumber)
      ) {
        bonusMatch.push(bonusNumber);
      } else {
        matchingCountArr.push(matchingNumber.length);
      }
    }
    return [matchingCountArr, bonusMatch];
  }
}

module.exports = Lotto;

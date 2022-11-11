class Checker {
  constructor() {}

  isCorrectMoney(money) {
    if (money % 1000 !== 0) {
      throw "[ERROR] 입력값이 1000원 단위가 아닙니다.";
    }
    if (isNaN(Number(money))) {
      throw "[ERROR] 입력값이 숫자가 아닙니다.";
    }
  }

  isOverlapping(numbers) {
    for (let i = 0; i < numbers.length; i++) {
      const copy = numbers.concat();
      const indicator = copy.splice(i, 1);

      if (copy.includes(indicator[0])) {
        throw "[ERROR] 중복되는 숫자를 입력 하셨습니다.";
      }
    }
  }

  isRightRangeNumber(numbers) {
    numbers.forEach((eachNumber) => {
      if (eachNumber < 1 || eachNumber > 45) {
        throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
      }
    });
  }
}

module.exports = Checker;

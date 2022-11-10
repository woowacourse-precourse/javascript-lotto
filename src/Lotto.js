class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers; //Lotto.number를 써야한다는말!
  }

  validateMoney(numbers) {
    if (numbers % 1000 !== 0) {
      throw new Error(`[ERROR] 돈은 1000원 단위로 입력이 가능합니다.`);
    }
    if (numbers <= 0) {
      throw new Error(`[ERROR] 돈은 1000원부터 입력이 가능합니다.`);
    }
  }

  validateWinningNum(winningNum) {
    this.#numbers = winningNum;
    if (this.checkRange(winningNum) === false) {
      throw new Error(`[ERROR] 0은 입력이 불가능합니다.`);
    }

    if (this.checkComma(winningNum) === false) {
      throw new Error(`[ERROR] ,이 연속으로 입력되었습니다.`);
    }

    if (this.checkNumLength(winningNum) === false) {
      throw new Error(`[ERROR] 당첨 번호는 1~45 사이에 있습니다.`);
    }
    if (this.checkCount(winningNum) === false) {
      throw new Error(`[ERROR] 당첨 번호는 6개만 입력이 가능합니다.`);
    }
    if (this.checkDuplication(winningNum) === false) {
      throw new Error(`[ERROR] 당첨 번호에 중복이 있을 수 없습니다.`);
    }
  }

  checkRange(arr) {
    if (/^[0-9]*$/g.test(arr.join("")) === false) {
      return false;
    }
  }
  checkComma(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === ``) {
        return false;
      }
    }
  }

  checkNumLength(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 45 || arr[i] < 1) {
        return false;
      }
    }
  }

  checkCount(arr) {
    if (arr.length !== 6) {
      return false;
    }
  }

  checkDuplication(arr) {
    let checkarr = [];
    for (let i = 0; i < arr.length; i++) {
      if (checkarr.includes(arr[i])) {
        return false;
      }
      checkarr.push(arr[i]);
    }
  }
}
module.exports = Lotto;

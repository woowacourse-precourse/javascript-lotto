function checkRange(arr) {
  if (/^[0-9]*$/g.test(arr.join("")) === false) {
    return false;
  }
}
function checkComma(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === ``) {
      return false;
    }
  }
}

function checkNumLength(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 45 || arr[i] < 1) {
      return false;
    }
  }
}

function checkCount(arr) {
  if (arr.length !== 6) {
    return false;
  }
}

function checkDuplication(arr) {
  let checkarr = [];
  for (let i = 0; i < arr.length; i++) {
    if (checkarr.includes(arr[i])) {
      return false;
    }
    checkarr.push(arr[i]);
  }
}

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers; //Lotto.number를 써야한다는말!
  }

  validateMoney(numbers) {
    this.#numbers = numbers;
    if (this.#numbers % 1000 !== 0) {
      throw new Error(`[ERROR] 돈은 1000원 단위로 입력이 가능합니다.`);
    }
    if (this.#numbers <= 0) {
      throw new Error(`[ERROR] 돈은 1000원부터 입력이 가능합니다.`);
    }
  }

  validateWinningNum(winningNum) {
    this.#numbers = winningNum;
    if (checkRange(this.#numbers) === false) {
      throw new Error(`[ERROR] 0은 입력이 불가능합니다.`);
    }

    if (checkComma(this.#numbers) === false) {
      throw new Error(`[ERROR] ,이 연속으로 입력되었습니다.`);
    }

    if (checkNumLength(this.#numbers) === false) {
      throw new Error(`[ERROR] 당첨 번호는 1~45 사이에 있습니다.`);
    }
    if (checkCount(this.#numbers) === false) {
      throw new Error(`[ERROR] 당첨 번호는 6개만 입력이 가능합니다.`);
    }
    if (checkDuplication(this.#numbers) === false) {
      throw new Error(`[ERROR] 당첨 번호에 중복이 있을 수 없습니다.`);
    }
  }

  validateBonusNum(bonuseNum, winningNum) {
    this.#numbers = bonuseNum;
    if (this.#numbers > 45 || this.#numbers < 1) {
      throw new Error(`[ERROR] 1~45사이의 번호를 입력해주세요`);
    }
    if (this.#numbers) {
      if (/^[0-9]*$/g.test(this.#numbers) === false) {
        throw new Error(`[ERROR] 숫자만을 입력해주세요`);
      }
    }
    if (winningNum.includes(this.#numbers) === true) {
      throw new Error(
        `[ERROR] 당첨번호에 입력한 숫자를 보너스 번호에 입력할 수 없습니다.`
      );
    }
  }
}
module.exports = Lotto;

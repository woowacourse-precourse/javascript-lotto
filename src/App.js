const { Random, Console } = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");

class App {
  play() {
    const [amount, money] = createUserInput();
    validateInputMoney(money);
    const userLotto = createUserLotto(amount);
    const [winningNumbers, bonusNumber] = createLottoNumber();
    validateLottoNumber(winningNumbers, bonusNumber);
    const result = calculateLottoResult(userLotto, winningNumbers, bonusNumber);
    const LottoResult = createLottoResult(result);

  }
}

function createUserInput() {
  let money = 0;
  let amount = 0;
  Console.readLine("구입금액을 입력해 주세요.", (num) => {
    money = num;
    amount = num / 1000;
  });
  return [amount, money];
}

function validateInputMoney(money) {
  if (money % 1000 != 0) {
    throw new Error("[ERROR] 1000원으로 나누어 떨어지는 금액을 입력하세요.");
  }
  if (money < 1000) {
    throw new Error("[ERROR] 1000원이상의 금액을 입력하세요.");
  }
}

function createUserLotto(amount) {
  const lottoArr = [];
  for (let i = 0; i < amount; i++) {
    const lotto = Random.pickUniqueNumbersInRange(1, 45, 6);
    lotto.sort((a, b) => a - b);
    lottoArr.push(lotto);
  }
  Console.print(`${amount}개를 구매했습니다.`);
  lottoArr.forEach((i) => {
    Console.print(`[${i.join(", ")}]`);
  });
  return lottoArr;
}

function createLottoNumber() {
  let winningNumbers;
  let bonusNumber;
  Console.readLine("당첨 번호를 입력해주세요.", (numbers) => {
    winningNumbers = numbers.split(",").map(Number);
    this.lotto = new Lotto(winningNumbers);
    Console.readLine("보너스 번호를 입력해주세요.", (number) => {
      bonusNumber = number;
      // this.lotto.setBonusNumber(bonusNumber);
    });
  });
  return [winningNumbers, bonusNumber];
}

function validateLottoNumber(winningNumbers, bonusNumber) {
  winningNumbers.forEach((i) => {
    if (i > 45 || i < 1) {
      throw new Error("[ERROR] 1~45 사이의 숫자를 입력하세요.");
    }

    if (i == bonusNumber) {
      throw new Error("[ERROR] 중복되지 않는 숫자를 입력하세요.");
    }
  });

  const checkDup = new Set(winningNumbers);
  const checkDupArr = [...checkDup];
  if (checkDupArr.length != winningNumbers.length) {
    throw new Error("[ERROR] 중복되지 않는 숫자를 입력하세요.");
  }
}

function calculateLottoResult(userLotto, winningNumbers, bonusNumber) {
  const result = [];
  userLotto.forEach((numbers) => {
    let count = 0;
    let bonusRight = false;
    numbers.forEach((i) => {
      if (winningNumbers.includes(i)) {
        count++;
      }
      if (bonusNumber === i) {
        bonusRight = true;
      }
    });
    result.push({ countResult: count, bonusResult: bonusRight });
  });

  return result;
}

function createLottoResult(result) {
  let LottoResult = {
    matchThree: 0,
    matchFour: 0,
    matchFive: 0,
    matchFiveAndBous: 0,
    matchSix: 0,
  }
  result.forEach((v) => {
    if (v.countResult === 3) {
      LottoResult.matchThree++;
    }
    if (v.countResult === 4) {
      LottoResult.matchFour++;
    }
    if (v.countResult === 5 && bonusResult == false) {
      LottoResult.matchFive++;
    }
    if (v.countResult === 5 && bonusResult == true) {
      LottoResult.matchFiveAndBous++;
    }
    if (v.countResult === 6) {
      LottoResult.matchSix++;
    }
  });
  return LottoResult;
}

module.exports = App;

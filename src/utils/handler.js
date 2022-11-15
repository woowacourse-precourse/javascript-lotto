const Lotto = require("../Lotto");
const { Random, Console } = require("@woowacourse/mission-utils");

const createUserInput = () => {
  let money = 0;
  let amount = 0;
  Console.readLine("구입금액을 입력해 주세요.", (num) => {
    money = num;
    amount = num / 1000;
  });
  return [amount, money];
};

const createUserLotto = (amount) => {
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
};

const createLottoNumber = () => {
  let winningNumbers;
  let bonusNumber;
  Console.readLine("당첨 번호를 입력해주세요.", (numbers) => {
    winningNumbers = numbers.split(",").map(Number);
    this.lotto = new Lotto(winningNumbers);
    Console.readLine("보너스 번호를 입력해주세요.", (number) => {
      bonusNumber = number;
      this.lotto.setBonusNumber(bonusNumber);
    });
  });
  return [winningNumbers, bonusNumber];
};

const calculateLottoResult = (userLotto, winningNumbers, bonusNumber) => {
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
};

const createLottoResult = (result) => {
  let LottoResult = {
    matchThree: 0,
    matchFour: 0,
    matchFive: 0,
    matchFiveAndBous: 0,
    matchSix: 0,
  };
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
};

const printResult = (LottoResult, money) => {
  Console.print(`당첨 통계
    ---
    3개 일치 (5,000원) - ${LottoResult.matchThree}개
    4개 일치 (50,000원) - ${LottoResult.matchFour}개
    5개 일치 (1,500,000원) - ${LottoResult.matchFive}개
    5개 일치, 보너스 볼 일치 (30,000,000원) - ${LottoResult.matchFiveAndBous}개
    6개 일치 (2,000,000,000원) - ${LottoResult.matchSix}개`);

  const gain =
    LottoResult.matchThree * 5000 +
    LottoResult.matchFour * 50000 +
    LottoResult.matchFive * 1500000 +
    LottoResult.matchFiveAndBous * 30000000 +
    LottoResult.matchSix * 2000000000;

  Console.print(`총 수익률은 ${((gain / money) * 100).toFixed(1)}%입니다.`);
  Console.close();
};

module.exports = {
  createUserInput,
  createUserLotto,
  createLottoNumber,
  calculateLottoResult,
  createLottoResult,
  printResult,
};

class App {
  play() {}
  
  userInput(lottoCount) {
    this.userMoneyInput();
    for (let i = 0; i < lottoCount; i++) {
      this.userLottoInput();
      this.userBonusInput();
    }
  }

  computerNumber() {
    const computerRandomNumber = Random.pickUniqueNumbersInRange(1, 45, 6);
    computerRandomNumber.sort((a, b) => a - b);
    const computerBonusNumber = Random.pickNumberInRange(1, 45);
  }

  userMoneyInput() {
    Console.readLine('구입금액을 입력해 주세요.', (answer) => {
      this.inputExceptionNotANumber(answer);
      const inputMoney = answer;
      const lottoCount = answer/1000;
      Console.print(`${answer/1000}개를 구매했습니다.`);
      this.inputExceptionThousand(answer);
    });
  } 

  userLottoInput() {
    Console.readLine('당첨번호를 입력해 주세요.', (answer) => {
      Console.print(`${[answer]}/n`);
      let userLottoList = String(answer).split(',').map(Number); 
    });
    userLottoList.forEach((element) => {
      this.inputExceptionNotANumber(element);
    });
    userLottoList.sort((a, b) => a - b);
    this.inputExceptionLottoLength(userLottoList);
    this.inputExceptionLottoDuplicate();
    this.compareLottoNumber();
  }

  userBonusInput() {
    const userBonusInputList = [];
    const userBonusList = Console.readLine('보너스 번호를 입력해 주세요.', (answer) => {
      Console.print(`${answer}/n`);
      if (answer < 0 || answer > 45) {
        throw new Error("[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.");
      }
      this.inputExceptionNotANumber(answer);
      this.inputExceptionBonusLength(answer);
      userBonusInputList.push(userBonusList);
    });
    Console.close();
  }

  compareLottoNumber(userLottoInput,computerRandomNumber) {
    const countRank = [];
    let sameCount = 0;
    userLottoInput.forEach((element) => {
     if (computerRandomNumber.includes(element)) {
      ++sameCount;
     }});
     countRank.push(sameCount);
     sameCount = 0;
  }

  setRanking(lottoCount, countRank, computerBonusNumber, userBonusInputList) {
    let rankList = [0, 0, 0, 0, 0];
    for (let i = 0; i < lottoCount; i++) {
      if (countRank[i] === 5 && computerBonusNumber === userBonusInputList[i]) {
        ++rankList[3];
      }  else if (countRank[i] === 3) {
        ++rankList[0];
      } else if (countRank[i] === 4) {
        ++rankList[1];
      } else if (countRank[i] === 5) {
        ++rankList[2];
      } else if (countRank[i] === 6) {
        ++rankList[4];
      }
    }
  }

  inputExceptionNotANumber(answer) {
    if (isNaN(answer) === true) {
      throw new Error("[ERROR] 숫자를 쉼표 구분하여 입력해 주세요.");
    }
  }

  inputExceptionThousand(inputMoney) {
    if (inputMoney % 1000 !== 0) {
      throw new Error("[ERROR] 구입 금액은 1000원 단위여야 합니다.");
    }
  }

  inputExceptionNumberRange(userLottoList) {
    if (userLottoList[1] < 0 || userLottoList[-1] > 45) {
      throw new Error("[ERROR] 로또 번호는 1부터 45까지의 숫자여야 합니다.");
    }
  }

  inputExceptionLottoDuplicate(userLottoList) {
    if ((new Set(userLottoList)).size !== userLottoList.length) {
      throw new Error("[ERROR] 로또 번호는 중복되지 않는 값이어야 합니다.");
    }
  }

  inputExceptionLottoLength(userLottoList) {
    if(userLottoList.length !== 6) {
      throw new Error("[ERROR] 서로 다른 6개의 로또 번호를 입력해 주세요.");
    }
  }

  inputExceptionBonusLength(answer) {
    if(userLottoList.length !== 1) {
      throw new Error("[ERROR] 1개의 보너스 번호를 입력해 주세요.");
    }
  }

  printRank(rankList) {
    Console.print(`당첨 통계
    ---
    3개 일치 (5,000원) - ${rankList[0]}개
    4개 일치 (50,000원) - ${rankList[1]}개
    5개 일치 (1,500,000원) - ${rankList[2]}개
    5개 일치, 보너스 볼 일치 (30,000,000원) - ${rankList[3]}개
    6개 일치 (2,000,000,000원) - ${rankList[4]}개/n`);
  }

  printRevenue(sameCount, lottoCount) {
    const revenue = sameCount * 5 / lottoCount;
    Console.print(`총 수익률은 ${revenue.toFixed(2)}%입니다.`);
  }
}

module.exports = App;

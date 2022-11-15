class App {
  play() {}

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
}

module.exports = App;

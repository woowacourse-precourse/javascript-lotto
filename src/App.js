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
}

module.exports = App;

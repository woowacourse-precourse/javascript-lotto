class LottoMachine {
  #winningNumbers;
  #bonusNumber;

  inputWinningNumber() {
    Console.readLine("당첨 번호를 입력해 주세요.", (answer) => {
      this.validate(answer.split(","));
      this.#winningNumbers = answer.split(",");
    });
    this.inputBonusNumber();
  }
  inputBonusNumber() {
    Console.readLine("보너스 번호를 입력해 주세요.", (answer) => {
      this.validate(answer);
      this.#bonusNumber = answer;
    });
  }

  validate(numbers) {
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] < 1 || numbers[i] > 45) {
        throw new Error("[ERROR] 로또 번호는 1~45 사이만 가능합니다.");
      }
    }
  }
}

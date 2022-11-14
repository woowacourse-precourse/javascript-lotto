class LottoMachine {
  #winningNumbers;
  #bonusNumber;

  inputWinningNumber() {
    Console.readLine("당첨 번호를 입력해 주세요.", (input) => {
      this.validate(input.split(","));
      this.#winningNumbers = input.split(",");
    });
    this.inputBonusNumber();
  }
  inputBonusNumber() {
    Console.readLine("보너스 번호를 입력해 주세요.", (input) => {
      this.validate(input);
      this.#bonusNumber = input;
    });
  }

  validate(numbers) {
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] < 1 || numbers[i] > 45) {
        throw new Error("[ERROR] 로또 번호는 1~45 사이만 가능합니다.");
      }
    }
  }

  lotteryResult(lottos) {
    const result = new Map();
    lottos.map((lotto) =>
      result.set(
        getRank(lotto),
        result.has(getRank(lotto)) ? result.get(getRank(lotto)) + 1 : 0
      )
    );

    return result;
  }

  getRank(lotto) {
    let matchCount = 0;
    let rank;
    lotto.map((number) => {
      if (this.#winningNumbers.includes(number)) {
        matchCount++;
      }
    });
    switch (matchCount) {
      case 3:
        rank = 5;
        break;
      case 4:
        rank = 4;
        break;
      case 5:
        rank = lotto.includes(this.#bonusNumber) ? 2 : 3;
        break;
      case 6:
        rank = 1;
        break;
      default:
        rank = 0;
    }
    return rank;
  }
}

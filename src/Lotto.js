class Lotto {
  #numbers = [];

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  lottoNumbers() {
    MissionUtils.Console.readLine('당첨 번호를 입력해 주세요.', (answer) => {
      this.#numbers.push(answer);
    });

    MissionUtils.Console.readLine('보너스 번호를 입력해 주세요.', (answer) => {
      this.#numbers.push(answer);
    });
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;

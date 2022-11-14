const { Console } = require('@woowacourse/mission-utils');

class LottoDrawer {
  #result;

  constructor(numbersCount) {
    this.numbersCount = numbersCount;
  }

  set result(value) {
    this.#result = value;
  }

  get result() {
    return this.#result;
  }

  // 로또 추천 입력 검증
  // 맨 뒤에 , 는 없어야 함
  // 모두 숫자
  // 총 갯수가 numbersCount
  // 숫자 범위가 1 ~ 45
  // 중복이 없어야 함
  // 보너스번호와도 중복이 없어야 함

  setLottoWinner(input) {
    const winnerNumbers = input.split(',').map(Number);

    this.result = winnerNumbers;
  }

  setBonusNumer() {
    Console.readLine('보너스 번호를 입력해 주세요.\n', (input) => {
      const bonusNumber = Number(input);
      this.result = [...this.result, bonusNumber];
      Console.print(this.result);
    });
  }

  drawLotto() {
    Console.readLine('당첨 번호를 입력해 주세요.\n', (numbers) => {
      this.setLottoWinner(numbers);
      this.setBonusNumer();
    });
  }
}

module.exports = LottoDrawer;

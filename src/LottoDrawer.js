const { Console } = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');
const Validator = require('./Validator');

class LottoDrawer {
  // {numbers, bonus}
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

  // TODO: 로또 추천 입력 검증
  // 맨 뒤에 , 는 없어야 함
  // 모두 숫자
  // 총 갯수가 numbersCount
  // 숫자 범위가 1 ~ 45
  // 중복이 없어야 함
  // 보너스번호와도 중복이 없어야 함

  setLottoWinner(input) {
    Validator.isValidInput(input);

    const winnerNumbers = input.split(',').map(Number);

    this.result = { numbers: new Lotto(winnerNumbers).numbers };
  }

  setBonusNumber(winner) {
    Console.readLine('\n보너스 번호를 입력해 주세요.\n', (input) => {
      Validator.isValidInput(input);
      Validator.isValidNumber(input);

      const bonus = Number(input);

      Lotto.isValidBonusNumber(bonus, this.result.numbers);
      this.result = { ...this.result, bonus };
      // TODO: 호출위치 변경
      winner.announce(this.result);
    });
  }

  drawLotto(winner) {
    Console.readLine('\n당첨 번호를 입력해 주세요. (,로 구분하여 입력하세요.)\n', (numbers) => {
      this.setLottoWinner(numbers);
      this.setBonusNumber(winner);
    });
  }
}

module.exports = LottoDrawer;

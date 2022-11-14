const Random = require("@woowacourse/mission-utils").Random;
const Console = require("@woowacourse/mission-utils").Console;
const inputValidation = require("./inputValidation");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    const checkSixNum = inputValidation.checkSixNum(numbers);
  }

  //로또 뽑기 logic
  randomLottoNumber() {
    const lottoNum = Random.pickUniqueNumbersInRange(1, 45, 6);
    return lottoNum;
  }

  randomBonusNumber() {
    // const bonusNum = Random.
  }

  //로또 입력logic
  inputMoney() {
    Console.readLine('구입금액을 입력해 주세요.\n', (money) => {
      //8개 구매했습니다. 8개 당첨로또 로직
    })
  }

  inputLotto() {
    Console.readLine('당첨 번호를 입력해 주세요.\n', (lotto) => {
  
    })
  }

  inputBonus() {
    Console.readLine('보너스 번호를 입력해 주세요.\n', (bonus) => {
      
    })
  }
}

module.exports = Lotto;

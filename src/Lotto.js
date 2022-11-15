const { MissionUtils } = require("@woowacourse/mission-utils");

class Lotto {
  #numbers;
  
  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }
  
  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    if (new Set(numbers).size !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }
  
  static purchase(input) {

    if(!isNaN(input)) {
      throw new Error("[ERROR] 구매금액은 숫자만 입력하세요.");
    }
    if(input<1000 || input%1000 != 0) {
      throw new Error("[ERROR] 구매금액은 1,000원 단위로 입력하세요.");
    }

    const lotto = [];
    const count = input/1000;

    for(let i=0; i<count; i++) {
      lotto.push(new Lotto(this.drawLottos()));
    }

    return lotto;
  }

  static drawLottos() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1,45,6).sort();
  }

  static getResult() {
    


  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;

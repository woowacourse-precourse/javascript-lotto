const{ Random, Console } = require("@woowacourse/mission-utils");

const START_LOTTO_NUMBER = 1;
const END_LOTTO_NUMBER = 45;
const LOTTO_LENGTH = 6;

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    this.numbers = Random.pickUniqueNumbersInRange(START_LOTTO_NUMBER, END_LOTTO_NUMBER, LOTTO_LENGTH);
    if (numbers.length !== LOTTO_LENGTH) throw new Error(`[ERROR] 로또 번호는 ${LOTTO_LENGTH}개여야 합니다.`);
    if(new Set(numbers).size !== LOTTO_LENGTH) throw new Error("[ERROR] 로또 번호는 중복되지 않아야 합니다.");
  }

  // TODO: 추가 기능 구현
  static getLottoNumberes(purchaseAmount) {
    let lottoList = [];
    for(let idex = 0; idex < purchaseAmount; idex++){
      let lotto = Random.pickUniqueNumbersInRange(START_LOTTO_NUMBER, END_LOTTO_NUMBER, LOTTO_LENGTH);
      lottoList.push(lotto.sort((elementOne, elementTwo) => elementOne - elementTwo));
    }
    return lottoList;
  }
}

module.exports = Lotto;

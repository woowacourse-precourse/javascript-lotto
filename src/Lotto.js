const MissionUtils = require("@woowacourse/mission-utils");

const ERROR_LOTTO_SIZE_MESSAGE = "[ERROR] 로또 번호는 6개여야 합니다.";
const ERROR_LOTTO_IS_INT_MESSAGE = "[ERROR] 정수가 아닌 숫자입니다.";
const ERROR_LOTTO_OVERLAP_MESSAGE = "[ERROR] 로또 번호는 중복되는 숫자가 없어야 합니다.";
const ERROR_LOTTO_VALUE_MESSAGE = "[ERROR] 로또 번호는 1 ~ 45 사이의 숫자입니다.";

class Lotto {
  #numbers;

  constructor(numbers, userInputLotto, userInputLottoAmount) {
    this.bonusNumber = null;
    this.userLotto = userInputLotto;
    this.lottoAmount = userInputLottoAmount;
    this.validate(numbers);
    this.#numbers = numbers;
    this.getBonusNumber();
  }

  getBonusNumber() {
    MissionUtils.Console.readLine("보너스 번호를 입력해 주세요.\n", (userInput) => {
      this.validateBonusNumber(userInput);
      this.bonusNumber = userInput;
      this.getLottoResult();
    });
  }

  getLottoResult() {
    let lottoResult = [0, 0, 0, 0, 0];
    for(let i = 0; i < this.userLotto.length; i++) {
      let lottoMatched = 0;
      for(let j = 0; j < this.#numbers.length; j++) {
        lottoMatched += this.countLottoMatch(this.userLotto[i], this.#numbers[j]);
      }
      this.getPrize(lottoResult, lottoMatched);
    }
    this.printLottoResult();
  }

  countLottoMatch(lottoArr, winNumber){
    if(lottoArr.includes(winNumber)) {
      return 1;
    }
    return 0;
  }

  getPrize(lottoResultArr, numOfLottoMatched) {
    if(numOfLottoMatched < 3) {
      return;
    }
    if(numOfLottoMatched === 5) {
      isSecondPlace(lottoResultArr);
      return;
    }
    lottoResult[numOfLottoMatched - 3]++;
  }

  isSecondPlace(lottoResultArr) {
    const secondPlace = 3;
    const thirdPlace = 2;
    if(lottoResultArr.includes(this.bonusNumber)) {
      lottoResultArr[secondPlace]++;
      return;
    }
    lottoResultArr[thirdPlace]++;
  }

  validate(numbers) {
    this.checkLottoSize(numbers);
    this.checkLottoOverlap(numbers);
    this.checkLottoValue(numbers);
  }

  validateBonusNumber(number) {
    if(number.length < 1 || 2 < number.length) {
      throw new Error("[ERROR]");
    }
    if(Number(number) < 1 || 45 < Number(number)) {
      throw new Error("[ERROR");
    }
    if(this.#numbers.includes(number)) {
      throw new Error("[ERROR]");
    }
  }

  checkLottoSize(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR_LOTTO_SIZE_MESSAGE);
    }
  }

  checkLottoIsInt(numbers) {
    for(let i = 0; i < numbers.length; i++) {
      if(Number(numbers[i]) % 1 !== 0) {
        throw new Error(ERROR_LOTTO_IS_INT_MESSAGE);
      }
    }
  }

  checkLottoOverlap(numbers) {
    const lottoOverlap = new Map();
    for (let i = 0; i < numbers.length; i++) {
      if (!lottoOverlap.has(numbers[i])) {
        lottoOverlap.set(numbers[i], 1);
      }
      else {
        throw new Error(ERROR_LOTTO_OVERLAP_MESSAGE);
      }
    }
  }

  checkLottoValue(numbers) {
    for (let i = 0; i < numbers.length; i++) {
      if(numbers[i] < 1 || (45 < numbers[i])) {
        throw new Error(ERROR_LOTTO_VALUE_MESSAGE);
      }
    }
  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;

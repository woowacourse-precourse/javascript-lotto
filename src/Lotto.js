const MissionUtils = require("@woowacourse/mission-utils");

const firstPlace = 4;
const secondPlace = 3;
const thirdPlace = 2;
const fourthPlace = 1;
const fifthPlace = 0;

const ERROR_LOTTO_SIZE_MESSAGE = "[ERROR] 로또 번호는 6개여야 합니다.";
const ERROR_LOTTO_IS_INT_MESSAGE = "[ERROR] 정수가 아닌 숫자입니다.";
const ERROR_LOTTO_OVERLAP_MESSAGE = "[ERROR] 로또 번호는 중복되는 숫자가 없어야 합니다.";
const ERROR_LOTTO_VALUE_MESSAGE = "[ERROR] 로또 번호는 1 ~ 45 사이의 숫자입니다.";

class Lotto {
  #numbers;

  constructor(numbers, userInputLotto, userInputMoney) {
    this.bonusNumber = null;
    this.userLotto = userInputLotto;
    this.userMoney = userInputMoney;
    this.numOfPrize = 0;
    
    this.validate(numbers);
    this.#numbers = numbers;
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
    this.printLottoResult(lottoResult);
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
    this.numOfPrize++;
    if(numOfLottoMatched === 5) {
      this.isSecondPlace(lottoResultArr);
    }
    if(numOfLottoMatched === 3) {
      lottoResultArr[fifthPlace]++;
    }
    if(numOfLottoMatched === 4) {
      lottoResultArr[fourthPlace]++;
    }
    if(numOfLottoMatched === 6) {
      lottoResultArr[firstPlace]++;
    }
  }

  isSecondPlace(lottoResultArr) {
    if(lottoResultArr.includes(this.bonusNumber)) {
      lottoResultArr[secondPlace]++;
      return;
    }
    lottoResultArr[thirdPlace]++;
  }

  printLottoResult(lottoResultArr) {
    MissionUtils.Console.print("당첨 통계");
    MissionUtils.Console.print("---");
    MissionUtils.Console.print(`3개 일치 (5,000원) - ${lottoResultArr[fifthPlace]}`);
    MissionUtils.Console.print(`4개 일치 (50,000원) - ${lottoResultArr[fourthPlace]}`);
    MissionUtils.Console.print(`5개 일치 (1,500,000원) - ${lottoResultArr[thirdPlace]}`);
    MissionUtils.Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${lottoResultArr[secondPlace]}`);
    MissionUtils.Console.print(`6개 일치 (2,000,000,000원) - ${lottoResultArr[firstPlace]}`);
    this.getProfit(lottoResultArr);
  }

  getProfit(lottoResultArr) {
    let totalMoney, percent;
    totalMoney = this.calcTotalMoney(lottoResultArr);
    percent = Math.round(((totalMoney / this.userMoney) * 100) * 100) / 100;
    MissionUtils.Console.print(`총 수익률은 ${percent}%입니다.`);
    MissionUtils.Console.close();
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

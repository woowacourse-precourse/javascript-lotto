const MissionUtils = require("@woowacourse/mission-utils");
/// this.#numbers 가 뭐를 뜻하는지 어디에 써야하는지..??
// 리턴문이 필요할때와 아닐때의 차이
class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
    this.START_MESSAGE = "구입금액을 입력해 주세요.";
    this.SELECT_WIN_NUMBER = "당첨 번호를 입력해 주세요.";
    this.SELECT_BONUS_NUMBER = "보너스 번호를 입력해 주세요.";
    this.RESULT_MESSAGE = "당첨 통계";
    this.RESULT_UNDERSCORE = "---";
    this.FIFTH_PLACE = "3개 일치 (5,000원) - ";
    this.FOURTH_PLACE = "4개 일치 (50,000원) - ";
    this.THIRD_PLACE = "5개 일치 (1,500,000원) - ";
    this.SECOND_PLACE = "5개 일치, 보너스 볼 일치 (30,000,000원) - ";
    this.FIRST_PLACE = "6개 일치 (2,000,000,000원) - ";
    this.selectedWinNumber = [];
    this.selectedBonusNumber = [];
    this.randomNumbersArr = [];
    this.countMatchedNumber = [];
  }

  buyLotto() {
    MissionUtils.Console.print(this.START_MESSAGE);
    this.pay();
  }
  pay() {
    MissionUtils.Console.readLine("", (payNumber) => {
      MissionUtils.Console.print(""); // 공백
      this.countMyLottoSheets(payNumber);
    });
  }
  countMyLottoSheets(payNumber) {
    const countedSheets = payNumber / 1000;
    MissionUtils.Console.print(`${countedSheets}개를 구매했습니다.`);
    this.printLotto(countedSheets);
  }

  ////////////랜덤번호 배열 뽑기
  generateRandomNumbers() {
    const Rannumbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    const sortedRandomNumbers = Rannumbers.sort((a, b) => a - b);
    this.randomNumbersArr.push(sortedRandomNumbers);
    MissionUtils.Console.print(sortedRandomNumbers);
    // this.compareRandomNumbers(sortedRandomNumbers)
    // this.컴페어 넘버스와 연결(비교계산 실행해줌)
    // this.compareNumbers(sortedRandomNumbers)
    // return sortedRandomNumbers
  }
  ////////////랜덤번호 배열 뽑기

  printLotto(countedSheets) {
    for (let i = 0; i < countedSheets; i++) {
      this.generateRandomNumbers();
    }
    MissionUtils.Console.print("");
    this.selectWinNumbers();
  }

  /////////// 당첨번호 보너스번호 뽑기
  selectWinNumbers() {
    MissionUtils.Console.print(this.SELECT_WIN_NUMBER);
    this.inputWinNumbers();
  }
  inputWinNumbers() {
    MissionUtils.Console.readLine("", (winNumber) => {
      // this.selectedWinNumber.push(winNumber.split(","));
      const splitedWinNumber = winNumber.split(",").map(Number);
      for (let i = 0; i < 6; i++) {
        this.selectedWinNumber.push(splitedWinNumber[i]);
      }
      // this.answerBox.push(answer.split("").map(Number));
      // while (this.selectedWinNumber.length < 7) {
      //   this.selectedWinNumber.push(winNumber);
      // }

      MissionUtils.Console.print(""); // 공백
      this.selectBonusNumber();
      // return winNumber
      // this.compareNumbers(winNumber)
    });
  }
  selectBonusNumber() {
    MissionUtils.Console.print(this.SELECT_BONUS_NUMBER);
    this.inputBonusNumber();
  }
  inputBonusNumber() {
    MissionUtils.Console.readLine("", (bonusNumber) => {
      this.selectedBonusNumber.push(Number(bonusNumber));
      MissionUtils.Console.print(""); // 공백
      // this.seeResult();
      // this.selectBonusNumber()
      // this.compareNumbers();
      this.compareNumbers();
      this.getWinners()
    });
  }
  /////////// 당첨번호 보너스번호 뽑기

  compareNumbers() {
    for (let i = 0; i < this.randomNumbersArr.length; i++) {
      let matchedNumber = this.selectedWinNumber.filter((duplicated) =>
        this.randomNumbersArr[i].includes(duplicated)
      ).length;
      this.countMatchedNumber.push(matchedNumber);
    }
    console.log(this.countMatchedNumber);
  }
  getWinners() {
    let firstPlace = 0;
    let secondPlace = 0;
    let thirdPlace = 0;
    let fourthPlace = 0;
    let fifthPlace = 0;

    if (this.countMatchedNumber.includes(3)) return fifthPlace++;
    if (this.countMatchedNumber.includes(4)) return fourthPlace++;
    if (this.countMatchedNumber.includes(5)) return thirdPlace++;
    if (
      this.countMatchedNumber.includes(5) &&
      this.countMatchedNumber.includes(this.selectedBonusNumber[0])
    )
      return secondPlace++;
    if (this.countMatchedNumber.includes(6)) return firstPlace++;

    this.seeResult(firstPlace,secondPlace,thirdPlace,fourthPlace,fifthPlace);
  }

  ///결과 출력
  seeResult() {
    MissionUtils.Console.print(this.RESULT_MESSAGE);
    MissionUtils.Console.print(this.RESULT_UNDERSCORE);
    MissionUtils.Console.print(`this.FIFTH_PLACE${}`);
    MissionUtils.Console.print(this.FOURTH_PLACE);
    MissionUtils.Console.print(this.THIRD_PLACE);
    MissionUtils.Console.print(this.SECOND_PLACE);
    MissionUtils.Console.print(this.FIRST_PLACE);
    MissionUtils.Console.print(`총 수익률은 {}입니다.`);
  }

  // validate(numbers) {
  //   if (numbers.length !== 6) {
  //     throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
  //   }
  // }
}

const lotto = new Lotto();
// lotto.buyLotto();

module.exports = Lotto;

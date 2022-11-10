const MissionUtils = require("@woowacourse/mission-utils");
/// this.#numbers 가 뭐를 뜻하는지 어디에 써야하는지..??
// 리턴문이 필요할때와 아닐때의 차이
class Lotto {
  #numbers;

  constructor(numbers) {
    // this.validate(numbers);
    this.#numbers = numbers;
    this.START_MESSAGE = "구입금액을 입력해 주세요.";
    this.SELECT_WIN_NUMBER = "당첨 번호를 입력해 주세요.";
    this.SELECT_BONUS_NUMBER = "보너스 번호를 입력해 주세요.";
    this.RESULT_MESSAGE = "당첨 통계";
    this.RESULT_UNDERSCORE = "---"
    this.FIFTH_PLACE = "3개 일치 (5,000원) - "
    this.FOURTH_PLACE = "4개 일치 (50,000원) - "
    this.THIRD_PLACE = "5개 일치 (1,500,000원) - "
    this.SECOND_PLACE = "5개 일치, 보너스 볼 일치 (30,000,000원) - "
    this.FIRST_PLACE = "6개 일치 (2,000,000,000원) - "
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
  generateRandomNumbers() {
    const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6); 
    const result = numbers.sort((a, b) => a - b);
    MissionUtils.Console.print(result);
        // this.컴페어 넘버스와 연결(비교계산 실행해줌)
  }
  printLotto(countedSheets) {
    for (let i = 0; i < countedSheets; i++) {
      this.generateRandomNumbers();
    }
    MissionUtils.Console.print("");
    this.selectWinNumbers();

  }
  selectWinNumbers() {
    MissionUtils.Console.print(this.SELECT_WIN_NUMBER);
    this.inputWinNumbers();
  }
  inputWinNumbers() {
    MissionUtils.Console.readLine("", (winNumber) => {
      MissionUtils.Console.print(""); // 공백
      this.selectBonusNumber();
      // this.컴페어 넘버스와 연결(비교계산 실행해줌
    });
  }
  selectBonusNumber() {
    MissionUtils.Console.print(this.SELECT_BONUS_NUMBER);
    this.inputBonusNumber();
  }
  inputBonusNumber() {
    MissionUtils.Console.readLine("", (bonusNumber) => {
      MissionUtils.Console.print(""); // 공백
      this.seeResult()
      // this.selectBonusNumber()
      // this.컴페어 넘버스와 연결(비교계산 실행해줌
    });
  }
  seeResult(){
    MissionUtils.Console.print(this.RESULT_MESSAGE);
    MissionUtils.Console.print(this.RESULT_UNDERSCORE);
    MissionUtils.Console.print(this.FIFTH_PLACE);
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
lotto.buyLotto();

module.exports = Lotto;

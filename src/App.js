const { Console, Random } = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
const ENTER_PRICE = "구입 금액을 입력해주세요";
const ERROR_MARK = "[ERROR]";
const WINNING_REWARDS = [2000000000, 30000000, 1500000, 50000, 5000];
const WINNING_RANK = [
  "6개 일치",
  "5개 일치, 보너스 볼 일치",
  "5개 일치",
  "4개 일치",
  "3개 일치",
];

class App {
  lottoCnt;
  lottoArray;
  winningNum;
  bonusNum;
  rank;

  play() {}

  //금액 입력
  enterPrice() {
    let price = 0;
    Console.readLine(ENTER_PRICE, (answer) => {
      if (this.isRightPrice(answer)) price = answer;
    });
    return price;
  }

  //금액 유효성 검증
  isRightPrice(price) {
    if (price % 1000 != 0) {
      throw new Error(ERROR_MARK + "로또 가격의 단위는 1000이어야 합니다.");
    } else {
      return true;
    }
  }

  //로또 발행
  issueTotalLotto(price) {
    this.lottoCnt = price / 1000;
    let lottoArray = [];

    for (let i = 0; i < this.lottoCnt; i++) {
      lottoArray.push(this.issueEachLotto());
    }

    this.lottoArray = lottoArray;
  }

  issueEachLotto() {
    return Random.pickUniqueNumbersInRange(1, 45, 6);
  }

  //로또 출력
  printLottoAll() {
    this.printLottoNumber();
    this.printLotto();
  }

  printLottoNumber() {
    Console.print(`${this.lottoCnt}개를 구매했습니다.`);
  }

  printLotto() {
    for (let i = 0; i < this.lottoArray.length; i++) {
      Console.print(`[${this.lottoArray[i].join(", ")}]`);
    }
  }

  //당첨번호 입력
  enterNumbers() {
    this.enterWinningNum();
    this.enterBonusNum();
  }

  enterWinningNum() {
    Console.readLine("당첨 번호를 입력해주세요.", (answer) => {
      this.winningNum = answer.split(",").map((item) => Number(item));
      this.checkDuplication(this.winningNum);
    });
  }

  //당첨번호 입력 유효성 검증
  checkDuplication(numbers) {
    let set = new Set(numbers);
    if (numbers.length != [...set].length)
      throw "[ERROR] 중복된 숫자가 있습니다.";
  }

  //보너스번호 입력
  enterBonusNum() {
    Console.readLine("보너스 번호를 입력해주세요.", (answer) => {
      this.bonusNum = answer;
    });
  }
}

module.exports = App;

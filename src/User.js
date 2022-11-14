const { Console, Random } = require("@woowacourse/mission-utils");
const Validation = require("../src/Validation");

class User {
  lottoNumbers;
  constructor() {
    this.lottoNumbers = []; //로또 발행 번호 목록
  }
  buyLotto() {
    // 로또를 구입한다.
    let numberOfPurchase;
    Console.readLine("구입금액을 입력해 주세요.\n", (userInput) => {
      User.isValidPurchase(userInput);
      numberOfPurchase = Number(userInput) / 1000;
      this.generateLottoNumbers(numberOfPurchase);
    });
  }
  generateLottoNumbers(numberOfPurchase) {
    for (let i = 0; i < numberOfPurchase; i++) {
      const lottoNumber = User.randomSortedNumbers();
      this.lottoNumbers.push(lottoNumber);
    }
    this.showLottoNumbers();
  }
  showLottoNumbers() {
    const count = this.lottoNumbers.length;
    Console.print(`\n${count}개를 구매했습니다.`);
    for (let lottoNumber of this.lottoNumbers) {
      Console.print(lottoNumber);
    }
  }
  static randomSortedNumbers() {
    const lottoNumber = Random.pickUniqueNumbersInRange(1, 45, 6);
    lottoNumber.sort((a, b) => a - b);
    return lottoNumber;
  }
  static isValidPurchase(amount) {
    // 로또 구입 금액에 대한 유효성 검사
    amount = Number(amount);
    return Validation.isDivisible(amount) && Validation.isMaxPurchase(amount) && Validation.isPositiveInteger(amount);
  }
}

const user = new User();
// user.buyLotto();
// user.generateLottoNumbers();

module.exports = User;

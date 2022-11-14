const Lotto = require('./Lotto');
const {
  Console,
  Random,
  PLZ_INPUT_PRICE,
  PURCHASE_LOTTO_COUNT,
  PLZ_INPUT_WIN_NUMBER,
  PLZ_INPUT_BONUS_NUMBER,
} = require('./Constant');
const LottoValidate = require('./LottoValidate');
const BonusValidate = require('./BonusValidate');

class App {
  inputPrice; // 받은 금액
  lottoCnt; // 로또 개수
  lottoNumberList = []; // 구매한 로또 리스트
  winningNum; // 당첨 번호
  bonusNum; // 보너스 번호

  play() {
    this.getLottoPrice();
  }

  // 로또 가격 입력
  getLottoPrice() {
    Console.print(`${PLZ_INPUT_PRICE}`);
    Console.readLine('', price => {
      this.inputPrice = price;
      if (this.inputPrice % 1000 !== 0) {
        throw new Error('[ERROR] 로또 금액에 맞게 입력해주세요.');
      }
      if (isNaN(this.inputPrice)) {
        throw new Error('[ERROR] 숫자를 입력해주세요.');
      }
      this.setLottoCount(price);
    });
  }

  // 로또 개수 출력
  setLottoCount(price) {
    if (price % 1000 !== 0) {
      throw new Error('[ERROR] 로또 금액에 맞게 입력해주세요.');
    }
    this.lottoCnt = price / 1000;
    Console.print(`\n${this.lottoCnt}${PURCHASE_LOTTO_COUNT}`);
    this.setRandomLottoNumber();
  }

  // 로또 개수만큼 로또 번호 list 출력
  setRandomLottoNumber() {
    while (this.lottoNumberList.length < this.lottoCnt) {
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      this.lottoNumberList.push(numbers.sort((a, b) => a - b));
    }
    this.lottoNumberList.map(lotto => {
      Console.print(lotto);
    });
    this.getWinningLottoNumber();
  }

  // 로또 당첨 번호 입력
  getWinningLottoNumber() {
    Console.readLine(`\n${PLZ_INPUT_WIN_NUMBER}\n`, numbers => {
      this.winningNum = numbers.split(',');
      new LottoValidate(this.winningNum);
      this.getBonusNumber();
    });
  }

  // 보너스 번호 입력
  getBonusNumber() {
    Console.readLine(`\n${PLZ_INPUT_BONUS_NUMBER}\n`, bonus => {
      this.bonusNum = bonus;
      new BonusValidate(this.winningNum, this.bonusNum);
      this.lottoCompareWinNumber();
    });
  }

  // 로또 번호 비교
  lottoCompareWinNumber() {
    new Lotto(this.inputPrice, this.winningNum, this.bonusNum, this.lottoNumberList);
  }
}

module.exports = App;

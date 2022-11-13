const Lotto = require('./Lotto');
const {
  Console,
  Random,
  PLZ_INPUT_PRICE,
  PURCHASE_LOTTO_COUNT,
  PLZ_INPUT_WIN_NUMBER,
  PLZ_INPUT_BONUS_NUMBER,
  WINNING_STATISTICS,
  THREE_SAME,
  FOUR_SAME,
  FIVE_SAME,
  FIVE_SAME_BONUS_SAME,
  SIX_SAME,
} = require('./Constant');
class App {
  inputPrice; // 받은 금액
  lottoCnt; // 로또 개수
  lottoNumberList = []; // 구매한 로또 리스트
  winningNum; // 당첨 번호
  bonusNum; // 보너스 번호
  sameCnt = 0; // 각 로또 당 같은 번호 개수
  bonusCnt = 0; // 보너스 번호 같으면 1, 다르면 0
  sameArr = []; // 로또 마다 같은 개수 배열
  numberOfWins = [0, 0, 0, 0, 0]; // 1,2,3,4,5등 당첨 개수
  revenueRate; // 수익률

  play() {
    this.getLottoPrice();
  }

  // 로또 가격 입력
  getLottoPrice() {
    Console.print(`${PLZ_INPUT_PRICE}`);
    Console.readLine('', price => {
      this.inputPrice = price;
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
      this.lottoNumberList.push(numbers);
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
      new Lotto(this.winningNum);
      this.getBonusNumber();
    });
  }
}

module.exports = App;

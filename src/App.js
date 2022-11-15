const Lotto = require('./Lotto');
const BonusValidate = require('./BonusValidate');
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
  lottoObj = {
    lotto: [],
    sameCount: 0,
    isBonus: false,
  };
  inputPrice; // 받은 금액
  lottoCnt; // 로또 개수
  lottoNumberList = []; // 구매한 로또 리스트
  winningNum; // 당첨 번호
  bonusNum; // 보너스 번호
  objArr = []; // 로또 마다 같은 개수 배열
  numberOfWins = [0, 0, 0, 0, 0]; // 1,2,3,4,5등 당첨 개수
  revenueRate; // 수익률

  play() {
    this.getLottoPrice();
  }

  objArrConstructor() {
    for (let i = 0; i < this.lottoCnt; i++) {
      this.objArr.push(new Object());
      this.objArr[i].lotto = this.lottoNumberList[i];
      this.objArr[i].sameCount = 0;
      this.objArr[i].isBonus = false;
    }
  }
  // 로또 가격 입력
  getLottoPrice() {
    Console.readLine(`${PLZ_INPUT_PRICE}\n`, price => {
      this.priceValidate(price);
      this.inputPrice = price;
      this.lottoCount();
    });
  }
  // 로또 가격 예외 처리
  priceValidate(price) {
    if (price % 1000 !== 0) {
      throw new Error('[ERROR] 로또 금액에 맞게 입력해주세요.');
    }
    if (isNaN(price)) {
      throw new Error('[ERROR] 숫자를 입력해주세요.');
    }
  }

  // 로또 개수 출력
  lottoCount() {
    this.lottoCnt = Math.floor(this.inputPrice / 1000);
    Console.print(`\n${this.lottoCnt}${PURCHASE_LOTTO_COUNT}`);
    this.getLottoList();
  }

  // 로또 리스트 저장
  getLottoList() {
    // while (this.lottoNumberList.length < this.lottoCnt) {
    //   const randomNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    //   this.lottoNumberList.push(randomNumbers.sort((a, b) => a - b));
    // }
    this.lottoNumberList = [
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 4, 5, 8],
      [1, 2, 3, 4, 5, 7],
      [1, 2, 3, 4, 8, 9],
      [1, 2, 3, 8, 9, 10],
      [1, 2, 11, 8, 9, 10],
    ];
    this.displayLottoList();
  }

  // 로또 리스트 출력
  displayLottoList() {
    this.objArrConstructor();
    this.lottoNumberList.map(lotto => {
      Console.print(lotto);
    });
    this.getWinNumberInput();
  }

  // 당첨 번호 입력
  getWinNumberInput() {
    Console.readLine(`\n${PLZ_INPUT_WIN_NUMBER}\n`, winNumber => {
      this.winningNum = Lotto.saveWinNumber(winNumber);
      new Lotto(this.winningNum);
      this.getBonusNumberInput();
    });
  }

  // 보너스 번호 입력
  getBonusNumberInput() {
    Console.readLine(`\n${PLZ_INPUT_BONUS_NUMBER}\n`, bonusNumber => {
      this.bonusNum = Lotto.saveBonusNumber(bonusNumber);
      new BonusValidate(this.winningNum, this.bonusNum);
      this.lottoCompare();
    });
  }

  lottoCompare() {
    this.objArr.map(object => {
      this.winNumberCompare(object);
    });
    this.countWins();
  }

  winNumberCompare(object) {
    object.sameCount = Lotto.sameCount(object.lotto, object, this.winningNum);
    this.bonusNumberCompare(object);
  }

  bonusNumberCompare(object) {
    object.isBonus = Lotto.bonusCount(object.lotto, object, this.bonusNum);
  }

  countWins() {
    this.numberOfWins = Lotto.countNumberOfWins(this.numberOfWins, this.objArr);
    this.displayWinStatics();
  }

  displayWinStatics() {
    Console.print(`\n${WINNING_STATISTICS}`);
    Console.print('---');
    Console.print(`${THREE_SAME}${this.numberOfWins[0]}개`);
    Console.print(`${FOUR_SAME}${this.numberOfWins[1]}개`);
    Console.print(`${FIVE_SAME}${this.numberOfWins[2]}개`);
    Console.print(`${FIVE_SAME_BONUS_SAME}${this.numberOfWins[3]}개`);
    Console.print(`${SIX_SAME}${this.numberOfWins[4]}개`);
    this.getRevenueRate();
  }

  getRevenueRate() {
    this.revenueRate = Lotto.getRevenueRate(this.revenueRate, this.numberOfWins, this.inputPrice);
    this.displayRevenueRate();
  }

  displayRevenueRate() {
    Console.print(`총 수익률은 ${this.revenueRate}%입니다.`);
    Console.close();
  }
}

const app = new App();
app.play();

module.exports = App;

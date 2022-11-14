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
const BonusValidate = require('./BonusValidate');
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
      this.priceValidate(price);
      this.inputPrice = price;
    });
  }

  priceValidate(price) {
    if (price % 1000 !== 0) {
      throw new Error('[ERROR] 로또 금액에 맞게 입력해주세요.');
    }
    if (isNaN(price)) {
      throw new Error('[ERROR] 숫자를 입력해주세요.');
    }
    this.setLottoCount(price);
  }

  // 로또 개수 출력
  setLottoCount(price) {
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
    this.lottoNumberList.map(lotto => {
      this.compareNumbers(lotto);
      this.compareBonusNumber(lotto);
      this.sameArr.push(this.sameCnt);
      this.sameCnt = 0;
    });
    this.getNumberOfWins();
  }

  // 당첨 번호 vs 로또 번호
  compareNumbers(lotto) {
    lotto.map(index => {
      if (this.winningNum.includes(String(index))) {
        this.sameCnt += 1;
      }
    });
  }

  // 보너스 번호 vs 로또 번호
  compareBonusNumber(lotto) {
    lotto.map(index => {
      if (!this.winningNum.includes(this.bonusNum)) {
        if (index === Number(this.bonusNum)) {
          this.bonusCnt = 1;
        }
      }
    });
  }

  getNumberOfWins() {
    this.sameArr.map(sameCount => {
      if (sameCount === 3) {
        this.numberOfWins[0] += 1;
      } else if (sameCount === 4) {
        this.numberOfWins[1] += 1;
      } else if (sameCount === 5 && this.bonusCnt !== 1) {
        this.numberOfWins[2] += 1;
      } else if (sameCount === 5 && this.bonusCnt === 1) {
        this.numberOfWins[3] += 1;
      } else if (sameCount === 6) {
        this.numberOfWins[4] += 1;
      }
    });
    this.setTextResult();
  }

  // 로또 결과 출력
  setTextResult() {
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
    this.revenueRate =
      ((this.numberOfWins[0] * 5000 +
        this.numberOfWins[1] * 50000 +
        this.numberOfWins[2] * 1500000 +
        this.numberOfWins[3] * 30000000 +
        this.numberOfWins[4] * 2000000000) /
        Number(this.inputPrice)) *
      100;
    Console.print(`총 수익률은 ${this.revenueRate.toFixed(1)}%입니다.`);
    Console.close();
  }
}

module.exports = App;

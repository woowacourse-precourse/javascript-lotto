const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
const {
  INPUT_MESSAGES,
  ERROR_MESSAGES,
  PRIZE_REWARDS,
  STATISTIC,
  PRIZE_RESULTS,
} = require("./utils/constants");

class App {

  constructor() {
    this.lottos = [];
    this.winNumber = 0;
    this.bonusNumber = 0;
    this.result = {};
    this.lottoMoney = 0;
  }

  play() {
    this.inputPurchaseAmount();
  }

  // 구입금액 입력 함수 구현
  inputPurchaseAmount() {
    MissionUtils.Console.readLine(INPUT_MESSAGES.PURCHASE_AMOUNT, (money) => {
      this.inputPurchaseAmountDivide(money);
      this.lottoMoney = money;
      this.buyLotto(money);
    })
  }

  // 입력된 금액이 1000원 단위로 나누어 지는지 확인하는 함수 구현
  inputPurchaseAmountDivide(money) {
    if (money % 1000 !== 0) {
      throw new Error(ERROR_MESSAGES.DIVIDE_ERROR);
    }
  }

  // 로또 구입 금액에 해당하는 만큼 로또를 발행하는 함수 구현
  buyLotto(money) {
    const lottoQuantity = money / 1000;
    MissionUtils.Console.print(`${lottoQuantity}개를 구입했습니다.`);
    this.createLotto(lottoQuantity);
  }

  createLotto(lottoQuantity) {
    for (let i = 0; i < lottoQuantity; i++) {
      const lottoNumbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
      MissionUtils.Console.print(lottoNumbers);
      this.lottos.push(lottoNumbers);
    }
    this.inputWinNumber();
  }

  // 당첨 번호를 입력하는 함수 구현
  inputWinNumber() {
    MissionUtils.Console.readLine(INPUT_MESSAGES.WINNING_NUMBER, (number) => {
      this.winNumber = number.split(",");
      new Lotto(this.winNumber);
      this.winNumber = this.winNumber.map((number) => parseInt(number));
      this.inputBonusNumber();
    });
  }

  // 보너스 번호를 입력하는 함수 구현
  inputBonusNumber() {
    MissionUtils.Console.readLine(INPUT_MESSAGES.BONUS_NUMBER, (bonus) => {
      this.inputBonusNumberValidate(bonus);
      this.bonusNumber = parseInt(bonus);
      this.checkLottoNumbers();
    });
  }

  // 보너스 번호 유효성 검사 함수 구현
  inputBonusNumberValidate(bonus) {
    if (!(parseInt(bonus) >= 1 && parseInt(bonus) <= 45)) {
      throw new Error(ERROR_MESSAGES.LOTTO_RANGE_ERROR);
    }
    this.lottos.map((number) => {
      if (number === parseInt(bonus)) {
        throw new Error(ERROR_MESSAGES.DUPLICATE_ERROR);
      }
    });
  }

  // 로또 번호화 당첨 번호를 비교하는 함수 구현
  checkLottoNumbers() {
    this.initResult();
    this.lottos.map((numbers) => {
      let sameNumberCount = 0;
      let isBonusNumber = false;
      numbers.map((number) => {
        if (this.winNumber.includes(number)) {
          sameNumberCount += 1;
        }
        if (this.bonusNumber === number) {
          isBonusNumber = true;
        }
      });
      this.compareNumbers(sameNumberCount, isBonusNumber);
    });
    this.resultPrint();
  }

  initResult() {
    this.result[PRIZE_REWARDS.THREE];
    this.result[PRIZE_REWARDS.FOUR];
    this.result[PRIZE_REWARDS.FIVE];
    this.result[PRIZE_REWARDS.FIVE_BONUS];
    this.result[PRIZE_REWARDS.SIX];
  }

  // 당첨 번호가 있는지 검증하는 함수 구현
  compareNumbers(count, bonus) {
    if (count === 3) {
      this.result[PRIZE_REWARDS.THREE] += 1;
    }
    if (count === 4) {
      this.result[PRIZE_REWARDS.FOUR] += 1;
    }
    if (count === 5) {
      if (bonus === true) {
        this.result[PRIZE_REWARDS.FIVE_BONUS] += 1;
      } else {
        this.result[PRIZE_REWARDS.FIVE] += 1;
      }
    }
    if (count === 6) {
      this.result[PRIZE_REWARDS.SIX] += 1;
    }
  }

  // 당첨 통계를 출력해주는 함수 구현
  resultPrint() {
    MissionUtils.Console.print(STATISTIC.WINNING_STATISTIC);
    MissionUtils.Console.print(PRIZE_RESULTS.THREE(this.result[PRIZE_REWARDS.THREE]));
    MissionUtils.Console.print(PRIZE_RESULTS.FOUR(this.result[PRIZE_REWARDS.FOUR]));
    MissionUtils.Console.print(PRIZE_RESULTS.FIVE(this.result[PRIZE_REWARDS.FIVE]));
    MissionUtils.Console.print(PRIZE_RESULTS.FIVE_BONUS(this.result[PRIZE_REWARDS.FIVE_BONUS]));
    MissionUtils.Console.print(PRIZE_RESULTS.SIX(this.result[PRIZE_REWARDS.SIX]));
    this.calculateRevenue();
  }

  // 최종 수익률을 구하는 함수 구현
  calculateRevenue() {
    let deposit = 0;
    for (let k in this.result) {
      deposit += parseInt(k) * this.result[k];
    }
    MissionUtils.Console.print(STATISTIC.TOTAL_FROFIT(((deposit / this.lottoMoney) * 100).toFixed(1)));
    MissionUtils.Console.close();
  }
}

const app = new App();
app.play();

module.exports = App;

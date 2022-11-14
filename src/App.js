const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");

const MATCH_STRING = ["6개 일치 (2,000,000,000원)", "5개 일치, 보너스 볼 일치 (30,000,000원)", "5개 일치(1,500,000원)", "4개 일치(50,000원)", "3개 일치(5,000원)"];
const REWARD_MONEY = [2000000000, 30000000, 1500000, 50000, 5000];
const LOTTO_LEN = 6;
const RANK_COUNT = 5;

class App {
  constructor() {
    this.money = 0;
    this.count = 0;
    this.lottoList = [];
    this.winning = null;
    this.bonus = 0;
    this.results = [0, 0, 0, 0, 0];
    this.revenueRatio = 0;
  }

  setMoney(input) {
    const money = Number(input);
    if (money % 1000 !== 0) throw new Error("[ERROR] 구입 금액은 1,000원 단위로 입력해야 합니다.");
    this.money = money;
  }

  setCount() {
    this.count = this.money / 1000;
  }

  publishLottoList() {
    for (let i=0; i<this.count; i++) {
      const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
      const lotto = new Lotto(numbers);
      this.lottoList.push(lotto);
    }
  }

  printLottoList() {
    MissionUtils.Console.print(this.count+"개를 구매했습니다.");
    for (let i=0; i<this.count; i++) {
      MissionUtils.Console.print('['+this.lottoList[i].getNumbers().join(', ')+']');
    }
  }

  setWinning(winning) {
    this.winning = new Lotto(winning.split(',').map((v) => Number(v)).sort((a, b) => a - b));
  }

  setBonus(bonus) {
    this.bonus = Number(bonus);

    if (this.winning.getNumbers().indexOf(this.bonus) !== -1) {
      throw new Error("[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.");
    }
  }

  getRank(winning, lotto) {
    let count = 0;
    let bonusMatch = false;

    for (let i=0; i<LOTTO_LEN; i++) {
      if (lotto.indexOf(winning[i]) !== -1) count++; 
    }

    if (lotto.indexOf(this.bonus) !== -1) bonusMatch = true;

    if (count === 6) return 1;
    if (count === 5 && bonusMatch) return 2;
    if (count === 5) return 3;
    if (count === 4) return 4;
    if (count === 3) return 5;
    return 6;
  }

  calculateResults() {
    for (let i=0; i<this.count; i++) {
      const rank = this.getRank(this.winning.getNumbers(), this.lottoList[i].getNumbers());
      if (rank > RANK_COUNT) continue;
      this.results[rank-1]++; 
    }
  }

  calculateRevenueRatio() {
    let revenue = 0;

    for (let i=0; i<RANK_COUNT; i++) {
      revenue += this.results[i] * REWARD_MONEY[i];
    }

    this.revenueRatio = Math.round(this.money / revenue * 100 * 100) / 100;
  }

  printStatistics() {
    MissionUtils.Console.print("당첨 통계");
    MissionUtils.Console.print("---");
    for (let i=RANK_COUNT-1; i>=0; i--) {
      MissionUtils.Console.print(MATCH_STRING[i]+" - "+this.results[i]+"개");
    }
    MissionUtils.Console.print("총 수익률은 "+this.revenueRatio+"%입니다.");
  }

  play() {
    MissionUtils.Console.readLine("구입금액을 입력해 주세요.", (input) => {
      this.setMoney(input);
      this.setCount();
      this.publishLottoList();
      this.printLottoList();
      
      MissionUtils.Console.readLine("당첨 번호를 입력해 주세요.", (winningInput) => {
        this.setWinning(winningInput);

        MissionUtils.Console.readLine("보너스 번호를 입력해 주세요.", (bonusInput) => {
          this.setBonus(bonusInput);
          this.calculateResults();
          this.calculateRevenueRatio();
          this.printStatistics();
        });
      });
    });
  }
} 

module.exports = App;

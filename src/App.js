const MissionUtils = require("@woowacourse/mission-utils");
const Console = MissionUtils.Console;
const Random = MissionUtils.Random;
const Lotto = require("./Lotto");

class App {
  constructor() {
    this.cache = 0;
    this.lottos = [];
    this.bonus = 0;
    this.winLotto = 0;
    this.lottoCount = 0;
    this.yieldSum = 0;
    this.rate = 0;

    this.result = {
      3: 0,
      4: 0,
      5: 0,
      '5bonus': 0,
      6: 0,
    }
    this.reward = {
      3: 5000,
      4: 50000,
      5: 1500000,
      '5bonus': 30000000,
      6: 2000000000,
    };
  }

  printYieldRate(yieldSum, cache) {
    this.rate = yieldSum / cache * 100;
    this.rate = Math.round(this.rate * 10) / 10;
    Console.print(`총 수익률은 ${this.rate}%입니다.`)
  }

  yieldRate() {
    for (const key in this.result) {
      if (this.result[key] !== 0) this.yieldSum += this.reward[key];
    }
    this.printYieldRate(this.yieldSum, this.cache);
  }

  printLotto() {
    for (const list in this.result) {
      if (list === '5bonus') Console.print(`5개 일치, 보너스 볼 일치 (${this.reward[list].toLocaleString()}원) - ${this.result[list]}개`);
      else Console.print(`${list}개 일치 (${this.reward[list].toLocaleString()}원) - ${this.result[list]}개`);
    }
  }

  statistics() {
    for (const lottoNum of this.lottos) {
      // 여러개의 사용자 로또 번호 중 하나의 로또에서 당첨 로또 번호 있는지 비교
      lottoNum.setLottoResult(this.winLotto.getNumbers());
      lottoNum.setBonusResult(this.bonus);
      const winningCount = lottoNum.getResult();

      if (winningCount.lotto === 5 && winningCount.bonus == true) this.result['5bonus']++;
      else if (winningCount.lotto >= 3) this.result[winningCount.lotto]++;
    }
  }

  inputWinLotto() {
    Console.readLine('당첨 번호를 입력해 주세요.', (answer) => {
      const splitNum = answer.split(',').map((num) => +num);
      this.winLotto = new Lotto(splitNum);
      Console.readLine('보너스 번호를 입력해 주세요.', (answer) => {
        this.bonus = answer;
      })
    })
    Console.close();
  }

  crintUserLottoNum() {
    for (const lotto of this.lottos) {
      Console.print(lotto.print());
    }
  }

  createLottoNum() {
    return Random.pickUniqueNumbersInRange(1, 45, 6);
  }

  createUserLottoNum() {
    for (let idx = 0; idx < this.lottoCount; idx++) {
      const lottoNum = this.CreateLottoNum();
      const lotto = new Lotto(lottoNum);
      this.lottos.push(lotto);
    }
  }

  isValidCacheInput(answer) {
    const lottotemp = answer / 1000;
    if (!Number.isInteger(lottotemp)) throw new Error("[ERROR] 정상적이지 않은 입력입니다.");
    return lottotemp;
  }

  inputCache() {
    Console.readLine('구입금액을 입력해 주세요.', (answer) => {
      this.cache = answer;
      this.lottoCount = this.isValidCacheInput(answer);
      Console.print(`${this.lottoCount}개를 구매했습니다.`);
    })
    Console.close();
  }

  play() {
    this.inputCache(); // 금액 입력
    this.createUserLottoNum(); // 금액에 맞는 로또 번호 생성    
    this.printUserLottoNum(); // 사용자 로또 번호 출력    
    this.inputWinLotto(); // 당첨번호 입력     
    this.statistics(); // 통계   
    this.printLotto(); // 당첨내역 출력   
    this.yieldRate(); // 수익률 계산 및 출력
  }
}

module.exports = App;

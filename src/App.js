const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");

class App {
  #lotto 
  cntlotto
  constructor() {
    this.#lotto = [];
    this.cntlotto=0;
  }
  

  play() {
    MissionUtils.Console.readLine("구입금액을 입력해 주세요.", money => {
      if (money % 1000 != 0) throw new Error("[ERROR] 천 원 단위로 넣어주세요.")
      this.money = money;
      this.cntLotto = money / 1000;
      MissionUtils.Console.print(`${ this.cntLotto }개를 구매했습니다.`);
      
      this.showMeTheUserLotto(); 

      this.showMeWinLotto(); 
    });
  }

  showMeTheUserLotto() {
    for (let i = 0; i < this.cntLotto; i++) {

      let randomNumLotto = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      randomNumLotto = randomNumLotto.sort(function compare(a, b) {
        return a - b;
      });

      let lotto = new Lotto(randomNumLotto);

      MissionUtils.Console.print(`[${lotto.numbers.join(", ")}]`);

      this.#lotto.push(lotto)
    }
  }

  showMeWinLotto() {
    MissionUtils.Console.readLine("당첨 번호를 입력해 주세요.", winningLotto => {
      winningLotto = winningLotto.split(",").map(Number);
      this.winningLottoArr = [this.checkWinLotto(winningLotto)]; 
      MissionUtils.Console.readLine("보너스 번호를 입력해 주세요.", winningLottoBonus => {
        winningLottoBonus = +winningLottoBonus;
        this.winningLottoArr.push(this.checkWinBonusLotto(winningLottoBonus))
        this.printRank(this.rankCount());
        MissionUtils.Console.close();
      });
    });
  }

  checkWinLotto(lottoNum) {
    if (lottoNum.length != 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    let lottoSet = new Set(lottoNum);
    if (lottoSet.size != 6) throw new Error("[ERROR] 로또 번호가 중복 됩니다")

    for(let i=0; i<lottoNum.length; i++){
      if(lottoNum[i]>45 || lottoNum[i]<1 ){
        throw new Error("[ERROR] 로또 번호 사이는 1에서 45 사이 입니다");
      }
    }

   
    return lottoNum
  }

  checkWinBonusLotto(num) {
    if (this.winningLottoArr[0].indexOf(num) !== -1) {
      throw new Error("[ERROR] 보너스 로또 번호가 다른 로또 번호와 중복 됩니다")
    }

    if ( num > 45 || num < 1 ) {
      throw new Error("[ERROR] 보너스 로또 번호 사이는 1에서 45 사이 입니다");
    }
    
    return num
  }

  rankCount() {
    let rank = [0, 0, 0, 0, 0]; //각 순서대로 3개 일치 ~ 6개 일치
    this.#lotto.forEach(x => {
      rank[x.userLottoWinningLottoCompare(this.winningLottoArr)]++
    })
    rank.push(Math.round(((this.yieldCal(rank) / this.money) * 1000)) / 10);  
    return rank;
  }

  yieldCal(rank) {
    let yieldLotto = rank[0] * 5000;
    yieldLotto += rank[1] * 50000;
    yieldLotto += rank[2] * 1500000;
    yieldLotto += rank[3] * 30000000;
    yieldLotto += rank[4] * 2000000000;
    return yieldLotto;
  }

  printRank(rank) {
    MissionUtils.Console.print("당첨 통계\n")
    MissionUtils.Console.print("---")
    MissionUtils.Console.print(`3개 일치 (5,000원) - ${rank[0]}개`)
    MissionUtils.Console.print(`4개 일치 (50,000원) - ${rank[1]}개`)
    MissionUtils.Console.print(`5개 일치 (1,500,000원) - ${rank[2]}개`)
    MissionUtils.Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${rank[3]}개`)
    MissionUtils.Console.print(`6개 일치 (2,000,000,000원) - ${rank[4]}개`)
    MissionUtils.Console.print(`총 수익률은 ${rank[5]}%입니다.`)
  }

}

module.exports = App;
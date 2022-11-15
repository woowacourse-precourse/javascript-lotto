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

        this.winningLottoArr.push(this.checkWinBonusLotto(winningLottoBonus))

        this.printLotto(this.CheckRankCount());
        MissionUtils.Console.close();
      });
    });
  }

  checkWinLotto(lottoNum) {
    if (lottoNum.length != 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    let lottoSet = new Set(lottoNum);
    if (lottoSet.size != 6) throw new Error("[ERROR] 로또 번호가 중복 됩니다. ")

    for(let i=0; i<lottoNum.length; i++){
      if(lottoNum[i]>45 || lottoNum[i]<1 ){
        throw new Error("[ERROR] 로또 번호 사이는 1에서 45 사이 입니다. ");
      }
    }

   
    return lottoNum
  }

  checkWinBonusLotto(num) {
    if (this.winningLottoArr[0].indexOf(num) != -1) {
      throw new Error("[ERROR] 보너스 로또 번호가 다른 로또 번호와 중복 됩니다")
    }

    if ( num > 45 || num < 1 ) {
      throw new Error("[ERROR] 보너스 로또 번호 사이는 1에서 45 사이 입니다");
    }
    
    return num
  }

  CheckRankCount() {
    let rank =  new Array(5);
    for(let i=0; i<rank.length; i++){
      rank[i]=0;
    }
    this.#lotto.forEach(
      x => {
      rank[x.winningConditionRate(this.winningLottoArr)]++
    })

    rank.push(Math.round((1000*  (this.RankLotto(rank) / this.money) )) / 10);  
    return rank;
  }
  RankLotto(rank) {
    let checkRankLotto = rank[4] * 5000 + rank[0] * 2000000000 + rank[1] * 30000000 + rank[2] * 1500000 + rank[3] * 50000;;
    return checkRankLotto;
  }
  printLotto(rank) {
    let rankPrint ="";
    rankPrint +="당첨 통계\n";
    rankPrint+="---\n";
    rankPrint+=`3개 일치 (5,000원) - ${rank[4]}개\n`;
    rankPrint+=`4개 일치 (50,000원) - ${rank[3]}개\n`;
    rankPrint+=`5개 일치 (1,500,000원) - ${rank[2]}개`;
    rankPrint+=`5개 일치, 보너스 볼 일치 (30,000,000원) - ${rank[1]}개`;
    rankPrint+=`6개 일치 (2,000,000,000원) - ${rank[0]}개`;
    rankPrint+=`총 수익률은 ${rank[5]}%입니다.`;
    MissionUtils.Console.print(rankPrint)
  }
}

module.exports = App;
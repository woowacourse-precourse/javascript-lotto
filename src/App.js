const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("../src/Lotto");

class App {
  #lottoCount;
  #lottoNumbers;
  #winningNumbers;
  #winningBonus;
  #winningResult;

  play() {
    this.inputMoney();
  } 

  inputMoney(){
    let count;
    MissionUtils.Console.readLine("구입 금액을 입력해주세요.\n",(money)=>{
      if(isNaN(money))
        throw new Error("[ERROR] 숫자만 입력해주세요.");
      if(money % 1000 != 0)
        throw new Error("[ERROR] 1000원 이상의 단위만 입력받을 수 있습니다.");
      count = money / 1000;
      this.#lottoCount = count;
      
      this.buyLotto(count);
    });
  }

  async buyLotto(lottoCount){
    let lottoNumbers = [];
    
    for(let i = 0; i < lottoCount; i++){
      let tmp = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      lottoNumbers.push(tmp.sort(function(a,b){
        return a-b;
      }));
    }
    await MissionUtils.Console.print(this.#lottoCount + "개를 구매했습니다.");
    lottoNumbers.forEach((number)=>{
      MissionUtils.Console.print(number);
    })
    this.#lottoNumbers = lottoNumbers;

    this.inputWinning();
  }

  inputWinning(){
    MissionUtils.Console.readLine("\n당첨 번호를 입력해 주세요.\n", (numbers)=>{
      this.#winningNumbers = Array.from(numbers.split(','));
      this.#winningNumbers.forEach((n, idx) => {
        this.#winningNumbers[idx] = Number(n);
      })
      const lotto = new Lotto(this.#winningNumbers);
      MissionUtils.Console.readLine("\n보너스 번호를 입력해 주세요.\n", (bonus) => {
        this.#winningBonus = bonus;
        this.checkWinning(lotto);    
      });
    });
  }

  checkWinning(lotto){
    let result = lotto.statistics(this.#lottoNumbers, this.#winningBonus);
    this.#winningResult = result;
    this.printWinning();
  }

  printWinning(){
    MissionUtils.Console.print("\n\n당첨 통계\n---");
    MissionUtils.Console.print("3개 일치 (5,000원) - "+this.#winningResult[3]+"개\n");
    MissionUtils.Console.print("4개 일치 (50,000원) - "+this.#winningResult[4]+"개\n");
    MissionUtils.Console.print("5개 일치 (1,500,000원) - "+this.#winningResult[5]+"개\n");
    MissionUtils.Console.print("5개 일치, 보너스 볼 일치 (30,000,000원) - "+this.#winningResult[7]+"개\n");
    MissionUtils.Console.print("6개 일치 (2,000,000,000원) - "+this.#winningResult[6]+"개\n");
    const SumOfWinning = this.#winningResult.reduce(function add(sum, currValue) {
      return sum + currValue;
    }, 0);
    let Percentage = (SumOfWinning*100/this.#lottoCount).toFixed(2);
    MissionUtils.Console.print("총 수익률을 " + Percentage + "%입니다.");
  }

}

module.exports = App;
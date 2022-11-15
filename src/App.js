const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("../src/Lotto");

class App {
  #lottoCount;
  #lottoNumbers;
  #winningNumbers;
  #winningBonus;

  async play() {
    this.inputMoney();
  } 

  async inputMoney(){
    let count;
    MissionUtils.Console.readLine("구입 금액을 입력해주세요.\n",(money)=>{
      if(money % 1000 != 0)
        throw new Error("[ERROR] 1000원 이상의 단위만 입력받을 수 있습니다.");
      count = money / 1000;
      MissionUtils.Console.print("\n" + count + "개를 구매했습니다.");
      this.buyLotto(count);
      this.#lottoCount = count;
    });
  }

  async buyLotto(lottoCount){
    let lottoNumbers = [];
    for(let i = 0; i < lottoCount; i++){
      let tmp = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      lottoNumbers.push(tmp.sort());
      MissionUtils.Console.print(tmp);
    }
    this.#lottoNumbers = lottoNumbers;
    this.inputWinning();
  }

  async inputWinning(){
    MissionUtils.Console.readLine("당첨 번호를 입력해 주세요.\n", (numbers)=>{
      this.#winningNumbers = numbers.split(',');
      MissionUtils.Console.readLine("보너스 번호를 입력해 주세요.\n", (bonus) => {
        this.#winningBonus = bonus;
        this.#winningNumbers.push(bonus);
      })
    });
  }
}

module.exports = App;
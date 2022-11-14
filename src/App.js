const Lotto = require("../src/Lotto");
const MissionUtils = require("@woowacourse/mission-utils");
class App {
  #numberOfLottos;
  #issuedLottosList= new Array();
  #lottoWinningNumbers;
  #lottoBonusNumber;
  play() {
    this.inputMoneyToBuyLottos();
    this.printNumberOfLottos();
    this.createIssuedLottoList();
    this.inputLottoWinningNumber();
    this.inputLottoBonusNumber();
  }
  inputMoneyToBuyLottos() {
    MissionUtils.Console.readLine("구입금액을 입력해 주세요.", (moneyToBuyLottos) => {
      const regex = /^[1-9]+[0-9]*[0]{3}$/;
      if (!regex.test(moneyToBuyLottos))
        throw new Error("[ERROR] 구입 금액은 1000원 단위의 금액을 입력해주세요");
      this.#numberOfLottos = Number(moneyToBuyLottos)/1000;
    });
  }
  printNumberOfLottos() {
    MissionUtils.Console.print(`${this.#numberOfLottos}개를 구매했습니다.`);
  }
  createIssuedLottoList(){
    for(let i=0; i<this.#numberOfLottos; i++){
      const tempRandomNumbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      tempRandomNumbers.sort((a,b)=>a-b);
      const issuedLottoNumbers = new Lotto(tempRandomNumbers);
      MissionUtils.Console.print(`[${tempRandomNumbers.join(', ')}]`);
      this.#issuedLottosList.push(issuedLottoNumbers);
    }
  }
  inputLottoWinningNumber(){
    MissionUtils.Console.readLine("당첨 번호를 입력해 주세요.", (inputNumbers)=>{
      const winningNumbers = inputNumbers.split(",");
      if(winningNumbers.length !== 6)
        throw new Error("[ERROR] 로또 번호는 6개입니다");
      
      this.#lottoWinningNumbers = winningNumbers.map(v => Number(v));
      if(!this.#lottoWinningNumbers.every(v => v >= 1 && v <= 45))
        throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
      if(new Set(this.#lottoWinningNumbers).size != 6)
        throw new Error("[ERROR] 로또 번호는 서로 다른 6개의 숫자여야 합니다.");
    });
  }
  inputLottoBonusNumber(){
    MissionUtils.Console.readLine("보너스 번호를 입력해 주세요.", (inputNumber)=>{
      this.#lottoBonusNumber = Number(inputNumber);
    })
  }
}

module.exports = App;

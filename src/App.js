const Lotto = require("../src/Lotto");
const MissionUtils = require("@woowacourse/mission-utils");
const PRIZE_MONEY = [0,2000000000,30000000,1500000,50000,5000];
class App {
  #numberOfLottos;
  #issuedLottosList = new Array();
  #lottoWinningNumbers;
  #lottoBonusNumber;
  #totalLottosPrizeMoney = 0;
  play() {
    this.inputMoneyToBuyLottos();
    this.printNumberOfLottos();
    this.createIssuedLottoList();
    this.inputLottoWinningNumber();
    this.inputLottoBonusNumber();
    this.printLottoWinningResult();
    this.printRateOfReturn();
    MissionUtils.Console.close();
  }
  inputMoneyToBuyLottos() {
    MissionUtils.Console.readLine("구입금액을 입력해 주세요.", (moneyToBuyLottos) => {
      const regex = /^[1-9]+[0-9]*[0]{3}$/;
      if (!regex.test(moneyToBuyLottos))
        throw new Error("[ERROR] 구입 금액은 1000원 단위의 금액을 입력해주세요.");
      this.#numberOfLottos = Number(moneyToBuyLottos)/1000;
    });
  }
  printNumberOfLottos() {
    MissionUtils.Console.print(`${this.#numberOfLottos}개를 구매했습니다.`);
  }
  createIssuedLottoList(){
    for(let i=0; i<this.#numberOfLottos; i++){
      const tempRandomNumbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      tempRandomNumbers.sort((a,b) => a - b);
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
      if(!(this.#lottoBonusNumber>=1 && this.#lottoBonusNumber<=45))
        throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
      if(this.#lottoWinningNumbers.includes(this.#lottoBonusNumber))
        throw new Error("[ERROR] 보너스 번호는 당첨 번호와 다른 숫자여야 합니다.");
    })
  }
  printLottoWinningResult(){
    let countOfLottoWinning = [0,0,0,0,0,0];
    for(let i=0; i<this.#numberOfLottos; i++){
      const prize = this.getPrize(this.#issuedLottosList[i]);
      if(prize<=5)
        countOfLottoWinning[prize]++;
    }
    MissionUtils.Console.print(`3개 일치 (${PRIZE_MONEY[5].toLocaleString("ko-KR")}원) - ${countOfLottoWinning[5]}개`);
    MissionUtils.Console.print(`4개 일치 (${PRIZE_MONEY[4].toLocaleString("ko-KR")}원) - ${countOfLottoWinning[4]}개`);
    MissionUtils.Console.print(`5개 일치 (${PRIZE_MONEY[3].toLocaleString("ko-KR")}원) - ${countOfLottoWinning[3]}개`);
    MissionUtils.Console.print(`5개 일치, 보너스 볼 일치 (${PRIZE_MONEY[2].toLocaleString("ko-KR")}원) - ${countOfLottoWinning[2]}개`);
    MissionUtils.Console.print(`6개 일치 (${PRIZE_MONEY[1].toLocaleString("ko-KR")}원) - ${countOfLottoWinning[1]}개`);
    for(let i=1; i<6; i++)
      this.#totalLottosPrizeMoney += PRIZE_MONEY[i]*countOfLottoWinning[i];
  }
  printRateOfReturn(){
    const rateOfReturn = Math.round(this.#totalLottosPrizeMoney/this.#numberOfLottos)/10;
    MissionUtils.Console.print(`총 수익률은 ${rateOfReturn}%입니다.`);
  }
  getPrize(numbers){
    const countOfMatchNumber = numbers.getCountOfMatchNumber(this.#lottoWinningNumbers);
    if(countOfMatchNumber == 6){
      return 1;
    }
    if(countOfMatchNumber == 5){
      if(numbers.getCountOfMatchNumber(this.#lottoBonusNumber) == 1)
        return 2;
      return 3;
    }
    return 8 - countOfMatchNumber;
  }
}

module.exports = App;

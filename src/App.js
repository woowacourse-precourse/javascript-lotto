const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("../src/Lotto");

class App {
  play() {
    const ticket = this.inputMoeny();
    const lottoArr = this.buyingLotto(ticket);
    const winningNumber = new Lotto([this.consoleInput("당첨 번호를 입력해 주세요.\n")]);
    const bonusNumber = new Lotto(this.consoleInput("보너스 번호를 입력해 주세요.\n"));
    const winningArr = [0,0,0,0,0];
    lottoArr.forEach(outterArr =>{
      winningArr[this.lottoMatch(outterArr,[winningNumber],bonusNumber)]+=1
    })
  }

  createLotto(numbers) {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, numbers)
    .sort((a,b) => a - b)
  }

  inputMoeny() {
    let userInput = Number(this.consoleInput('구입 금액을 입력해 주세요.\n'));
    if(userInput%1000 === 0 && userInput > 0) return userInput/1000;
    throw new Error("[ERROR] 1,000원 단위로 구매할 수 있습니다.");
  }

  buyingLotto(ticket) {
    const ticketArr = [];
    this.consolePrint(`${ticket}개를 구매했습니다.`);
    while(0 < ticket) {
      const getCreateLotto = this.createLotto(6);
      ticketArr.push(getCreateLotto);
      this.consolePrint(`[${getCreateLotto.join(', ')}]`);
      ticket-=1;
    }
    return ticketArr;
  }

  consolePrint(printStr) {
    MissionUtils.Console.print(printStr);
  }

  consoleInput(inputStr) {
    let str = ""
    MissionUtils.Console.readLine(inputStr, (answer) => {
      str = answer;
    });
    return str;
  }

  lottoMatch(userLotto,winningNumber,bonusNumber){
    let ballCount = 0;
    let bonusBallCount = 0;
    winningNumber.forEach(element => {
      if(userLotto.includes(element)) ballCount+=1
    })
    if(userLotto.includes(bonusNumber) && ballCount === 5) bonusBallCount+=1

    if(ballCount === 6) return 0
    if(ballCount === 5 && bonusBallCount === 1) return 1
    if(ballCount === 5 && bonusBallCount !== 1) return 2
    if(ballCount === 4) return 3
    if(ballCount === 3) return 4
  }

}

module.exports = App;

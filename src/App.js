const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    const ticket = this.inputMoeny();
    this.buyingLotto(ticket)
  }

  createLotto(numbers) {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, numbers)
    .sort((a,b) => a - b)
  }

  inputMoeny() {
    let userInput = 0;
    MissionUtils.Console.readLine('구입 금액을 입력해 주세요.\n', (answer) => { 
      userInput = Number(answer);
    });
    if(userInput%1000 === 0 && userInput > 0) return userInput/1000;
    throw new Error("[ERROR] 1,000원 단위로 구매할 수 있습니다.");
  }

  buyingLotto(ticket) {
    const ticketArr = [];
    MissionUtils.Console.print(`${ticket}개를 구매했습니다.`)
    while(0 < ticket) {
      const getCreateLotto = this.createLotto(6)
      ticketArr.push(getCreateLotto);
      MissionUtils.Console.print(`[${getCreateLotto.join(', ')}]`);
      ticket-=1;
    }
    return ticketArr;
  }

}

module.exports = App;

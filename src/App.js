const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");

class App {
  constructor() {}
  buyLottoNum = new Array();

  play() {}

  lottoNum(answer) {
    console.readLine('구입금액을 입력 해주세요/n', (answer) => {
      console.log(answer);
    });
  }
  //제출 금액 만큼 lotto 구매하기
  changeLotto(answer) {
    let changeMoney = answer/1000;
    Console.print(`${changeLotto}개를 구매했습니다.`);
  }
  //구매한 lotto 갯수만큼 로또 번호 발행
  buyLottoNum() {
    for ( let i = 0; i < changeMoney.length; i++){
      let jackPot = Random.pickUniqueNumberInRange(1, 45, 6);
    };
    this.buyLottoNum.push(jackpot); 
    Console.print(buyLottoNum);
  }
  //당첨 번호 사용자로부터 입력 받기
  insertLottoNum () {
    Console.readLine('당첨 번호를 입력해 주세요/n', (answer)=> {
      Console.print(answer);
      return new Lotto(numbers);
    });
  }
}


module.exports = App;

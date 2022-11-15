const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");

//상금 
const first_Money = 2000000000;
const second_Money = 30000000;
const third_Money = 1500000;
const fourth_Money = 50000;
const fifth_Money = 5000;


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
  //당첨 번호 사용자로부터 입력 받기 + 보너스 번호 
  insertLottoNum () {
    Console.readLine('당첨 번호를 입력해 주세요/n', (answer)=> {
      Console.print(answer);
      return new Lotto(numbers);
    });
  }
  insertBonusNum() {
    Console.readLine('보너스 번호를 입력해 주세요/n', (number) => {
      if(this.insertLottoNum.numbers.indexOf(number)!=-1){
        return number;
        Console.print(number);
      } else if(this.insertLottoNum.numbers.indexOf(number)!=0) {
        throw Error('중복 된 숫자 입니다.'); 
      }
    });
  };
  //사용자 당첨 등수에 따른 상금 지정
  winningList() {
    let first = {count: 0, money: 0};
    let second = {count: 0, money: 0};
    let third = {count: 0, money: 0};
    let fourth = {count: 0, money: 0};
    let fifth = {count: 0, money: 0};


    const [numCount, bonusCount] = Lotto.checkLotto();
    for( let i = 0; i< checkLotto.length; i++){
      if(numCount[i] === 3){
        ++fifth.count;
        fifth.money += fifth_Money;
      }if(numCount[i] === 4){
        ++fourth.count;
        fourth.money += fourth_Money;
      }if(numCount[i] === 5){
        ++third.count;
        third.money += third_Money;
      }if(numCount[i] === 6){
        ++first.count;
        first.money += first_Money;
      }
    }
    if(bonusCount > 0){
      ++second.count;
      second.money += second_Money;
    }
  }
  //수익률 출력
}


module.exports = App;

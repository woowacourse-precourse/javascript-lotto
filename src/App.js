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

  play() {
    this.lottoNum(); //금액 입력
    this.changeLotto();//로또 발행
    this.insertLottoNum();
    this.insertBonusNum();
    this.winningList();
    this.finalResult();

  }

  lottoNum(answer) {
    MissionUtils.Console.readLine('구입금액을 입력 해주세요\n', (answer) => {
      console.log(answer);
    });
  }
  //제출 금액 만큼 lotto 구매하기
  changeLotto(answer) {
    let changeMoney = answer/1000;
    MissionUtils.Console.print(this.changeLotto() +' 개를 구매했습니다.');
  }
  //구매한 lotto 갯수만큼 로또 번호 발행
  buyLottoNum() {
    for ( let i = 0; i < changeMoney.length; i++){
      let jackPot = Random.pickUniqueNumberInRange(1, 45, 6);
    };
    this.buyLottoNum.push(jackpot); 
    MissionUtils.Console.print(buyLottoNum);
  }
  //당첨 번호 사용자로부터 입력 받기 + 보너스 번호 
  insertLottoNum () {
    MissionUtils.Console.readLine('당첨 번호를 입력해 주세요\n', (answer)=> {
      MissionUtils.Console.print(answer);
      return new Lotto(numbers);
    });
  }
  insertBonusNum() {
    MissionUtils.Console.readLine('보너스 번호를 입력해 주세요\n', (number) => {
      if(this.insertLottoNum.numbers.indexOf(number)!=-1){
        return number;
        MissionUtils.Console.print(number);
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
  //수익률 및 결과 출력
  finalResult () {
    MissionUtils.Console.print(
      `3개 일치 (5,000원) - ${fifth.count}개\n,
       4개 일치 (50,000원) - ${fourth.count}개\n,
       5개 일치 (1,500,000원) - ${fifth.count}개\n,
       5개 일치, 보너스 볼 일치 (30,000,000원) - ${second.count}개\n,
       6개 일치 (2,000,000원) - ${first.count}개\n
       총 수익률은 ${totalRatio()}입니다.
       `
    );
  }

  totalRatio() {
    const totalExpenses = lottoNum.answer;
    const totalIncome = (
      (fifth.count*fifth_Money) + 
      (fourth.count*fourth_Money)
      (third.count*third_Money)
      (second.count*second_Money)
      (first.count*first_Money)
    );

    const earningRatio = ((totalIncome/totalExpenses)*100).toFixed(1);
    return earningRatio;
  }

}


module.exports = App;

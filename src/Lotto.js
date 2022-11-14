const  MissionUtils  = require("@woowacourse/mission-utils");
const Coin = require("./Coin");
class Lotto {
  #numbers;
  userNumberList;
  prize = {
    "first":0,
    "second":0,
    "third":0,
    "fourth":0,
    "fifth":0,
  };
  bonus;
  profit;
  constructor(numbers) {
    const coin = new Coin();
    this.setWinningNumber();
    this.setBonusNumber();
     this.validate(numbers);
    this.#numbers = numbers;
    this.getUserNumber();
    this.resultPrint();
    this.Matching();
    this.getReward();
  }
  setWinningNumber(){
    MissionUtils.Console.readLine("당첨번호를 입력하세요",(answer)=>{
        this.numbers = answer.split(",");
        MissionUtils.Console.print(this.numbers)
    })// user 입력 값
}
  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    else if(numbers.some((i)=>{
      if(i<1 || i>45){
        return true;
      }
    })){
      throw new Error("[ERROR] 로또 번호는 1과 45사이의 숫자입니다.")
    }
    else if(numbers.some((i)=>{
      if(typeof i !== Number){
        return true;
      }
    })){
      throw new Error("[ERROR] 숫자만 입력 가능합니다.")
    }
  }
  
  // TODO: 추가 기능 구현

  setBonusNumber(){
    MissionUtils.Console.readLine("보너스 번호를 입력하세요",(answer)=>{
      this.bonus = answer;
    })
  }
  getUserNumber(){
    let randomNumbetList = [];
    for(let i=0;i<coin.userMoney;i++){
      this.userNumberList.push(randomNumbetList.push(MissionUtils.Console.pickUniqueNumbersInRange(1,45,6).sort((a,b)=>{return a-b;})));
      MissionUtils.Console.print(this.userNumberList[i]+"\n");
    }

  }
  Matching(){
    for(let i=0;i<this.userNumberList.length;i++){
      let point = this.userNumberList[i].fiter(i=>this.#numbers.includes(i)).length;
      if(point === 6){
        this.prize.first++;
        point = 0;
      }
      if(point === 5){
        if(this.userNumberList[i].includes(this.bonus)){
        this.prize.second++;
        point = 0;
      }else{
       this.prize.third++;
        point = 0;
      }
      }
      if(point === 4){
        this.prize.fourth++;
        point = 0;
      }
      if(point === 3){
        this.prize.fifth++;
        point = 0;
      }
      
    }
  }
  
  resultPrint(){
    MissionUtils.Console.print(`3개 일치(5,000원) - ${this.prize.fifth}개\n`);
    MissionUtils.Console.print(`4개 일치(50,000원) - ${this.prize.fourth}개\n`);
    MissionUtils.Console.print(`5개 일치(1,500,000원) - ${this.prize.third}개\n`);
    MissionUtils.Console.print(`5개 일치, 보너스 볼 일치(30,000,000원) - ${this.prize.second}개\n`);
    MissionUtils.Console.print(`6개 일치(2,000,000,000원) - ${this.prize.first}개\n`);
  }
  getReward(){
    let reward;
    reward = 2000000000 * this.prize.first + 30000000 * this.prize.second + 1500000 * this.prize.third + 50000 * this.prize.fourth + 5000 * this.prize.fifth;
    this.profit = reward/userMoney * 100;
    MissionUtils.Console.print(`총 수익률 ${this.profit}%입니다.`)
  }
}

module.exports = Lotto;

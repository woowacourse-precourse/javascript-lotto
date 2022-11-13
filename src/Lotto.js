const MissionUtils = require("@woowacourse/mission-utils");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if(numbers!==undefined){
      console.log(new Set([...numbers].filter((i)=>i!==',')).size);
      if(new Set([...numbers].filter((i)=>i!==',')).size<6) throw "[ERROR]"
      if ([...numbers].filter((i)=>i!==',').length !== 6) throw "[ERROR]"
      if(/[ㄱ-ㅎㅏ-ㅣ가-힣]/g.test(numbers)) throw "[ERROR]"
      if(/[a-zA-Z]/g.test(numbers)) throw "[ERROR]"
      ([...numbers].filter((i)=>i!==',').forEach((num)=>{
        if(num>'45' || num < '1') throw "[ERROR]"
      }))
    }
  }

  // TODO: 추가 기능 구현

  setComputerRandomNumber() {
    const computerNumbers = MissionUtils.Random.pickUniqueNumbersInRange(1,45,6);
    return computerNumbers;
  }

  getUserInputMoney() {
    MissionUtils.Console.readLine("구입금액을 입력해주세요.\n", (money) => {
      this.checkInputMoney(money)
      // this.createLottoNumArrays(money);
    });
  }
  checkInputMoney(money){
    let numberMoney=Number(money)
    if(numberMoney<0) throw "[ERROR]"
    if(money[0]==='0') throw "[ERROR]"
    if(numberMoney%1000!==0) throw "[ERROR]"
    if(numberMoney===0) throw "[ERROR]"
    this.createLottoNumArrays(numberMoney)
  }

  getUserLottoNumber(computerNumberArray,amountOfMoney) {
    MissionUtils.Console.readLine(
      "당첨 번호를 입력해 주세요.\n",
      (userLottoNumber) => {
        this.#numbers=userLottoNumber
        this.validate(this.#numbers)
        this.getUserBonusNumber(computerNumberArray, userLottoNumber,amountOfMoney);
      }
    );
  }

  getUserBonusNumber(computerNumberArray, userLottoNumber,amountOfMoney) {
    MissionUtils.Console.readLine(
      "보너스 번호를 입력해 주세요.\n",
      (bonusNumber) => {
        this.checkBonusNumber(bonusNumber)
        this.calculatePrizeLottery(
          computerNumberArray,
          userLottoNumber,
          Number(bonusNumber),
          amountOfMoney
        );
      }
    );
  }
  checkBonusNumber(bonusNumber){
    if(/[ㄱ-ㅎㅏ-ㅣ가-힣]/g.test(bonusNumber)) throw "한글 불가능"
    if(/[a-zA-Z]/g.test(bonusNumber)) throw "영어 불가능"
    if(Number(bonusNumber)<1 || Number(bonusNumber)>45) throw "1~45사이"
  }
  createLottoNumArrays(money) {
    let amountOfMoney = this.divideMoney(money);
    let computerNumberArray = [];
    for (let i = 0; i < amountOfMoney; i++) {
      computerNumberArray.push(this.setComputerRandomNumber());
    }
    this.showAmountOfMoney(amountOfMoney);
    this.showLottoArrays(computerNumberArray,amountOfMoney);
  }

  showAmountOfMoney(amount) {
    MissionUtils.Console.print(`${amount}개를 구매했습니다.`);
  }
  
  divideMoney(money) {
    let quotient = money / 1000;
    return quotient;
  }

  showLottoArrays(computerNumberArray,amountOfMoney) {
    computerNumberArray.forEach((e) => {
      MissionUtils.Console.print(e);
    });
    this.getUserLottoNumber(computerNumberArray,amountOfMoney);
  }

  calculatePrizeLottery(computerNumberArray, userLottoNumber, bonusNumber,amountOfMoney) {
    let userLottoArray = userLottoNumber.split(",").map((e) => Number(e));
    let countArray = [];
    let counted = 0;
    computerNumberArray.forEach((eachNumberArray) => {
      counted = this.checkLottery(eachNumberArray, userLottoArray, bonusNumber);
      countArray.push(counted);
    });
    this.checkPrizeAmount(countArray,amountOfMoney);
  }
  checkLottery(eachNumberArray, userLottoArray, bonusNumber) {
    let count = 0;
    let checkBonus = 0;
    eachNumberArray.forEach((comNumber) => {
      if (userLottoArray.includes(comNumber)) {
        count++;
      }
    });
    if (count === 5) {
      let bonus = this.checkLotteryHelper(eachNumberArray, bonusNumber);
      checkBonus = bonus;
    }
    return count + checkBonus;
  }

  checkLotteryHelper(eachNumberArray, bonusNumber) {
    if (eachNumberArray.includes(bonusNumber)) {
      return 2;
    }
  }
  checkPrizeAmount(countArray,amountOfMoney){
    let prizeObj={}
    for(const val of countArray){
      prizeObj[val]=(prizeObj[val]||0)+1
    }
    this.showPrizeLottery(prizeObj)
    this.rateofReturn(prizeObj,amountOfMoney)
  }
  showPrizeLottery(prizeObj) {
    MissionUtils.Console.print(`3개 일치 (5000원) - ${prizeObj['3'] ? prizeObj['3'] : 0}개`);
    MissionUtils.Console.print(`4개 일치 (50,000원) - ${prizeObj['4'] ? prizeObj['4'] : 0}개`);
    MissionUtils.Console.print(`5개 일치 (1,500,000원) - ${prizeObj['5'] ? prizeObj['5'] : 0}개`);
    MissionUtils.Console.print(`6개 일치 (2,000,000,000원) - ${prizeObj['6'] ? prizeObj['6'] : 0}개`);
    MissionUtils.Console.print(`5개 일치,보너스 볼 일치 (3,000,000원) - ${prizeObj['7'] ? prizeObj['7'] : 0}개`);
    MissionUtils.Console.close()
  }
  rateofReturn(prizeObj,amountOfMoney){
    let fifthPrize=5000
    let forthPrize=50000
    let thirdPrize=1500000
    let secondPrize=3000000
    let firstPrize=2000000000
    let totalMoney=0
    for(const num in prizeObj){
      if(num==='3') totalMoney+=(prizeObj[num]*fifthPrize)
      if(num==='4') totalMoney+=(prizeObj[num]*forthPrize)
      if(num==='5') totalMoney+=(prizeObj[num]*thirdPrize)
      if(num==='7') totalMoney+=(prizeObj[num]*secondPrize)
      if(num==='6') totalMoney+=(prizeObj[num]*firstPrize)
    }
    this.calculateRate(totalMoney,amountOfMoney)
  }

  calculateRate(totalMoney,amountOfMoney){
    let inputMoney=amountOfMoney*1000
    let total=totalMoney-inputMoney
    let percentOfMoney=total/inputMoney
    let sortedMoney=this.round(percentOfMoney)
    this.showRate(sortedMoney)
  }
  round(num) {
    if(num<0) return -100
    let m = Number((Math.abs(num) * 100).toPrecision(15));
    return Math.round(m) / 10 * Math.sign(num);
}
  showRate(money){
    MissionUtils.Console.print(`총 수익률은 ${money.toFixed(1)}% 입니다.`)
  }
}

module.exports = Lotto;

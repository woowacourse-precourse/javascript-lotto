const MissionUtils = require("@woowacourse/mission-utils");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if(numbers!==undefined){
      if(Number(numbers)>45) throw "[ERROR] 콤마로 구분해주세요"
      if (numbers.length!==6) throw "[ERROR] 6개의 숫자가 아닙니다"
      if(/[ㄱ-ㅎㅏ-ㅣ가-힣]/g.test(numbers)) throw "[ERROR] 한글은 불가능 합니다"
      if(/[a-zA-Z]/g.test(numbers)) throw "[ERROR] 영어는 불가능 합니다"
      numbers.forEach((num)=>{
        if(Number(num)>45) throw "[ERROR] 45보다 큰 숫자는 불가능합니다"
      })
      let len=numbers.filter((v,i)=>numbers.indexOf(v)===i)
      if(len.length!==6) throw "[ERROR] 중복은 불가능합니다"
    }
  }

  // TODO: 추가 기능 구현

  setComputerRandomNumber(amount) {
    const computerNumbers = []
    for (let i = 0; i < amount; i++) {
      computerNumbers.push(MissionUtils.Random.pickUniqueNumbersInRange(1,45,6))
    }
    return computerNumbers;
  }

  getUserInputMoney() {
    MissionUtils.Console.readLine("구입금액을 입력해주세요.\n", (money) => {
      this.checkInputMoney(money)
    });
  }
  checkInputMoney(money){
    if(money[0]==='0') throw "[ERROR] 앞자리 0 불가능"
    if(Number(money)%1000!==0) throw "[ERROR] 1000원 단위로 입력해주세요"
    // if(/[ㄱ-ㅎㅏ-ㅣ가-힣]/g.test(money)) throw "[ERROR] 한글 불가능"
    // if(/[a-zA-Z]/g.test(money)) throw "[ERROR] 영어 불가능"
    this.createLottoNumArrays(money)
  }

  getUserLottoNumber(computerNumberArray,amountOfMoney) {
    MissionUtils.Console.readLine(
      "당첨 번호를 입력해 주세요.\n",
      (userLottoNumber) => {
        this.#numbers=userLottoNumber.split(',')
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
    if(/[ㄱ-ㅎㅏ-ㅣ가-힣]/g.test(bonusNumber)) throw "[ERROR] 한글 불가능"
    if(/[a-zA-Z]/g.test(bonusNumber)) throw "[ERROR] 영어 불가능"
    if(Number(bonusNumber)<1 || Number(bonusNumber)>45) throw "[ERROR] 1~45사이"
  }

  createLottoNumArrays(money) {
    let amountOfMoney = Number(money)/1000
    let computerNumberArray=this.setComputerRandomNumber(amountOfMoney)
    this.showLottoArrays(amountOfMoney,computerNumberArray,amountOfMoney);
  }

  // showAmountOfMoney(amount,computerNumberArray,amountOfMoney) {
  //   // MissionUtils.Console.print(`${amount}개를 구매했습니다.`);
  //   this.showLottoArrays(amount,computerNumberArray,amountOfMoney);
  // }
  
  // divideMoney(money) {
  //   let quotient = Number(money) / 1000;
  //   return quotient;
  // }

  async showLottoArrays(amount,computerNumberArray,amountOfMoney) {
    MissionUtils.Console.print(`${amount}개를 구매했습니다.`);
    computerNumberArray.forEach((computerNumbers) => {
      MissionUtils.Console.print(computerNumbers);
    });
    this.getUserLottoNumber(computerNumberArray,amountOfMoney);
  }

  calculatePrizeLottery(computerNumberArray, userLottoNumber, bonusNumber,amountOfMoney) {
    let userLottoArray = userLottoNumber.split(",").map((e) => Number(e));
    // let countArray = [];
    // let counted = 0;
    // computerNumberArray.forEach((eachNumberArray) => {
      //   counted = this.checkLottery(eachNumberArray, userLottoArray, bonusNumber);
      //   countArray.push(counted);
      // });
    this.checkLottery(computerNumberArray,userLottoArray,bonusNumber)
    // 여기 고쳐야함
    this.checkPrizeAmount(countArray,amountOfMoney);
  }
  checkLottery(computerNumberArray, userLottoArray, bonusNumber) {
    let count = 0;
    let checkBonus = [];
    let countArray=[]
    // 각각의 컴퓨터가 생성한 숫자와 사용자가 생성한 숫자를 비교해서 count를 올려야함
    computerNumberArray.forEach((nums)=>{
      countArray.push(nums.filter(x=>userLottoArray.includes(x)).length)
    })
    // count가 5면 보너스 숫자에 따라서 2등과 3등을 결정
    // 5가 2명일때 -> 둘다 검사해야함 -> 구현ok
    console.log(countArray.includes(5));
    if(countArray.includes(5)){
      let bonus = this.checkLotteryHelper(computerNumberArray, bonusNumber);
      checkBonus.push(bonus)
    }
    // if (count === 5) {
    //   let bonus = this.checkLotteryHelper(computerNumberArray, bonusNumber);
    //   checkBonus = bonus;
    // }
    return [count,checkBonus]
  }

  checkLotteryHelper(computerNumberArray, bonusNumber) {
    computerNumberArray.forEach((nums)=>{
      if(nums.includes(bonusNumber)) return 2;
    })
    // if (computerNumberArray.includes(bonusNumber)) {
    //   return 2;
    // }
  }
  checkPrizeAmount(countArray,amountOfMoney){
    let prizeObj={}
    for(const val of countArray){
      prizeObj[val]=(prizeObj[val]||0)+1
    }
    this.rateofReturn(prizeObj,amountOfMoney)
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
    this.calculateRate(prizeObj,totalMoney,amountOfMoney)
  }

  calculateRate(prizeObj,totalMoney,amountOfMoney){
    let inputMoney=amountOfMoney*1000
    let total=totalMoney-inputMoney
    let percentOfMoney=total/inputMoney
    let sortedMoney=this.round(percentOfMoney)
    this.showPrizeAndRate(prizeObj,sortedMoney)
  }
  round(num) {
    if(num<0) return 0
    let m = Number((Math.abs(num) * 100).toPrecision(15));
    return Math.round(m) / 10 * Math.sign(num);
}
  showPrizeAndRate(prizeObj,money){
    MissionUtils.Console.print(`3개 일치 (5000원) - ${prizeObj['3'] ? prizeObj['3'] : 0}개`);
    MissionUtils.Console.print(`4개 일치 (50,000원) - ${prizeObj['4'] ? prizeObj['4'] : 0}개`);
    MissionUtils.Console.print(`5개 일치 (1,500,000원) - ${prizeObj['5'] ? prizeObj['5'] : 0}개`);
    MissionUtils.Console.print(`6개 일치 (2,000,000,000원) - ${prizeObj['6'] ? prizeObj['6'] : 0}개`);
    MissionUtils.Console.print(`5개 일치,보너스 볼 일치 (3,000,000원) - ${prizeObj['7'] ? prizeObj['7'] : 0}개`);
    MissionUtils.Console.print(`총 수익률은 ${money.toFixed(1)}% 입니다.`)
    MissionUtils.Console.close()
  }
}

module.exports = Lotto;

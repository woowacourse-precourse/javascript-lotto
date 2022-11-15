const MissionUtils = require("@woowacourse/mission-utils");
const str=require("./Constant")
const nums=require("./Number")

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers !== undefined) {
      if (Number(numbers) > 45) throw str.COMMA;
      if (numbers.length !== 6) throw str.LEN_NOT_SIX;
      if (/[ㄱ-ㅎㅏ-ㅣ가-힣]/g.test(numbers)) throw str.KOREA_IMPOSSIBLE;
      if (/[a-zA-Z]/g.test(numbers)) throw str.ENGLISH_IMPOSSIBLE;
      numbers.forEach((num) => {
        if (Number(num) > 45) throw str.OVER_45_IMPOSSIBLE;
      });
      let len = numbers.filter((v, i) => numbers.indexOf(v) === i);
      if (len.length !== 6) throw str.OVERLAP_IMPOSSIBLE;
    }
  }

  // TODO: 추가 기능 구현

  setComputerRandomNumber(amount) {
    let computerNumbers=[];
    for (let i = 0; i < amount; i++) {
      computerNumbers.push(MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6))
    }
    return computerNumbers;
  }

  getUserInputMoney() {
    MissionUtils.Console.readLine(str.MONEY_INPUT, (money) => {
      this.checkInputMoney(money);
    });
  }

  checkInputMoney(money) {
    if (money[0] === "0") throw str.PREFIX_ZERO_IMPOSSIBLE;
    if (Number(money)<0) throw str.MINUS
    if (Number(money) % 1000 !== 0) throw str.UNIT_1000;
    this.createLottoNumArrays(money);
  }

  getUserLottoNumber(computerNumberArray, amountOfMoney) {
    MissionUtils.Console.readLine(
      str.USER_LOTTO_NUM,
      (userLottoNumber) => {
        this.#numbers = userLottoNumber.split(",");
        this.validate(this.#numbers);
        this.getUserBonusNumber(computerNumberArray,userLottoNumber,amountOfMoney);
      }
    );
  }

  getUserBonusNumber(computerNumberArray, userLottoNumber, amountOfMoney) {
    MissionUtils.Console.readLine(
      str.BONUS_NUM,
      (bonusNumber) => {
        this.checkBonusNumber(bonusNumber,userLottoNumber);
        this.calculatePrizeLottery(computerNumberArray,userLottoNumber,Number(bonusNumber),amountOfMoney);
      }
    );
  }

  checkBonusNumber(bonusNumber,userLottoNumber) {
    let userNumArr=userLottoNumber.split(',').map((num)=>Number(num))
    if (/[ㄱ-ㅎㅏ-ㅣ가-힣]/g.test(bonusNumber)) throw str.KOREA_IMPOSSIBLE;
    if (/[a-zA-Z]/g.test(bonusNumber)) throw str.ENGLISH_IMPOSSIBLE;
    if (Number(bonusNumber) < 1 || Number(bonusNumber) > 45) throw str.ONE_TO_FOUTYFIVE;
    if(userNumArr.includes(Number(bonusNumber))) throw str.CHECK_OVERLAP_BONUS
  }

  createLottoNumArrays(money) {
    let amountOfMoney = Number(money) / 1000;
    let computerNumberArray = this.setComputerRandomNumber(amountOfMoney);
    this.showLottoArrays(amountOfMoney, computerNumberArray);
  }

  showLottoArrays(amount, computerNumberArray ) {
    MissionUtils.Console.print(`${amount}${str.AMOUNT_LONG}`);
    computerNumberArray.forEach((computerNumbers) => {
      MissionUtils.Console.print("["+computerNumbers+"]");
    });
    MissionUtils.Console.print('')
    this.getUserLottoNumber(computerNumberArray, amount);
  }

  calculatePrizeLottery(computerNumberArray,userLottoNumber,bonusNumber,amountOfMoney) {
    let userLottoArray = userLottoNumber.split(",").map((e) => Number(e));
    let [getCountedArray, getBonusArray] = this.checkLottery(computerNumberArray,userLottoArray,bonusNumber
    );
    this.checkPrizeAmount(getCountedArray, getBonusArray, amountOfMoney);
  }

  checkLottery(computerNumberArray, userLottoArray, bonusNumber) {
    let countArray = [];
    computerNumberArray.forEach((nums) => {
      countArray.push(nums.filter((x) => userLottoArray.includes(x)).length);
    });
    let [countedArr,calcBonus]=this.calculateBonus(computerNumberArray,countArray,bonusNumber)
    return [countedArr,calcBonus];
  }

  calculateBonus(computerNumberArray,countArray,bonusNumber){
    let bonusArr=[]
    let checkBonus;
    if (countArray.includes(5)) {
      let idx=countArray.indexOf(5)
      while(idx!==-1){
        bonusArr.push(idx)
        idx=countArray.indexOf(5,idx+1)
      }
      checkBonus=this.checkBounsHelper(bonusArr,computerNumberArray,bonusNumber)
    }
    return [countArray,checkBonus]
  }
  checkBounsHelper(bonusArr,computerNumberArray,bonusNumber){
    let checkBonus=[]
    bonusArr.forEach((nums)=>{
      if(computerNumberArray[nums].includes(bonusNumber)){
        checkBonus.push(nums)
      }
    })
    return checkBonus
  }

  checkPrizeAmount(getCountedArray, getBonusArrays, amountOfMoney) {
    let prizeObj = {};
    for (let val of getCountedArray) {
      prizeObj[val] = (prizeObj[val] || 0) + 1;
      if(getBonusArrays.length!==0 && val===5 ) {
        prizeObj['7']=prizeObj['5']
        delete prizeObj['5']
      }
    }
    this.rateofReturn(prizeObj, amountOfMoney);
  }

  rateofReturn(prizeObj, amountOfMoney) {
    let totalMoney = 0;
    for (const num in prizeObj) {
      if (num === "3") totalMoney += prizeObj[num] * nums.fifthPrize;
      if (num === "4") totalMoney += prizeObj[num] * nums.forthPrize;
      if (num === "5") totalMoney += prizeObj[num] * nums.thirdPrize;
      if (num === "7") totalMoney += prizeObj[num] * nums.secondPrize;
      if (num === "6") totalMoney += prizeObj[num] * nums.firstPrize;
    }
    this.calculateRate(prizeObj, totalMoney, amountOfMoney);
  }

  calculateRate(prizeObj, totalMoney, amountOfMoney) {
    let inputMoney = amountOfMoney * 1000;
    let total = totalMoney - inputMoney;
    let percentOfMoney = total / inputMoney;
    let sortedMoney = this.round(percentOfMoney);
    this.showPrizeAndRate(prizeObj, sortedMoney);
  }
  round(num) {
    if (num < 0) return 0;
    let m = Number((Math.abs(num) * 100).toPrecision(15));
    return (Math.round(m) / 10) * Math.sign(num);
  }
  showPrizeAndRate(prizeObj, money) {
    MissionUtils.Console.print(str.PRIZE_STATS)
    MissionUtils.Console.print(`"${str.FIFTH_PRIZE} ${prizeObj["3"] ? prizeObj["3"] : 0}${str.AMOUNT_SHORT}"`);
    MissionUtils.Console.print(`"${str.FORTH_PRIZE} ${prizeObj["4"] ? prizeObj["4"] : 0}${str.AMOUNT_SHORT}"`);
    MissionUtils.Console.print(`"${str.THIRD_PRIZE} ${prizeObj["5"] ? prizeObj["5"] : 0}${str.AMOUNT_SHORT}"`);
    MissionUtils.Console.print(`"${str.SECOND_PRIZE} ${prizeObj["7"] ? prizeObj["7"] : 0}${str.AMOUNT_SHORT}"`);
    MissionUtils.Console.print(`"${str.FIRST_PRIZE} ${prizeObj["6"] ? prizeObj["6"] : 0}${str.AMOUNT_SHORT}"`);
    MissionUtils.Console.print(`"${str.TOTAL_PRIZE_RATE} ${money.toFixed(1)}${str.PERCENT}"`);
    MissionUtils.Console.close();
  }
}

module.exports = Lotto;

const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require('./Lotto.js');

function getLottoPurchaseAmount(){
  var inputMoney = 0;
  MissionUtils.Console.readLine('구입금액을 입력해 주세요.', (input) => {
    inputMoney = moneyValidationCheck(input);
  });
  return inputMoney;
}

function isNumeric(str) {
  if (typeof str != "string") return false;
  return !isNaN(str) && !isNaN(parseFloat(str));
}

function toLottoNumber(number){
  if(!isNumeric) throw new Error("[ERROR] 로또 번호는 1부터 45까지 수 중 하나이어야 합니다.");
  if(number > 45 || number < 1) throw new Error("[ERROR] 로또 번호는 1부터 45까지 수 중 하나이어야 합니다.");
  return Number(number);
}

function moneyValidationCheck(money){
  if(!isNumeric(money)){
    throw new Error("[ERROR] 구입금액은 숫자이어야 합니다. : " + money);
  }
  if(Number(money) % 1000 != 0){
    throw new Error("[ERROR] 구입금액은 1,000원 단위여야 합니다. : " + money);
  }
  if(Number(money) < 0){
    throw new Error("[ERROR] 올바른 구입 금액을 입력해주세요. : " + money);
  }
  return Number(money);
}

function lottoValidationCheck(lottery){
  lottery.sort(function(a, b) {
    return a - b;
  });
  if(lottery.length != 6){
    throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
  }
  const lotteryToSet = new Set(lottery);
  if(lotteryToSet.size < 6){
    throw new Error("[ERROR] 로또 번호는 중복될 수 없습니다.");
  }
  lottery.forEach(number => toLottoNumber(number));
  return lottery;
}

function issueLotto(count){
  var purchasedLottoArray = [];
  MissionUtils.Console.print("" + count + "개를 구매했습니다.");
  for(var i = 0; i < count; i++){
    const lotto = new Lotto(generateRandomNumbers());
    const numberToString = "[" + lotto.getNumbers().join(", ") + "]";
    MissionUtils.Console.print(numberToString);
    purchasedLottoArray.push(lotto);
  }
  return purchasedLottoArray;
}

function generateRandomNumbers(){
  const numberArray = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
  numberArray.sort(function(a, b) {
    return a - b;
  });
  return numberArray;
}

function getWinningNumber(){
  var inputNumbers = [];
  MissionUtils.Console.readLine('당첨 번호를 입력해 주세요.', (input) => {
    inputNumbers = lottoValidationCheck(input.split(',')).map(Number);
  });
  return inputNumbers;
}

function getBounusNumber(winningNumber){
  var bonusNumber = 0;
  MissionUtils.Console.readLine('보너스 번호를 입력해 주세요.', (input) => {
    bonusNumber = toLottoNumber(input);
    if(winningNumber.includes(bonusNumber)){
      throw new Error("[ERROR] 로또 번호는 중복될 수 없습니다.");
    }
  });
  return bonusNumber;
}

function calculateProfit(lottoArray, winningNumber, bonusNumber){
  MissionUtils.Console.print("당첨 통계");
  MissionUtils.Console.print("---");
  var matches = [0,0,0,0,0,0,0]; // Array that stores the number of matches (index == matches).
  var bonusMatch = 0;  
  lottoArray.forEach(function(lottery){
    currentLotto = lottery.getNumbers();
    const count = countMatch(currentLotto, winningNumber);
    if(count == 5 && currentLotto.includes(bonusNumber)){
      bonusMatch++;
      matches[count]--;
    }
    matches[count]++;
  });
  printPrize(matches, bonusMatch);
  return getProfit(matches, bonusMatch);
}

function countMatch(array1, array2){
  var count = 0;
  for(var i = 0; i < array1.length; i++){
    if(array2.includes(array1[i])) count++;
  }
  return count;
}

function getProfit(matches, bonusMatch){
  var profit = 0;
  const prize = [0,0,0,5000,50000,1500000,2000000000];
  const bonusPrize = 30000000;
  for(var i = 0; i < prize.length; i++){
    eachPrize = prize[i] * matches[i];
    profit += eachPrize;
  }
  profit += bonusPrize * bonusMatch;
  return profit;
}

function printPrize(matches, bonusMatch){
  const prize = [0,0,0,"5,000","50,000","1,500,000","2,000,000,000"];
  const bonusPrize = "30,000,000";
  for(var i = 3; i < 6; i++){
    MissionUtils.Console.print("" + i + "개 일치 (" + prize[i] + "원) - " + matches[i] + "개");
  }
  MissionUtils.Console.print("5개 일치, 보너스 볼 일치 (" + bonusPrize + "원) - " + bonusMatch + "개");
  MissionUtils.Console.print("6개 일치 (" + prize[6] + "원) - " + matches[6] + "개");
}

function printProfit(spend, profit){
  const yieldAmount = (profit/spend)*100;
  const yieldRounded = yieldAmount.toFixed(1);
  MissionUtils.Console.print("총 수익률은 " + yieldRounded +"%입니다.");
}

class App {
  constructor() {
    this.winningNumber = [];
    this.bonusNumber = 0;
    this.lottoCount = 0;
    this.lottoArray = [];
    this.profit = 0;
  }
  play() {
    this.playLotto();
  }
  playLotto(){
    this.lottoCount = getLottoPurchaseAmount() / 1000;
    this.lottoArray = issueLotto(this.lottoCount);
    this.winningNumber = getWinningNumber();
    this.bonusNumber = getBounusNumber(this.winningNumber);
    this.profit = calculateProfit(this.lottoArray, this.winningNumber, this.bonusNumber);
    printProfit( this.lottoCount*1000, this.profit );
  }
}

module.exports = App;

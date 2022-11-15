const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
const Bonus = require("./Bonus");
const Payment = require("./Payment");

class Game {
  constructor() {
  }

  startLottery() {
    this.getUserPayment();
  }

  getUserPayment() { 
    MissionUtils.Console.readLine("구입금액을 입력해주세요 : \n", (userInput) => {
      const payment = Number(userInput);
      (() => new Payment(payment))()
      const THOUSAND = 1000;
      const numOfTickets = userInput / THOUSAND;
      this.generateGuessNumbers(numOfTickets);
    });
  }

  generateGuessNumbers(numOfTickets) {
    const guessNumbersTotal = [];
    const MIN_LOTTO_NUMBER = 1;
    const MAX_LOTTO_NUMBER = 45;
    const LOTTO_NUMBERS = 6;
    for (let i = 0; i < numOfTickets; i += 1) {
      const guessNumbers = MissionUtils.Random.pickUniqueNumbersInRange(MIN_LOTTO_NUMBER, MAX_LOTTO_NUMBER, LOTTO_NUMBERS).sort((a, b) => a - b);
      guessNumbersTotal[i] = guessNumbers;
    }
    this.printNumTickets(numOfTickets, guessNumbersTotal);
  }

  printNumTickets(numOfTickets, guessNumbersTotal) {
    MissionUtils.Console.print(`\n${numOfTickets}개를 구매했습니다.`);
    this.printGuessNumbersTotal(numOfTickets, guessNumbersTotal);
  }

  printGuessNumbersTotal(numOfTickets, guessNumbersTotal) {
    const stringArray = this.numArraytoStringArray(guessNumbersTotal);
    stringArray.forEach((guessNumbers) => {
      MissionUtils.Console.print(guessNumbers);
    }); 
    this.getWinningNumbers(guessNumbersTotal, numOfTickets);
  }
  
  numArraytoStringArray (numArray) {
    const stringArray = [];
    for (let i = 0; i < numArray.length; i += 1) {
      let newArr = "\"[";
      const commaSpace = ", ";
      for (let j = 0; j < numArray[i].length; j += 1) {
          newArr = newArr + String(numArray[i][j]) + commaSpace;
      }
      newArr = newArr.slice(0, -2);
      newArr += "]\"";
      stringArray.push(newArr);
    }
    return stringArray;
  }

  getWinningNumbers(guessNumbersTotal, numOfTickets) { 
    MissionUtils.Console.readLine("\n당첨 번호를 입력해 주세요.\n", (userInput) => {
      const winningNumArray = userInput.split(",").map((number) => Number(number));
      (() => new Lotto(winningNumArray))()
      this.compareGuessAndWinning(guessNumbersTotal, winningNumArray, numOfTickets);
    });
  }

  compareGuessAndWinning(guessNumbersTotal, winningNumArray, numOfTickets) {
    let matchCountTotal = [];
    matchCountTotal = guessNumbersTotal.map((guessNumbers) => {
      const matchCount = guessNumbers.filter((guessNumber) => winningNumArray.includes(guessNumber)).length;
      return matchCount;
    });
    this.getBonusNumber(guessNumbersTotal, matchCountTotal, numOfTickets, winningNumArray);
  }

  getBonusNumber(guessNumbersTotal, matchCountTotal, numOfTickets, winningNumArray) {
    MissionUtils.Console.readLine("\n보너스 번호를 입력해 주세요.\n", (userInput) => {
      const bonusNumber = Number(userInput);
      (() => new Bonus(bonusNumber, winningNumArray))()
      this.compareGuessandBounus(guessNumbersTotal, matchCountTotal, bonusNumber, numOfTickets);
    });
  }

  compareGuessandBounus(guessNumbersTotal, matchCountTotal, bonusNumber, numOfTickets) {
    const bonusMatchTotal = matchCountTotal.map(
      (matchCount, index) => {
        if (matchCount !== 5) {
          return null;
        }
        return guessNumbersTotal[index].includes(bonusNumber);
      }
    );
    this.getWinStats(matchCountTotal, bonusMatchTotal, numOfTickets);
  }

  getWinStats(matchCountTotal, bonusMatchTotal, numOfTickets) {
    const winStats = new Map();
    winStats.set("3개 일치 (5,000원)", matchCountTotal.filter((matchCount) => matchCount === 3).length);
    winStats.set("4개 일치 (50,000원)", matchCountTotal.filter((matchCount) => matchCount === 4).length);
    winStats.set("5개 일치 (1,500,000원)", bonusMatchTotal.filter((bonusMatch) => bonusMatch === false).length);
    winStats.set("5개 일치, 보너스 볼 일치 (30,000,000원)", bonusMatchTotal.filter((bonusMatch) => bonusMatch === true).length);
    winStats.set("6개 일치 (2,000,000,000원)", matchCountTotal.filter((matchCount) => matchCount === 6).length);
    this.getEarningRate(winStats, numOfTickets);
  }

  getEarningRate(winStats, numOfTickets) {
    const FIVE_THOUSAND = 5000;
    const FIFTY_THOUSAND = 50000;
    const ONE_POINT_FIVE_MILLION = 1500000;
    const THIRTY_MILLION = 30000000;
    const TWO_BILLION = 2000000000; 
    const earnings = (winStats.get("3개 일치 (5,000원)") * FIVE_THOUSAND
      + winStats.get("4개 일치 (50,000원)") * FIFTY_THOUSAND
      + winStats.get("5개 일치 (1,500,000원)") * ONE_POINT_FIVE_MILLION
      + winStats.get("5개 일치, 보너스 볼 일치 (30,000,000원)") * THIRTY_MILLION
      + winStats.get("6개 일치 (2,000,000,000원)") * TWO_BILLION);
    const earningRate = this.roundOffToNearestTenth((earnings / (numOfTickets * 1000)) * 100);
    this.printWinStats(winStats, earningRate);
  }

  roundOffToNearestTenth(number) {
    const DECIMAL_PLACES = 1; 
    const roundedResult = Number(`${Math.round(Number(`${number}e${DECIMAL_PLACES}`))}e-${DECIMAL_PLACES}`).toFixed(DECIMAL_PLACES);
    return roundedResult;
  }

  printWinStats(winStats, earningRate) {
    MissionUtils.Console.print("\n당첨 통계\n---");
    winStats.forEach((value, key) => {
      MissionUtils.Console.print(`${key} - ${value}개`);
    });
    MissionUtils.Console.print(`총 수익률은 ${earningRate}%입니다.`);
  }

  EndLottery() {
    MissionUtils.Console.close();
  }
}

module.exports = Game;
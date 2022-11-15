const MissionUtils = require("@woowacourse/mission-utils");
const { PAY_UNIT, LOTTO_NUMBER, PRIZE_UNITS, ROUND_OFF, MESSAGES } = require('./Constants');
const Lotto = require("./Lotto");
const Bonus = require("./Bonus");
const Payment = require("./Payment");

class Game {

  startLottery() {
    this.getUserPayment();
  }

  getUserPayment() { 
    MissionUtils.Console.readLine(MESSAGES.ENTER_PAYMENT, (userInput) => {
      const payment = Number(userInput);
      (() => new Payment(payment))()
      const numOfTickets = userInput / PAY_UNIT;
      this.generateGuessNumbers(numOfTickets);
    });
  }

  generateGuessNumbers(numOfTickets) {
    const guessNumbersTotal = [];
    for (let i = 0; i < numOfTickets; i += 1) {
      const guessNumbers = MissionUtils.Random.pickUniqueNumbersInRange(LOTTO_NUMBER.MIN, LOTTO_NUMBER.MAX, LOTTO_NUMBER.NUMS).sort((a, b) => a - b);
      guessNumbersTotal[i] = guessNumbers;
    }
    this.printNumTickets(numOfTickets, guessNumbersTotal);
  }

  printNumTickets(numOfTickets, guessNumbersTotal) {
    MissionUtils.Console.print(`\n${numOfTickets}${MESSAGES.PURCHASED_AMOUNT}`);
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
      const COMMA_SPACE = ", ";
      for (let j = 0; j < numArray[i].length; j += 1) {
          newArr = newArr + String(numArray[i][j]) + COMMA_SPACE;
      }
      newArr = newArr.slice(0, -2);
      newArr += "]\"";
      stringArray.push(newArr);
    }
    return stringArray;
  }

  getWinningNumbers(guessNumbersTotal, numOfTickets) { 
    MissionUtils.Console.readLine(MESSAGES.ENTER_WINNINGNUM, (userInput) => {
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
    MissionUtils.Console.readLine(MESSAGES.ENTER_BONUSNUM, (userInput) => {
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
    winStats.set(MESSAGES.THREE_MATCHED, matchCountTotal.filter((matchCount) => matchCount === 3).length);
    winStats.set(MESSAGES.FOUR_MATCHED, matchCountTotal.filter((matchCount) => matchCount === 4).length);
    winStats.set(MESSAGES.FIVE_MATCHED, bonusMatchTotal.filter((bonusMatch) => bonusMatch === false).length);
    winStats.set(MESSAGES.FIVE_PLUS_BONUS_MATCHED, bonusMatchTotal.filter((bonusMatch) => bonusMatch === true).length);
    winStats.set(MESSAGES.SIX_MATCHED, matchCountTotal.filter((matchCount) => matchCount === 6).length);
    this.getEarningRate(winStats, numOfTickets);
  }

  getEarningRate(winStats, numOfTickets) {
    const earnings = (winStats.get(MESSAGES.THREE_MATCHED) * PRIZE_UNITS.FIVE_THOUSAND
      + winStats.get(MESSAGES.FOUR_MATCHED) * PRIZE_UNITS.FIFTY_THOUSAND
      + winStats.get(MESSAGES.FIVE_MATCHED) * PRIZE_UNITS.ONE_POINT_FIVE_MILLION
      + winStats.get(MESSAGES.FIVE_PLUS_BONUS_MATCHED) * PRIZE_UNITS.THIRTY_MILLION
      + winStats.get(MESSAGES.SIX_MATCHED) * PRIZE_UNITS.TWO_BILLION);
    const earningRate = this.roundOffToNearestTenth((earnings / (numOfTickets * 1000)) * 100);
    this.printWinStats(winStats, earningRate);
  }

  roundOffToNearestTenth(number) {
    const roundedResult = Number(`${Math.round(Number(`${number}e${ROUND_OFF.DECIMAL_PLACES}`))}e-${ROUND_OFF.DECIMAL_PLACES}`).toFixed(ROUND_OFF.DECIMAL_PLACES);
    return roundedResult;
  }

  printWinStats(winStats, earningRate) {
    MissionUtils.Console.print(MESSAGES.WIN_STATS);
    winStats.forEach((value, key) => {
      MissionUtils.Console.print(`${key} - ${value}개`);
    });
    MissionUtils.Console.print(`${MESSAGES.EARNING_RATE}${earningRate}${MESSAGES.PERCENT}`);
  }

  EndLottery() {
    MissionUtils.Console.close();
  }
}

module.exports = Game;
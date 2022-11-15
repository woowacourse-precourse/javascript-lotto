const MissionUtils = require("@woowacourse/mission-utils");
const { LOTTO_NUMBER, PRIZE_UNITS, ROUND_OFF, MESSAGES } = require('./Constants');
const Game = require("./Game");

class Domain {
    constructor() {
        this.game = new Game();
    }

    generateGuessNumbers(numOfTickets) {
        const guessNumbersTotal = [];
        for (let i = 0; i < numOfTickets; i += 1) {
          const guessNumbers = MissionUtils.Random.pickUniqueNumbersInRange(LOTTO_NUMBER.MIN, LOTTO_NUMBER.MAX, LOTTO_NUMBER.NUMS).sort((a, b) => a - b);
          guessNumbersTotal[i] = guessNumbers;
        }
        this.game.printNumTickets(numOfTickets, guessNumbersTotal);
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

      compareGuessAndWinning(guessNumbersTotal, winningNumArray, numOfTickets) {
        let matchCountTotal = [];
        matchCountTotal = guessNumbersTotal.map((guessNumbers) => {
          const matchCount = guessNumbers.filter((guessNumber) => winningNumArray.includes(guessNumber)).length;
          return matchCount;
        });
        this.game.getBonusNumber(guessNumbersTotal, matchCountTotal, numOfTickets, winningNumArray);
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
        this.game.printWinStats(winStats, earningRate);
      }
    
      roundOffToNearestTenth(number) {
        const roundedResult = Number(`${Math.round(Number(`${number}e${ROUND_OFF.DECIMAL_PLACES}`))}e-${ROUND_OFF.DECIMAL_PLACES}`).toFixed(ROUND_OFF.DECIMAL_PLACES);
        return roundedResult;
      }
    

}

module.exports = Domain;
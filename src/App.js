const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
const Bonus = require("./Bonus");

function roundOffToNearestTenth(number) {
  const DECIMAL_PLACES = 1; 
  const roundedResult = Number(`${Math.round(Number(`${number}e${DECIMAL_PLACES}`))}e-${DECIMAL_PLACES}`).toFixed(DECIMAL_PLACES);
  return roundedResult;
}

function getEarningRate(winStats, numOfTickets) { 
  const earnings = (winStats.get("3개 일치 (5,000원)") * 5000
    + winStats.get("4개 일치 (50,000원)") * 50000
    + winStats.get("5개 일치 (1,500,000원)") * 1500000
    + winStats.get("5개 일치, 보너스 볼 일치 (30,000,000원)") * 30000000
    + winStats.get("6개 일치 (2,000,000,000원)") * 2000000000);
  const earningRate = roundOffToNearestTenth((earnings / (numOfTickets * 1000)) * 100);
  printWinStats(winStats, earningRate);
}

function getWinStats(matchCountTotal, bonusMatchTotal, numOfTickets) {
  const winStats = new Map();
  winStats.set("3개 일치 (5,000원)", matchCountTotal.filter((matchCount) => matchCount === 3).length);
  winStats.set("4개 일치 (50,000원)", matchCountTotal.filter((matchCount) => matchCount === 4).length);
  winStats.set("5개 일치 (1,500,000원)", bonusMatchTotal.filter((bonusMatch) => bonusMatch === false).length);
  winStats.set("5개 일치, 보너스 볼 일치 (30,000,000원)", bonusMatchTotal.filter((bonusMatch) => bonusMatch === true).length);
  winStats.set("6개 일치 (2,000,000,000원)", matchCountTotal.filter((matchCount) => matchCount === 6).length);
  getEarningRate(winStats, numOfTickets);
}

function compareGuessandBounus(guessNumbersTotal, matchCountTotal, bonusNumber, numOfTickets) {
  const bonusMatchTotal = matchCountTotal.map(
    (matchCount, index) => {
      if (matchCount !== 5) {
        return null;
      }
      return guessNumbersTotal[index].includes(bonusNumber);
    }
  );
  getWinStats(matchCountTotal, bonusMatchTotal, numOfTickets);
}

function getBonusNumber(guessNumbersTotal, matchCountTotal, numOfTickets) {
  MissionUtils.Console.readLine("\n보너스 번호를 입력해 주세요.\n", (userInput) => {
    const bonusNumber = Number(userInput);
    (() => new Bonus(bonusNumber))()
    compareGuessandBounus(guessNumbersTotal, matchCountTotal, bonusNumber, numOfTickets);
  });
}

function compareGuessAndWinning(guessNumbersTotal, winningNumArray, numOfTickets) {
  let matchCountTotal = [];
  matchCountTotal = guessNumbersTotal.map((guessNumbers) => {
    const matchCount = guessNumbers.filter((guessNumber) => winningNumArray.includes(guessNumber)).length;
    return matchCount;
  });
  getBonusNumber(guessNumbersTotal, matchCountTotal, numOfTickets);
}

function getWinningNumbers(guessNumbersTotal, numOfTickets) { 
  MissionUtils.Console.readLine("\n당첨 번호를 입력해 주세요.\n", (userInput) => {
    const winningNumArray = userInput.split(",").map((number) => Number(number));
    (() => new Lotto(winningNumArray))()
    compareGuessAndWinning(guessNumbersTotal, winningNumArray, numOfTickets);
  });
}

function numArraytoStringArray (numArray) {
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

function printGuessNumbersTotal(numOfTickets, guessNumbersTotal) {
  const stringArray = numArraytoStringArray(guessNumbersTotal);
  stringArray.forEach((guessNumbers) => {
    MissionUtils.Console.print(guessNumbers);
  }); 
  getWinningNumbers(guessNumbersTotal, numOfTickets);
}

function printNumTickets(numOfTickets, guessNumbersTotal) {
  MissionUtils.Console.print(`\n${numOfTickets}개를 구매했습니다.`);
  printGuessNumbersTotal(numOfTickets, guessNumbersTotal);
}

function generateGuessNumbers(numOfTickets) {
  const guessNumbersTotal = [];
  for (let i = 0; i < numOfTickets; i += 1) {
    const guessNumbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
    guessNumbersTotal[i] = guessNumbers;
  }
  printNumTickets(numOfTickets, guessNumbersTotal);
}

function validatePayment(payment) {
  const paymentNum = Number(payment);
  if (!Number.isInteger(paymentNum)) {
    throw new Error("[ERROR] 입력값은 정수여야 합니다.");
  } 
  if (paymentNum % 1000 !== 0) {
    throw new Error("[ERROR] 입력값은 1000원 단위여야 합니다.");
  } 
  if (paymentNum < 0) {
    throw new Error("[ERROR] 입력값은 0 이상이어야 합니다.");
  }
}

function getUserPayment() { 
  MissionUtils.Console.readLine("구입금액을 입력해주세요 : \n", (userInput) => {
    validatePayment(userInput);
    const numOfTickets = userInput / 1000;
    generateGuessNumbers(numOfTickets);
  });
}

function startLottery() {
  getUserPayment();
}

class App {
  play() {
    startLottery();
  }
}

module.exports = App;
// const app = new App();
// app.play();

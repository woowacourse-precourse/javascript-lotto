const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");

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

// module.exports = App;
const app = new App();
app.play();

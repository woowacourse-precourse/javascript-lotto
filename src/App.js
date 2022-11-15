const MissionUtils = require("@woowacourse/mission-utils");
const Ticket = require("./Ticket");
const Constant = {
  PURCHASE_AMOUNT_QUESTION_MESSAGE: "구입금액을 입력해 주세요.\n",
  PURCHASE_AMOUNT_ERROR_MESSAGE: "구입 금액은 숫자여야 합니다.",
  PURCHASE_AMOUNT_ERROR_MESSAGE2: "구입 금액은 0원 이상이어야 합니다.",
  PURCHASE_AMOUNT_ERROR_MESSAGE3: "구입 금액은 1000원 단위여야 합니다.",
};
class App {
  play() {
    this.purchaseTicket();
  }

  purchaseTicket() {
    this.getInputPurchaseAmount(this.manageInputPurchaseAmount.bind(this));
  }

  manageInputPurchaseAmount(price) {
    const numberOfTickets = this.calculateNumberOfTickets(price);
    MissionUtils.Console.print(`${numberOfTickets}개를 구매했습니다.`);
    this.manageTickets(numberOfTickets);
  }

  getInputPurchaseAmount(callback) {
    MissionUtils.Console.readLine(Constant.PURCHASE_AMOUNT_QUESTION_MESSAGE, callback);
  }

  calculateNumberOfTickets(price) {
    this.validateInputPurchase(price);
    const numberOfTickets = price / 1000;
    return numberOfTickets;
  }

  validateInputPurchase(price) {
    if (isNaN(price)) {
      throw new Error(Constant.PURCHASE_AMOUNT_ERROR_MESSAGE);
    }
    if (price <= 0) {
      throw new Error(Constant.PURCHASE_AMOUNT_ERROR_MESSAGE2);
    }
    if (price % 1000 !== 0) {
      throw new Error(Constant.PURCHASE_AMOUNT_ERROR_MESSAGE3);
    }
  }

  manageTickets(numberOfTickets) {
    for (let i = 0; i < numberOfTickets; i++) {
      let ticketNumbers = this.createTicketNumbers();
      ticketNumbers = this.sortAscendingOrder(ticketNumbers);
      this.printTickets(ticketNumbers);
      // this.tickets.push(new Ticket(randomTicketNumbers));
    }
  }

  createTicketNumbers() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
  }

  printTickets(ticketNumbers) {
    MissionUtils.Console.print(ticketNumbers);
  }

  sortAscendingOrder(ticketNumbers) {
    return ticketNumbers.sort((a, b) => a - b);
  }

  getInputLottoNumbers(callback) {
    MissionUtils.Console.readLine(Constant.LOTTO_NUMBERS_QUESTION_MESSAGE, callback);
  }
  
}

const app = new App();
app.play();

module.exports = App;

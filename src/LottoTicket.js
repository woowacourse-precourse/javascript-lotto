const { Console, Random } = require("@woowacourse/mission-utils");
const { RULE } = require("./constants.js");

module.exports = class LottoTicket {
  static generateNumber() {
    return Random.pickUniqueNumbersInRange(RULE.MIN_NUMBER, RULE.MAX_NUMBER, RULE.SELECT_NUMBER).sort((a, b) => a - b);
  }

  static publish(lottoTicketNumber) {
    const lottoTicketList = [];
    for (let number = 1; number <= lottoTicketNumber; number++) {
      const lottoTicket = LottoTicket.generateNumber();
      Console.print(`[${lottoTicket.join(", ")}]`);
      lottoTicketList.push(lottoTicket);
    }
    return lottoTicketList;
  }
};

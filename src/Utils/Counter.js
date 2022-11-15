class Counter {
  constructor(winningNumber, lottoTicket) {
    this.matchingResult = {
      3: 0,
      4: 0,
      5: 0,
      6: 0,
    };

    this.countMatchingResult(lottoTicket, winningNumber);
  }

  countMatchingResult(lottoTicket, winningNumber) {
    const atLeastMatchNumber = 3;
    const needToCheckBonus = 5;

    lottoTicket.forEach((ticketNumber) => {
      const matchingNumber = this.countMatchingNumber(winningNumber, ticketNumber);
      if (needToCheckBonus === matchingNumber) {
        this.matchingResult[matchingNumber] = ticketNumber;
      }
      if (atLeastMatchNumber <= matchingNumber && needToCheckBonus !== matchingNumber) {
        this.matchingResult[matchingNumber] += 1;
      }
    });
  }

  countMatchingNumber(winningNumber, ticketNumber) {
    let matchingCount = 0;
    for (let i = 0; i < winningNumber.length; i++) {
      if (ticketNumber.includes(winningNumber[i])) {
        matchingCount++;
      }
    }
    return matchingCount;
  }
}

module.exports = Counter;

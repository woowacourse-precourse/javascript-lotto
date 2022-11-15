const MissionUtils = require("@woowacourse/mission-utils");
const Console = MissionUtils.Console;
const {MESSAGE, LOTTO} = require("./constant");

class CheckLotto {
  constructor(lottoTickets, winningNumbers, bonusNumber) {
    this.matchLotto = [];
    this.rank = {
      fifth : 0,
      fourth : 0,
      third : 0,
      second : 0,
      first : 0,
    }
    this.checkMatch(lottoTickets, winningNumbers, bonusNumber);
    this.checkRank(bonusNumber);
    this.printRank();
    this.printRate(lottoTickets.length);
  }

  checkMatch(lottoTickets, winningNumbers, bonusNumber) {
    const winningNumber = [...winningNumbers];
    const matchLotto = []
    lottoTickets.map(numbers => {
      const matchNumbers = numbers.filter(number => winningNumber.includes(number));
      if (matchNumbers.length !== 0 && matchNumbers.length !== 5) {matchLotto.push(matchNumbers)};
      if (matchNumbers.length === 5) {numbers.includes(bonusNumber) ? matchLotto.push([...matchNumbers, bonusNumber]) : false}
    });
    this.matchLotto = matchLotto;
  };

  checkRank(bonusNumber){
    const matchLotto = this.matchLotto;
    const rank = this.rank;
    matchLotto.map(numbers => {
      if (numbers.length === 3) {rank.fifth ++}
      if (numbers.length === 4) {rank.fourth ++}
      if (numbers.length === 5) {rank.third ++}
      if (numbers.length === 6) {
        numbers.includes(bonusNumber) ? rank.second ++ : rank.first ++;
      }
    });
    this.rank = rank;
  }

  printRank() {
    Console.print('당첨 통계\n---')
    for (const rank in this.rank) {
      if (rank === 'fifth') {Console.print(MESSAGE.RANK.FIFTH(this.rank[rank]))};
      if (rank === 'fourth') {Console.print(MESSAGE.RANK.FOURTH(this.rank[rank]))};
      if (rank === 'third') {Console.print(MESSAGE.RANK.THIRD(this.rank[rank]))};
      if (rank === 'second') {Console.print(MESSAGE.RANK.SECOND(this.rank[rank]))};
      if (rank === 'first') {Console.print(MESSAGE.RANK.FIRST(this.rank[rank]))};
    }
  }

  printRate(ticketQuantity) {
    let total = 0;
    for (const rank in this.rank) {
      if (rank === 'fifth') {total += (5000 * this.rank[rank])};
      if (rank === 'fourth') {total += (50000 * this.rank[rank])};
      if (rank === 'third') {total += (1500000 * this.rank[rank])};
      if (rank === 'second') {total += (30000000 * this.rank[rank])};
      if (rank === 'first') {total += (2000000000 * this.rank[rank])};
    };
    const tempRate = (total / (ticketQuantity * 1000)) * 100;
    const rate = Number(tempRate.toFixed(1));
    Console.print(MESSAGE.RATE(rate));
  }

}

module.exports = CheckLotto;

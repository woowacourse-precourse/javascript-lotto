/* eslint-disable no-unused-vars */
/* eslint-disable no-prototype-builtins */
/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable class-methods-use-this */
const MissionUtils = require('@woowacourse/mission-utils');
const Counter = require('./Counter');

const intersection = (setA, setB) =>
  new Set([...setA].filter((element) => setB.has(element)));

const addCommas = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

class BillBoard {
  #tickets;

  #lottoNumbers;

  #bonusNumber;

  #counterInstance;

  constructor(tickets, lottoNumbers, bonusNumber) {
    this.#tickets = tickets;
    this.#lottoNumbers = lottoNumbers;
    this.#bonusNumber = bonusNumber;
    this.#counterInstance = {
      match3: new Counter('3개 일치', 5000),
      match4: new Counter('4개 일치', 50000),
      match5: new Counter('5개 일치', 1500000),
      match5Bonus: new Counter('5개 일치, 보너스 볼 일치', 30000000),
      match6: new Counter('6개 일치', 2000000000),
    };
  }

  print() {
    MissionUtils.Console.print('\n당첨 통계');
    MissionUtils.Console.print('---');
    Object.entries(this.#counterInstance).forEach(([key, value]) => {
      MissionUtils.Console.print(
        `${value.matchName} (${addCommas(value.winnings)}원) - ${
          value.count
        }개`,
      );
    });
  }

  count(matchResult) {
    matchResult.forEach((matchCount) => {
      if (this.#counterInstance.hasOwnProperty(matchCount)) {
        this.#counterInstance[matchCount].increaseCount();
      }
    });
  }

  match() {
    return this.#tickets.map((ticket) => {
      const matchCount = intersection(
        new Set(ticket),
        new Set(this.#lottoNumbers),
      ).size;
      if (matchCount === 5 && ticket.includes(this.#bonusNumber)) {
        return 'match5Bonus';
      }
      return `match${matchCount}`;
    });
  }

  makeBillBoard() {
    const matchResult = this.match();
    this.count(matchResult);
    this.print();
  }
}

module.exports = BillBoard;

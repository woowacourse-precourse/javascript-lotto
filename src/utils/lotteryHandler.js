const { Random, Console } = require('@woowacourse/mission-utils');

const sortLotteryNumbers = (lotteryTicket) => {
  const sortedArray = lotteryTicket.sort((a, b) => a - b);
  return sortedArray;
};

const createLotteryTicket = () => {
  const lotteryTicket = Random.pickUniqueNumbersInRange(1, 45, 6);
  const sortedLotteryTicket = sortLotteryNumbers(lotteryTicket);

  return sortedLotteryTicket;
};

const printMyLotteries = (lotteryTickets) => {
  Console.print(`${lotteryTickets.length}개를 구매했습니다.`);
  lotteryTickets.forEach((lottery) => {
    Console.print(lottery);
  });
};

const changeToNumbersArray = (stringInput) => {
  const stringsArray = stringInput.split(',');
  const numbersArray = stringsArray.map((string) => Number(string));

  return numbersArray;
};

/* Check Lottery Result */
const checkLottery = (ticket, lottoNumbers, bonusNumber) => {
  let count = 0;
  let getBonus = false;

  ticket.forEach((ticketNumber) => {
    if (lottoNumbers.includes(ticketNumber)) {
      count += 1;
    }

    if (ticketNumber === bonusNumber) {
      getBonus = true;
    }
  });

  return { count, getBonus };
};

const getLotteryResult = (tickets, numbers, bonusNumber) => {
  const totalResult = [];
  tickets.forEach((ticket) => {
    const lotteryResult = checkLottery(ticket, numbers, bonusNumber);
    totalResult.push(lotteryResult);
  });

  return totalResult;
};

/* Print Total Result */
const checkWinTickets = (totalResult) => {
  const winTickets = {
    getThree: { amount: 0, price: 5000 },
    getFour: { amount: 0, price: 50000 },
    getFive: { amount: 0, price: 1500000 },
    getFiveAndBonus: { amount: 0, price: 30000000 },
    getSix: { amount: 0, price: 2000000000 },
  };

  totalResult.forEach(({ count, getBonus }) => {
    if (count === 3) {
      return (winTickets.getThree.amount += 1);
    }

    if (count === 4) {
      return (winTickets.getFour.amount += 1);
    }

    if (count === 5 && getBonus) {
      return (winTickets.getFiveAndBonus.amount += 1);
    }

    if (count === 5) {
      return (winTickets.getFive.amount += 1);
    }

    if (count === 6) {
      return (winTickets.getSix.amount += 1);
    }
  });

  return winTickets;
};

const printResult = (totalResult) => {
  const winTickets = checkWinTickets(totalResult);

  Console.print('당첨 통계');
  Console.print('---');
  Console.print(`3개 일치 (5,000원) - ${winTickets.getThree.amount}개`);
  Console.print(`4개 일치 (50,000원) - ${winTickets.getFour.amount}개`);
  Console.print(`5개 일치 (1,500,000원) - ${winTickets.getFive.amount}개`);
  Console.print(
    `5개 일치, 보너스 볼 일치 (30,000,000원) - ${winTickets.getFiveAndBonus.amount}개`,
  );
  Console.print(`6개 일치 (2,000,000,000원) - ${winTickets.getSix.amount}개`);
  Console.print(`총 수익률은 ${0}입니다.`);
};

module.exports = {
  sortLotteryNumbers,
  createLotteryTicket,
  printMyLotteries,
  changeToNumbersArray,
  getLotteryResult,
  printResult,
};

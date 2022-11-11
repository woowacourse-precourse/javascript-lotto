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

module.exports = {
  sortLotteryNumbers,
  createLotteryTicket,
  printMyLotteries,
  changeToNumbersArray,
  getLotteryResult,
};

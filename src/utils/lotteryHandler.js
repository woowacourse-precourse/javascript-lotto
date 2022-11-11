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

module.exports = {
  sortLotteryNumbers,
  createLotteryTicket,
  printMyLotteries,
  changeToNumbersArray,
};

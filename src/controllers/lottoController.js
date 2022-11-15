const { Random } = require('@woowacourse/mission-utils');
const { NUMBER, STRING, BOOLEAN } = require('../constants/value');

const sortLotteryNumbers = (lotteryTicket) => {
  const sortedArray = lotteryTicket.sort((a, b) => a - b);
  return sortedArray;
};

const createLotteryTicket = () => {
  const lotteryTicket = Random.pickUniqueNumbersInRange(
    NUMBER.MIN_LOTTO_RANGE,
    NUMBER.MAX_LOTTO_RANGE,
    NUMBER.LOTTO_LENGTH,
  );
  const sortedLotteryTicket = sortLotteryNumbers(lotteryTicket);

  return sortedLotteryTicket;
};

const changeToNumbersArray = (stringInput) => {
  const stringsArray = stringInput.split(STRING.COMMA);
  const numbersArray = stringsArray.map((string) => Number(string));

  return numbersArray;
};

/* Check Lottery Result */
const checkLottery = (ticket, lottoNumbers, bonusNumber) => {
  let count = NUMBER.DEFAULT_COUNT;
  let getBonus = BOOLEAN.DEFAULT_BONUS;

  ticket.forEach((ticketNumber) => {
    if (lottoNumbers.includes(ticketNumber)) {
      count += NUMBER.COUNT_UNIT;
    }

    if (ticketNumber === bonusNumber) {
      getBonus = BOOLEAN.GET_BONUS;
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
  changeToNumbersArray,
  getLotteryResult,
};

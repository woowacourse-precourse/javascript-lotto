const { Console, Random } = require('@woowacourse/mission-utils');
const { RESET_ADD_BLANK } = require('./Constants');

const print = (message) => Console.print(message);

const readLine = (query, callback) => Console.readLine(query, callback);

const close = () => Console.close();

function pickUniqueNumbersInRange(start, end, count) {
  return Random.pickUniqueNumbersInRange(start, end, count);
}

const getArrayToCustomMessage = (myArray = []) => {
  const message = JSON.stringify(myArray);
  return message.replace(/,/gi, RESET_ADD_BLANK);
};

const isLessThanNumber = (count, number) => {
  if (count < number) return true;
  return false;
};

const getRoundSecondDecimalPlace = (number) => Math.round(number * 100) / 100;

const getRate = (prize, price) => getRoundSecondDecimalPlace((prize / price) * 100);

module.exports = {
  print,
  readLine,
  close,
  pickUniqueNumbersInRange,
  getArrayToCustomMessage,
  isLessThanNumber,
  getRoundSecondDecimalPlace,
  getRate,
};

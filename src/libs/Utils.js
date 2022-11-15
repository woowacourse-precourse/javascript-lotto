const { Console, Random } = require('@woowacourse/mission-utils');
const { WIN_MESSAGE } = require('./const');

class Utils {
  static createRandomLotto() {
    const randomArr = Random.pickUniqueNumbersInRange(1, 45, 6);
    return randomArr;
  }

  static sortAscent(array) {
    const sortArray = array.sort((a, b) => a - b);
    return sortArray;
  }

  static convertFromArrayToString(array) {
    const lastIndex = array.length - 1;
    const initialValue = '';
    const arrStr = array.reduce((previousValue, currentValue, index) => {
      if (index !== lastIndex) return `${previousValue}${currentValue}, `;
      return `${previousValue}${currentValue}`;
    }, initialValue);
    const string = `[${arrStr}]`;
    return string;
  }

  static isRangeNumber(number) {
    if (number >= 1 && number <= 45) return true;
    return false;
  }

  static printUtil(message, count) {
    Console.print(`${message} ${count}${WIN_MESSAGE.some}`);
  }

  static convertLocale(number) {
    const convert = number
      .toString()
      .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
    return convert;
  }

  static percentage(partialValue, totalValue) {
    return ((partialValue / totalValue) * 100).toFixed(1);
  }

  static splitComma(string) {
    const stringArray = string.split(',').map(item => item.trim());
    return stringArray;
  }

  static convertStringNumber(stringArray) {
    const numberArray = stringArray.map(item => Number(item));
    return numberArray;
  }

  static matchArrayNumbers(arr1, arr2) {
    const matchArr = arr1.filter(item => {
      if (arr2.includes(item)) {
        return item;
      }
      return null;
    });
    const count = matchArr.length;
    return count;
  }
}

module.exports = Utils;

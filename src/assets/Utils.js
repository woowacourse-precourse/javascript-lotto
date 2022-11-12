class Utils {
  constructor() {}

  static stringToArray(string) {
    const numberArray = [];
    const stringArray = string.split(",");

    stringArray.forEach((string) => numberArray.push(+string));

    return numberArray;
  }

  static sort(numbers) {
    return numbers.sort((prev, next) => {
      return prev - next;
    });
  }
}

module.exports = Utils;

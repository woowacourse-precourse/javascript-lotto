const MESSAGE = require("./Message");

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

  static translateResultToText(prize) {
    return `${MESSAGE.RESULT.THREEWIN}${prize.threeWin}${MESSAGE.RESULT.EA}
${MESSAGE.RESULT.FOURWIN}${prize.fourWin}${MESSAGE.RESULT.EA}
${MESSAGE.RESULT.FIVEWIN}${prize.fiveWin}${MESSAGE.RESULT.EA}
${MESSAGE.RESULT.BONUSEWIN}${prize.bonusWin}${MESSAGE.RESULT.EA}
${MESSAGE.RESULT.ALLWIN}${prize.allWin}${MESSAGE.RESULT.EA}
`;
  }
}

module.exports = Utils;

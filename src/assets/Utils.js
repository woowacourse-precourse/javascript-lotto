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

  static mathRound(prize, lottoQuantity) {
    const answer = (prize / lottoQuantity) * 100;
    return answer.toFixed(1);
  }

  static translateResultToText(prize) {
    const { threeWin, fourWin, fiveWin, bonusWin, allWin } = prize;
    return `${MESSAGE.RESULT.THREEWIN}${threeWin}${MESSAGE.RESULT.EA}
${MESSAGE.RESULT.FOURWIN}${fourWin}${MESSAGE.RESULT.EA}
${MESSAGE.RESULT.FIVEWIN}${fiveWin}${MESSAGE.RESULT.EA}
${MESSAGE.RESULT.BONUSEWIN}${bonusWin}${MESSAGE.RESULT.EA}
${MESSAGE.RESULT.ALLWIN}${allWin}${MESSAGE.RESULT.EA}
`;
  }
}

module.exports = Utils;

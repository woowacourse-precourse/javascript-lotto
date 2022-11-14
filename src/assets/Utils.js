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
    const { THREEWIN, FOURWIN, FIVEWIN, BONUSEWIN, ALLWIN, EA } =
      MESSAGE.RESULT;

    return `${THREEWIN}${threeWin}${EA}
${FOURWIN}${fourWin}${EA}
${FIVEWIN}${fiveWin}${EA}
${BONUSEWIN}${bonusWin}${EA}
${ALLWIN}${allWin}${EA}`;
  }
}

module.exports = Utils;

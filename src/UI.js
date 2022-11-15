const MissionUtils = require("@woowacourse/mission-utils");

const lottoBuy = () => {
  let input;
  MissionUtils.Console.readLine("구입금액을 입력해 주세요.", (answer) => {
    input = answer;
  });
  return input;
};

const winningNumbers = () => {
  let input;
  MissionUtils.Console.readLine("당첨 번호를 입력해 주세요.", (answer) => {
    input = answer;
  });
  return input;
};

const bonusNumber = () => {
  let input;
  MissionUtils.Console.readLine("보너스 번호를 입력해 주세요.", (answer) => {
    input = answer;
  });
  return input;
};

const printBuying = (count) => {
  MissionUtils.Console.print(`${count}개를 구매했습니다.`);
};

const printGameNumber = (games) => {
  for (const game of games) {
    const str = makingSentence(game);
    MissionUtils.Console.print(str);
  }
};

const makingSentence = (arr) => {
  str = "[";
  arr.forEach((element) => {
    const seperator = ", ";
    if (str.length == 1) {
      str = str + element;
    } else {
      str = str + seperator + element;
    }
  });
  str = str + "]";
  return str;
};

const printWinning = (rank) => {
  MissionUtils.Console.print(`3개 일치 (5,000원) - ${rank[0]}개`);
  MissionUtils.Console.print(`4개 일치 (50,000원) - ${rank[1]}개`);
  MissionUtils.Console.print(`5개 일치 (1,500,000원) - ${rank[2]}개`);
  MissionUtils.Console.print(
    `5개 일치, 보너스 볼 일치 (30,000,000원) - ${rank[3]}개`
  );
  MissionUtils.Console.print(`6개 일치 (2,000,000,000원) - ${rank[4]}개`);
};

const printProfit = (profit) => {
  MissionUtils.Console.print(`총 수익률은 ${profit}%입니다.`);
}

module.exports = {
  lottoBuy,
  winningNumbers,
  bonusNumber,
  printBuying,
  printGameNumber,
  printWinning,
  printProfit
};

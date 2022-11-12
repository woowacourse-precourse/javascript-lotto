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

module.exports = {
  lottoBuy,
  winningNumbers,
  bonusNumber,
};

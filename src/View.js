const MissionUtils = require("@woowacourse/mission-utils");

const inputBudget = () => {
  MissionUtils.Console.readLine("구입금액을 입력해 주세요.", (budget) => {});
};

const inputWinningNumbers = (splitWinningNumbers) => {
  MissionUtils.Console.readLine("당첨 번호를 입력해 주세요.", (numbers) => {});
};

const inputBounsNumber = () => {
  MissionUtils.Console.readLine("보너스 번호를 입력해 주세요.", (numbers) => {});
};
exports.inputBudget = inputBudget;

exports.inputWinningNumbers = inputWinningNumbers;

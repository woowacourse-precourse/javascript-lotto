const inputBudget = () => {
  MissionUtils.Console.readLine("구입금액을 입력해 주세요.", (budget) => {});
};

const inputWinningNumbers = () => {
  MissionUtils.Console.readLine("당첨 번호를 입력해 주세요.", (numbers) => {});
};

exports.inputBudget = inputBudget;
exports.inputWinningNumbers = inputWinningNumbers;

const { Lotto, UserLotto, CheckValidate, Rank, Result } = require('./Lotto');
const GetUserInput = require('./GetUserInput');
const MissionUtils = require('@woowacourse/mission-utils');

class App {
  async play() {
    const money = await new GetUserInput(
      '구입금액을 입력해 주세요.\n'
    ).userInput();
    new CheckValidate([], money, 'money');
    const userLottos = new UserLotto(money).userLottos;

    let winningNumber;
    await new GetUserInput('당첨 번호를 입력해 주세요.\n')
      .userInput()
      .then((res) => {
        try {
          winningNumber = res;
          new Lotto(res);
        } catch {
          MissionUtils.Console.close();
        }
      });

    const bonusNumber = await new GetUserInput(
      '보너스 번호를 입력해 주세요.\n'
    ).userInput();
    new CheckValidate(winningNumber, bonusNumber, 'bonus');

    const countCorrectNumber = new Rank(userLottos, winningNumber, bonusNumber)
      .countCorrectNumber;

    new Result(countCorrectNumber, money);

    MissionUtils.Console.close();
  }
}

const app = new App();

app.play();

module.exports = App;

const MissionUtils = require('@woowacourse/mission-utils');

function userInput(func1, func2, func3, func4) {
  MissionUtils.Console.readLine('구입금액을 입력해 주세요.\n', (input) => {
    func1.call(this, input); // 구입 금액을 처리
    MissionUtils.Console.readLine('\n당첨 번호를 입력해 주세요.\n', (input) => {
      func2.call(this, input); // 당첨 번호를 처리
      MissionUtils.Console.readLine('\n보너스 번호를 입력해 주세요.\n', (input) => {
        func3.call(this, input); // 보너스 번호를 처리
        MissionUtils.Console.close();
        func4.call(this); // 결과 출력
      });
    });
  });
}

module.exports = userInput;

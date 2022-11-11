const MissionUtils = require("@woowacourse/mission-utils");

const accountInput = () => {
  MissionUtils.Console.readLine("구입금액을 입력해 주세요.\n", (account) => {
    lottoPrint(account);
  });
};

const lottoPrint = (account) => {
  MissionUtils.Console.print(`\n${account / 1000}개를 구매했습니다.`);
};

module.exports = {
  accountInput,
};

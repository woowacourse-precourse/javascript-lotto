const MissionUtils = require("@woowacourse/mission-utils");

const accountInput = () => {
  MissionUtils.Console.readLine("구입금액을 입력해 주세요.\n", (input) => {
    checkAccountValidation(input);

    if (input % 10 === 0) {
      lottoPrint(input);
      return;
    }
  });
};

const lottoPrint = (account) => {
  MissionUtils.Console.print(`\n${account / 1000}개를 구매했습니다.`);
};

const checkAccountValidation = (input) => {
  const account = Number(input);

  if (input.length !== String(account).length) {
    console.log(account.length);
    throw new Error("[ERROR] 잘못된 입력입니다.");
  }
  if (account < 1000) {
    throw new Error("[ERROR] 1000원 이상 입력해주세요.");
  }
  if (account % 1000 !== 0) {
    throw new Error("[ERROR] 1000원 단위로 입력해주세요.");
  }
};

module.exports = {
  accountInput,
};

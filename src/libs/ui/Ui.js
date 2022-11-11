const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("../../Lotto");

const accountInput = () => {
  MissionUtils.Console.readLine("구입금액을 입력해 주세요.\n", (input) => {
    checkAccountValidation(input);
    lottoPrint(input);
    generateNumber(input).then((tickets) => {
      printLottoNumber(tickets);
    });
  });
};

const lottoPrint = (account) => {
  MissionUtils.Console.print(`\n${account / 1000}개를 구매했습니다.`);
  MissionUtils.Console.close();
};

const checkAccountValidation = (input) => {
  const account = Number(input);

  if (input.length !== String(account).length) {
    throw new Error("[ERROR] 잘못된 입력입니다.");
  }
  if (account < 1000) {
    throw new Error("[ERROR] 1000원 이상 입력해주세요.");
  }
  if (account % 1000 !== 0) {
    throw new Error("[ERROR] 1000원 단위로 입력해주세요.");
  }
};

const generateNumber = async (count) => {
  const lottos = [];
  const lottoCount = count / 1000;
  for (let i = 0; i < lottoCount; i++) {
    const lotto = await MissionUtils.Random.pickUniqueNumbersInRange(
      1,
      45,
      6
    ).sort((a, b) => a - b);
    lottos.push(lotto);
  }
  return lottos;
};

const printLottoNumber = (tickets) => {
  tickets.map((element) => MissionUtils.Console.print(element));
};

const winningNumberInput = () => {
  MissionUtils.Console.readLine("당첨 번호를 입력해 주세요.\n", (input) => {
    const lotto = new Lotto(input);
  });
};

module.exports = {
  accountInput,
  winningNumberInput,
};

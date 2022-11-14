const { Console } = require("@woowacourse/mission-utils");
const validate = require("../validation/validation");

const game = {
  Start: () => {
    Console.readLine("구입금액을 입력해 주세요.\n", (input) => {
      validate.moneyInput(input);
    });
  },
};

module.exports = game;

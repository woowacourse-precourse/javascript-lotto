const { Console } = require("./lib/MissionUtils.js");
const { Random } = require("./lib/MissionUtils.js");

const getPurchaseAmount = () => {
  return new Promise((resolve) => {
    Console.readLine("구입금액을 입력해 주세요.\n", resolve);
  });
};

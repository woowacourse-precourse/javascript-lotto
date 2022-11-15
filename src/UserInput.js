const { ReadLine } = require("./lib/MissionUtils.js");

const getPurchaseAmount = () => {
  return new Promise((resolve) => {
    ReadLine("구입금액을 입력해 주세요.\n", resolve);
  }); // 숫자, 1000원 단위 체크
};

const getWinningNumber = () => {
  return new Promise((resolve) => {
    ReadLine("\n당첨 번호를 입력해 주세요.\n", resolve);
  }); //쉼표 단위로 구분 안되어 있을 시 에러처리 + 숫자 체크
};

const getBonusNumber = () => {
  return new Promise((resolve) => {
    ReadLine("\n보너스 번호를 입력해 주세요.\n", resolve);
  }); //숫자 + 1개인 지 체크 + 넘버랑 겹치지는 않는지
};
//로또 번호는 범위 체크!

module.exports = { getPurchaseAmount, getWinningNumber, getBonusNumber };

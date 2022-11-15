const { deepFreeze } = require('./helper');

const MESSAGE = deepFreeze({
  inputPricesToBuyLotto: '구입금액을 입력해 주세요.\n',
  inputWinningNumbers: '\n당첨 번호를 입력해 주세요.\n',
  inputBonusNumber: '\n보너스 번호를 입력해 주세요.\n',
});
module.exports = MESSAGE;

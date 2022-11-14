const INPUT_QUERY = {
  LOTTO_AMOUNT: '구입금액을 입력해 주세요.\n',
  WINNING_NUMBER: '당첨 번호를 입력해 주세요.\n',
};

const PREFIX = '[ERROR] ';

const ERROR = {
  NOT_NUMBER: PREFIX + '숫자를 입력해주세요.',
  UNDER_THOUSAND: PREFIX + '입력된 값이 1000원 이하입니다.',
  NOT_THOUSAND_UNIT: PREFIX + '1000원 단위로 입력해주세요.'
};

module.exports = { INPUT_QUERY, ERROR };

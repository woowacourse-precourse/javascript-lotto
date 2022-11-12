const GAME_MESSAGE = {
  input_price: '구입금액을 입력해 주세요.\n',
  input_win_number: '당첨 번호를 입력해 주세요.\n',
  input_bonus_number: '보너스 번호를 입력해 주세요.\n',
};

const PRICE_ERROR_MESSAGE = {
  not_valid_number: '[ERROR] 숫자를 입력해주세요.',
  not_valid_unit_number: '[ERROR] 1000원 단위로 입력해주세요.',
  not_valid_answer: '[ERROR] 입력값이 없습니다.',
};

const WIN_NUMBER_ERROR_MESSAGE = {
  not_valid_answer: '[ERROR] 입력값이 없습니다.',
  not_valid_division: '[ERROR] 구분은 쉼표(,)를 사용해주세요.',
  not_valid_range_number: '[ERROR] 1부터 45까지의 숫자를 입력해주세요.',
  not_valid_overlap_number: '[ERROR] 중복되는 숫자는 입력할 수 없습니다.',
};

const BONUS_NUMBER_ERROR_MESSAGE = {
  not_valid_answer: '[ERROR] 입력값이 없습니다.',
  not_valid_range_number: '[ERROR] 1부터 45까지의 숫자를 입력해주세요',
  not_valid_overlap_number: '[ERROR] 중복되는 숫자는 입력할 수 없습니다.',
};

const PRICE_MEASURE = 1000;

module.exports = {
  GAME_MESSAGE,
  PRICE_ERROR_MESSAGE,
  WIN_NUMBER_ERROR_MESSAGE,
  BONUS_NUMBER_ERROR_MESSAGE,
  PRICE_MEASURE,
};

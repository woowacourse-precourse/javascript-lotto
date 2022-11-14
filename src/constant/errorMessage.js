const BONUS_NUM_ERROR = {
  CHECK_RANGE: '[ERROR] 1에서 45사이의 수를 입력해주세요.',
  CHECK_ISINTEGER: '[ERROR] 정수를 입력해주세요.',
  CHECK_ISNUMBER: '[ERROR] 숫자만 입력해주세요.',
  CHECK_OVERLAP: '[ERROR] 당첨번호와 중복되는 숫자입니다.',
};

const LOTTO_ERROR = {
  CHECK_COUNT: '[ERROR] 로또 번호는 6개여야 합니다.',
  CHECK_OVERLAP: '[ERROR] 로또 번호에 중복되는 숫자가 있습니다.',
  CHECK_SORTED: '[ERROR] 번호가 오름차순으로 정렬되지 않습니다.',
  CHECK_RANGE: '[ERROR] 1에서 45의 수가 아닌 것이 있습니다.',
  CHECK_ISINTEGER: '[ERROR] 로또 번호에 정수가 아닌 것이 있습니다.',
};

const LOTTO_COST_ERROR = {
  CHECK_ISINTEGER: '[ERROR] 정수를 입력해주세요.',
  CHECK_THOUSAND: '[ERROR] 1000원 단위로 입력해주세요.',
  CHECK_ISNULL: '[ERROR] 숫자를 입력해 주세요.',
  CHECK_SPACE: '[ERROR] 숫자만 입력해주세요.',
  CHECK_DOT: '[ERROR] 온점을 제외하고 입력해주세요.',
};

const WIN_NUMS_ERROR = {
  CHECK_RANGE: '[ERROR] 1에서 45사이의 수를 입력해주세요.',
  CHECK_OVERLAP: '[ERROR] 당첨번호에 중복되는 숫자가 있습니다.',
  CHECK_COUNT: '[ERROR] 숫자 여섯개를 입력해주세요.',
  CHECK_BLANK_OR_DOT: '[ERROR] 숫자만 입력해주세요.',
  CHECK_ISINTEGER: '[ERROR] 정수를 입력해주세요.',
};

module.exports = {
  BONUS_NUM_ERROR,
  LOTTO_ERROR,
  LOTTO_COST_ERROR,
  WIN_NUMS_ERROR,
};

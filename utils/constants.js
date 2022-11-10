const VARIABLE_LOTTO = Object.freeze({
  regex: /^[1-9]{1}$|^[1-3]{1}[0-9]{1}$|^4{1}[0-5]{1}$/,
  start: 1,
  end: 45,
  len: 6,
});

const LOTTO_ERROR_MESSAGE = Object.freeze({
  range: '[ERROR] 보너스 번호는 1 ~ 45사이 숫자여야 합니다.',
  len: '[ERROR] 로또 번호는 6개여야 합니다.',
  overlap: '[ERROR] 로또 번호는 중복이 되어서는 안됩니다.',
});

module.exports = {
  VARIABLE_LOTTO,
  LOTTO_ERROR_MESSAGE,
};

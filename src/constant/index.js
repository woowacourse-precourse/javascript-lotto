const ERROR = Object.freeze({
  LEGNTH: '[ERROR] 로또 번호는 6개여야 합니다.',
  SPLIT: '[ERROR] 로또 번호는 쉼표로 구분된 숫자여야 합니다.',
  REPEAT: '[ERROR] 로또 번호는 중복되어서는 안 됩니다.',
  NUMBER: '[ERROR] 로또 번호는 양의 정수여야 합니다.',
  RANGE: '[ERROR] 로또 번호는 1 ~ 45 사이의 숫자여야 합니다.',
});

module.exports = ERROR;

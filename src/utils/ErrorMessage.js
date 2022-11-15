const { deepFreeze } = require('./helper');

const ERROR_MESSAGE = deepFreeze({
  lottoNumberRange: '[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.',
  lottoNumbersLength: '[ERROR] 로또는 6개의 숫자이어야 합니다.',
  lottoNotDuplicated: '[ERROR] 로또 번호는 중복될 수 없습니다',
  priceOnlyThousands: '[ERROR] 로또는 천원 단위로만 구매할 수 있습니다.',
});

module.exports = ERROR_MESSAGE;

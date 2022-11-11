const ERROR = Object.freeze({
  NOT_1000_UNIT: '[ERROR] 1,000원 단위의 금액만 입력 가능합니다.',
  NOT_ENOUGH_CASH: '[ERROR] 1,000원 미만의 금액으로 로또를 구매할 수 없습니다.',
});

const NUMBER = Object.freeze({
  INPUT_UNITS: 1000,
});

module.exports = (ERROR, NUMBER);

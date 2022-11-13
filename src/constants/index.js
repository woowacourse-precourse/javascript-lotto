const MESSAGE = Object.freeze({
  INPUT_MONEY: "구입금액을 입력해 주세요.",
  COUNT_LOTTO: "개를 구매했습니다.",
  INPUT_NUMBER: "당첨 번호를 입력해 주세요.",
  INPUT_BONUS_NUMBER: "보너스 번호를 입력해 주세요.",
});

const ERROR = Object.freeze({
  INPUT_MONEY: "[ERROR] 구입금액을 1,000원 단위로 입력해 주세요.",
  NUMBER_TYPE: "[ERROR] 로또 번호는 숫자여야 합니다.",
  NUMBER_LENGTH: "[ERROR] 로또 번호는 6개여야 합니다.",
  NUMBER_RANGE: "[ERROR] 로또 번호의 숫자 범위는 1~45까지입니다.",
  NUMBER_DUPLICATED: "[ERROR] 로또 번호는 중복되지 않아야 합니다.",
});

module.exports = {
  MESSAGE,
  ERROR,
};

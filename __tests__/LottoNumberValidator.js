const { Validator } = require("../src/utils/Validator");
const { MESSAGE_ACCORDING_ERROR } = require("../src/constants/Message");

describe("로또 번호 예외 테스트", () => {
  test("입력 받은 당첨 번호가 6개가 아니라면 예외처리", () => {
    expect(() => {
      Validator.winnigLottoNumberValidator([1, 2, 3, 4, 5], 7);
    }).toThrow(MESSAGE_ACCORDING_ERROR.LOTTO_NOT_LENGTH_SIX);
  });
  test("입력 받은 당첨 번호가 숫자외에 것을 포함한다면 예외처리", () => {
    expect(() => {
      Validator.winnigLottoNumberValidator([1, 2, 3, 4, NaN, 5], 7);
    }).toThrow(MESSAGE_ACCORDING_ERROR.LOTTO_NOT_NUMBER);
  });
  test("입력 받은 당첨 번호가 숫자외에 것을 포함한다면 예외처리", () => {
    expect(() => {
      Validator.winnigLottoNumberValidator([1, 2, 3, 4, NaN, 5], 7);
    }).toThrow(MESSAGE_ACCORDING_ERROR.LOTTO_NOT_NUMBER);
  });
  test("입력 받은 당첨 번호중 어떤 것이라도 1~45범위를 벗어난다면 예외처리", () => {
    expect(() => {
      Validator.winnigLottoNumberValidator([1, 2, 3, 4, 46, 5], 7);
    }).toThrow(MESSAGE_ACCORDING_ERROR.LOTTO_NOT_RANGE);
  });
  test("입력 받은 당첨 번호중 중복이 있다면 예외처리", () => {
    expect(() => {
      Validator.winnigLottoNumberValidator([1, 2, 3, 3, 42, 5], 7);
    }).toThrow(MESSAGE_ACCORDING_ERROR.LOTTO_NOT_DUPLICATED);
  });

  test("입력 받은 보너스 번호가 숫자가 아니라면 예외처리", () => {
    expect(() => {
      Validator.winnigLottoNumberValidator([1, 2, 3, 4, 42, 5], "엥");
    }).toThrow(MESSAGE_ACCORDING_ERROR.BONUS_TYPE_NOT_NUMBER);
  });
  test("입력 받은 보너스 번호가 당첨 번호와 중복이라면 예외처리", () => {
    expect(() => {
      Validator.winnigLottoNumberValidator([1, 2, 3, 4, 42, 5], 5);
    }).toThrow(MESSAGE_ACCORDING_ERROR.BONUS_ALREADY_EXISTED);
  });
  test("입력 받은 보너스 번호가 1~45범위 밖 이라면 예외처리", () => {
    expect(() => {
      Validator.winnigLottoNumberValidator([1, 2, 3, 4, 42, 5], 55);
    }).toThrow(MESSAGE_ACCORDING_ERROR.BONUS_OUT_OF_RANGE);
  });
});

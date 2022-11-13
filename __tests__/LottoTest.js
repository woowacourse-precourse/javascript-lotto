const Exception = require("../src/error/exception");
const Lotto = require("../src/error/Lotto");
const { ERROR } = require("../src/utils/constant");

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]).checkInput();
    }).toThrow(ERROR.DUPLICATE);
  });

  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]).checkInput();
    }).toThrow(ERROR.DUPLICATE);
  });

  test("당첨 번호 문자 길이 예외처리", () => {
    const input = "1";
    const exception = new Exception();
    const errorTest = () => exception.isAllow(new Lotto(input));

    expect(errorTest).toThrow(ERROR.WIN_NUMBER);
  });

  test("당첨 번호 개수 예외처리", () => {
    const input = "1,2,3,4,5,6,7";
    const exception = new Exception();
    const errorTest = () => exception.isAllow(new Lotto(input));

    expect(errorTest).toThrow(ERROR.WIN_NUMBER);
  });

  test("당첨 번호 유효 숫자 범위 예외처리", () => {
    const input = "2,4,8,16,32,64";
    const exception = new Exception();
    const errorTest = () => exception.isAllow(new Lotto(input));

    expect(errorTest).toThrow(ERROR.WIN_NUMBER);
  });

  test("당첨 번호 문자 포함 예외처리", () => {
    const input = "2,4,8,16,32,a";
    const exception = new Exception();
    const errorTest = () => exception.isAllow(new Lotto(input));

    expect(errorTest).toThrow(ERROR.WIN_NUMBER);
  });

  test("당첨 번호 0 포함 예외처리", () => {
    const input = "2,4,8,0,32,64";
    const exception = new Exception();
    const errorTest = () => exception.isAllow(new Lotto(input));

    expect(errorTest).toThrow(ERROR.WIN_NUMBER);
  });

  test("당첨 번호 공백 포함 예외처리", () => {
    const input = "2,4,8,1 6,32,64";
    const exception = new Exception();
    const errorTest = () => exception.isAllow(new Lotto(input));

    expect(errorTest).toThrow(ERROR.WIN_NUMBER);
  });
});

const WinningLotto = require("../src/domain/lotto/WinningLotto");
const LottoNumberRangeException = require("../src/exception/lotto/LottoNumberRangeException");
const WinningLottoDuplicatedException = require("../src/exception/lotto/WinningLottoDuplicatedException");
const NotNumberException = require("../src/exception/NotNumberException");

describe("로또 클래스 테스트", () => {
  test("보너스 번호가 당첨 번호와 중복인 경우", () => {
    expect(() => {
      new WinningLotto([1, 2, 3, 4, 5, 6], 6);
    }).toThrow(WinningLottoDuplicatedException);
    expect(() => {
      new WinningLotto([1, 2, 3, 4, 5, 6], 1);
    }).toThrow(WinningLottoDuplicatedException);
  })

  test("보너스 번호가 숫자가 아닌 값인 경우", () => {
    expect(() => {
      new WinningLotto([1, 2, 3, 4, 5, 6]);
    }).toThrow(NotNumberException);
    expect(() => {
      new WinningLotto([1, 2, 3, 4, 5, 6], '');
    }).toThrow(NotNumberException);
    expect(() => {
      new WinningLotto([1, 2, 3, 4, 5, 6], 'a');
    }).toThrow(NotNumberException);
  })

  test("보너스 번호가 범위에 벗어난 숫자인 경우", () => {
    expect(() => {
      new WinningLotto([1, 2, 3, 4, 5, 6], 0);
    }).toThrow(LottoNumberRangeException);
    expect(() => {
      new WinningLotto([1, 2, 3, 4, 5, 6], 46);
    }).toThrow(LottoNumberRangeException);
  })
});

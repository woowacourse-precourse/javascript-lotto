const Lotto = require("../src/domain/lotto/Lotto");
const WinningLotto = require("../src/domain/lotto/WinningLotto");
const LottoNumberRangeException = require("../src/exception/lotto/LottoNumberRangeException");
const WinningLottoDuplicatedException = require("../src/exception/lotto/WinningLottoDuplicatedException");
const NotNumberException = require("../src/exception/NotNumberException");

describe("당첨 로또 클래스 테스트", () => {

  test("당첨 번호에 다른 로또번호가 몇개나 포함되는지 갯수를 세는 함수", () => {
    expect(
      WinningLotto.of([1, 2, 3, 4, 5, 6], 7).countSameNumber(new Lotto([40, 41, 42, 43, 44, 45]))
    ).toEqual(0);
    expect(
      WinningLotto.of([1, 2, 3, 4, 5, 6], 7).countSameNumber(new Lotto([1, 2, 3, 4, 5, 6]))
    ).toEqual(6);
    expect(
      WinningLotto.of([1, 2, 3, 4, 5, 6], 7).countSameNumber(new Lotto([1, 2, 3, 4, 8, 9]))
    ).toEqual(4);
    expect(
      WinningLotto.of([1, 2, 3, 4, 5, 6], 7).countSameNumber(new Lotto([1, 2, 3, 4, 5, 6]))
    ).toEqual(6);
  })

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

const LottoNumber = require('../src/domain/lotto/LottoNumber');
const LottoNumberRangeException = require('../src/exception/lotto/LottoNumberRangeException');
const NotNumberException = require('../src/exception/NotNumberException');

describe("LottoNumber 클래스 테스트", () => {
  test("로또 숫자가 숫자가 아닌 경우", () => {
    expect(() => {
      LottoNumber.validate('a');
    }).toThrow(NotNumberException);
    expect(() => {
      LottoNumber.validate([]);
    }).toThrow(NotNumberException);
  });

  test("로또 숫자가 범위를 벗어난 경우", () => {
    expect(() => {
      LottoNumber.validate(0);
    }).toThrow(LottoNumberRangeException);
    expect(() => {
      LottoNumber.validate(46);
    }).toThrow(LottoNumberRangeException);
  });
});

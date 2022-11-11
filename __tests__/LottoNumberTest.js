const LottoNumber = require('../src/domain/lotto/LottoNumber');
const LottoNumberRangeException = require('../src/exception/lotto/LottoNumberRangeException');
const NotNumberException = require('../src/exception/NotNumberException');

describe("LottoNumber 클래스 테스트", () => {
  test("로또 숫자가 조건에 만족하는 경우", () => {
    expect(LottoNumber.of(1).getNumber()).toEqual(1);
    expect(LottoNumber.of(23).getNumber()).toEqual(23);
    expect(LottoNumber.of(45).getNumber()).toEqual(45);
  });

  test("로또 숫자가 숫자가 아닌 경우", () => {
    expect(() => {
      new LottoNumber('a');
    }).toThrow(NotNumberException);
    expect(() => {
      new LottoNumber([]);
    }).toThrow(NotNumberException);
  });

  test("로또 숫자가 범위를 벗어난 경우", () => {
    expect(() => {
      new LottoNumber(0);
    }).toThrow(LottoNumberRangeException);
    expect(() => {
      new LottoNumber(46);
    }).toThrow(LottoNumberRangeException);
  });
});

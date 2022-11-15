const { Console } = require('@woowacourse/mission-utils');

const Lotto = require('../src/Lotto');
const { InvalidLottoNumberRangeError } = require('../src/lib/errors');

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호의 개수가 6개 미만이면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5]);
    }).toThrow('[ERROR]');
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR]');
  });

  // 아래에 추가 테스트 작성 가능
  test('로또 번호에 범위를 벗어나는 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([0, 1, 2, 3, 4, 5]);
    }).toThrow(new InvalidLottoNumberRangeError());
    expect(() => {
      new Lotto([0, 13, 24, 3, 26, 45]);
    }).toThrow(new InvalidLottoNumberRangeError());
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 46]);
    }).toThrow(new InvalidLottoNumberRangeError());
    expect(() => {
      new Lotto([0, 1, 2, 45, 46, 47]);
    }).toThrow(new InvalidLottoNumberRangeError());
    expect(() => {
      new Lotto([-1, 0, 1, 2, 3, 4]);
    }).toThrow(new InvalidLottoNumberRangeError());
    expect(() => {
      new Lotto([3, 5, 6, 11, 35, 58]);
    }).toThrow(new InvalidLottoNumberRangeError());
  });
});

Console.close();

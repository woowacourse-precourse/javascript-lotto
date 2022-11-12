const Lotto = require('../src/Lotto');

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      // eslint-disable-next-line no-new
      new Lotto(['1', '2', '3', '4', '5', '6', '7']);
    }).toThrow('[ERROR] 로또 번호는 6개여야 합니다.');
  });

  test('로또 번호의 개수가 6개보다 작으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto(['1', '2', '3', '4', '5']);
    }).toThrow('[ERROR] 로또 번호는 6개여야 합니다.');
  });

  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto(['1', '2', '3', '4', '5', '5']);
    }).toThrow('[ERROR] 로또 번호는 중복이 없어야 합니다.');
  });

  test('로또 번호가 45를 넘으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto(['1', '46', '3', '4', '5', '6']);
    }).toThrow('[ERROR] 로또 번호는 1 ~ 45 사이의 숫자여야 합니다.');
  });

  test('로또 번호가 1보다 작으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto(['0', '2', '3', '4', '5', '6']);
    }).toThrow('[ERROR] 로또 번호는 1 ~ 45 사이의 숫자여야 합니다.');
  });

  test('로또 번호에 숫자 이외의 문자가 들어오면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([0, 'a', 3, 4, 5, 6]);
    }).toThrow('[ERROR] 로또 번호는 1 ~ 45 사이의 숫자여야 합니다.');
  });
});

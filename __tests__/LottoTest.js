const Lotto = require("../src/validation/Lotto");

describe("로또 클래스 테스트", () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR] 로또 번호는 6개여야 합니다.');
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR] 로또 번호에 중복되는 숫자가 있습니다.');
  });

  test('로또 번호가 오름차순이 아니면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([2, 4, 1, 3, 5, 6]);
    }).toThrow('[ERROR] 번호가 오름차순으로 정렬되지 않습니다.');
  });
  
  test('로또 번호에 1에서 45의 수가 아닌 것이 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([0, 2, 3, 4, 5, 6]);
    }).toThrow('[ERROR] 1에서 45의 수가 아닌 것이 있습니다.');
    expect(() => {
      new Lotto([2, 3, 4, 5, 6, 46]);
    }).toThrow('[ERROR] 1에서 45의 수가 아닌 것이 있습니다.');
    expect(() => {
      new Lotto(['', 1, 2, 3, 4, 5]);
    }).toThrow('[ERROR] 1에서 45의 수가 아닌 것이 있습니다.');
    expect(() => {
      new Lotto([' ', 1, 2, 3, 4, 5]);
    }).toThrow('[ERROR] 1에서 45의 수가 아닌 것이 있습니다.');
  });

  test('로또 번호에 정수가 아닌 것이 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1.44, 2, 3, 4, 5, 6]);
    }).toThrow('[ERROR] 로또 번호에 정수가 아닌 것이 있습니다.');
    expect(() => {
      new Lotto(['a', 2, 3, 4, 5, 6]);
    }).toThrow('[ERROR] 로또 번호에 정수가 아닌 것이 있습니다.');
    expect(() => {
      new Lotto(['.', 2, 3, 4, 5, 6]);
    }).toThrow('[ERROR] 로또 번호에 정수가 아닌 것이 있습니다.');
  });
});

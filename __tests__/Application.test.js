const Application = require('../src/Application');

let application;

beforeEach(() => {
  application = new Application();
});

describe('숫자 변환 함수 테스트', () => {
  test('메소드 이름은 "convertNumber"로 정의된다.', () => {
    const METHOD_NAME = 'convertNumber';

    expect(Application.convertNumber.name).toEqual(METHOD_NAME);
  });

  test('전달받은 인수를 숫자로 변환시킨다.', () => {
    expect(Application.convertNumber('111')).toEqual(111);

    expect(Application.convertNumber('222')).toEqual(222);
  });

  test('전달받은 인수는 숫자로 변환이 불가능하면 예외를 발생시킨다.', () => {
    const ERROR_TEXT = '[ERROR] 전달된 인수는 숫자로 변환이 가능해야 합니다.';

    expect(() => {
      Application.convertNumber('a1a1');
    }).toThrow(ERROR_TEXT);

    expect(() => {
      Application.convertNumber('b1b1');
    }).toThrow(ERROR_TEXT);
  });
});

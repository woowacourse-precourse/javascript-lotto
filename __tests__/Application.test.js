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
    expect(Application.convertNumber('333')).toEqual(333);
    expect(Application.convertNumber('444')).toEqual(444);
  });
});

const { makeString } = require('../src/Print');

describe("기능 테스트", () => {
  test("발행 로또 출력 스트링을 만드는 함수 테스트", () => {
    const input = [8, 21, 23, 41, 42, 43];
    const result = makeString(input);

    expect(result).toEqual('[8, 21, 23, 41, 42, 43]');
  });

});

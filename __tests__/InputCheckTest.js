const InputCheck = require('../src/model/InputCheck');

describe('사용자 입력 값 유효성 테스트', () => {
  test('입력 값이 숫자인지 확인', () => {
    const [input1, input2] = ['12000a', '1000'];

    const INPUT_CHECK = new InputCheck();

    const [CHECKED1, CHECKED2] = [
      INPUT_CHECK.checkIsNum(input1),
      INPUT_CHECK.checkIsNum(input2),
    ];
    expect(CHECKED1).toBeFalsy();
    expect(CHECKED2).toBeTruthy();
  });
});

const InputCheck = require('../src/model/InputCheck');
const INPUT_CHECK = new InputCheck();

describe('사용자 입력 값 유효성 테스트', () => {
  test('입력 값이 숫자인지 확인', () => {
    const [input1, input2] = ['12000a', '1000'];

    const [CHECKED1, CHECKED2] = [
      INPUT_CHECK.checkIsNum(input1),
      INPUT_CHECK.checkIsNum(input2),
    ];

    expect(CHECKED1).toBeFalsy();
    expect(CHECKED2).toBeTruthy();
  });

  test('입력 값이 1,000원 이하가 아닌지 확인', () => {
    const [input1, input2] = ['980', '1000'];

    const [CHECKED1, CHECKED2] = [
      INPUT_CHECK.checkThousand(input1),
      INPUT_CHECK.checkThousand(input2),
    ];

    expect(CHECKED1).toBeFalsy();
    expect(CHECKED2).toBeTruthy();
  });
});

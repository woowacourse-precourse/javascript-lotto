const InputCheck = require('../src/model/InputCheck');
const INPUT_CHECK = new InputCheck();

describe('사용자 입력 값 유효성 테스트', () => {
  test('입력 값이 숫자인지 확인', () => {
    const [input1, input2] = ['12000a', 1000];

    const [CHECKED1, CHECKED2] = [
      INPUT_CHECK.checkIsNum(input1),
      INPUT_CHECK.checkIsNum(input2),
    ];

    expect(CHECKED1).toBeFalsy();
    expect(CHECKED2).toBeTruthy();
  });

  test('입력 값이 1,000원 이하가 아닌지 확인', () => {
    const [input1, input2] = [980, 1000];

    const [CHECKED1, CHECKED2] = [
      INPUT_CHECK.checkThousand(input1),
      INPUT_CHECK.checkThousand(input2),
    ];

    expect(CHECKED1).toBeFalsy();
    expect(CHECKED2).toBeTruthy();
  });

  test('입력 값이 1,000원 단위로 나누어 떨어지는지 확인', () => {
    const [input1, input2] = [10500, 14000];

    const [CHECKED1, CHECKED2] = [
      INPUT_CHECK.checkUnit(input1),
      INPUT_CHECK.checkUnit(input2),
    ];

    expect(CHECKED1).toBeFalsy();
    expect(CHECKED2).toBeTruthy();
  });

  test('보너스 번호 입력의 범위 확인, 당첨 번호와 중복인지 확인', () => {
    const [input1, input2, input3] = [12, 46, 0];
    const winSplitNum = [1, 2, 3, 4, 5, 6];

    expect(INPUT_CHECK.checkSameWinNum(input1, winSplitNum)).toBeTruthy();
    expect(INPUT_CHECK.checkNumRange(input2)).toBeFalsy();
    expect(INPUT_CHECK.checkNumRange(input3)).toBeFalsy();
  });
});

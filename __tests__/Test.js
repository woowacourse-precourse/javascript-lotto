const { makeString } = require('../src/Print');
const { getProfitMessage, getStatisticsMessage } = require('../src/constant/Constant');
const { validateBonusNumber } = require('../src/Validation');

describe("기능 테스트", () => {
  test("발행 로또 출력 스트링을 만드는 함수 테스트", () => {
    const input = [8, 21, 23, 41, 42, 43];
    const result = makeString(input);

    expect(result).toEqual('[8, 21, 23, 41, 42, 43]');
  });

  test("당첨 통계 출력 메시지", () => {
    const input = { three:1, four:0, five:0, bonus:0, six:0 };
    const result = getStatisticsMessage(input);

    expect(result).toEqual('3개 일치 (5,000원) - 1개\n4개 일치 (50,000원) - 0개\n5개 일치 (1,500,000원) - 0개\n5개 일치, 보너스 볼 일치 (30,000,000원) - 0개\n6개 일치 (2,000,000,000원) - 0개\n');
  });

  test("수익률 출력 메시지", () => {
    const input = 62.5;
    const result = getProfitMessage(input);

    expect(result).toEqual('총 수익률은 62.5%입니다.\n');
  });

  test("보너스 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      const input = 5;
      const winningNumber = [1, 2, 3, 4, 5, 6];
      validateBonusNumber(input, winningNumber);

    }).toThrow("[ERROR]");
  });

  test("보너스 번호가 문자면 예외가 발생한다.", () => {
    expect(() => {
      const input = 'a';
      const winningNumber = [1, 2, 3, 4, 5, 6];
      validateBonusNumber(input, winningNumber);

    }).toThrow("[ERROR]");
  });
  
  test("보너스 번호에 범위를 벗어난 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      const input = 0;
      const winningNumber = [1, 2, 3, 4, 5, 6];
      validateBonusNumber(input, winningNumber);

    }).toThrow("[ERROR]");
  });
  
  test("보너스 번호에 범위를 벗어난 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      const input = 46;
      const winningNumber = [1, 2, 3, 4, 5, 6];
      validateBonusNumber(input, winningNumber);

    }).toThrow("[ERROR]");
  });
});

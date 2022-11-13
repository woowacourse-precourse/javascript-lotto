const Lotto = require("../src/Lotto");

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });
  // 아래에 추가 테스트 작성 가능
  test("로또 번호에 문자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto(['a', 2, 3, 4, 5, 5]);

    }).toThrow("[ERROR]");
  });
  
  test("로또 번호에 범위를 벗어난 숫자가 있으면 예외가 발생한다1.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 55]);

    }).toThrow("[ERROR]");
  });
  
  test("로또 번호에 범위를 벗어난 숫자가 있으면 예외가 발생한다2.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 0]);

    }).toThrow("[ERROR]");
  });
  
  test("발행된 로또 한장과 당첨 번호 비교 함수 테스트", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const bonusNumber = 7;
    const eachLotto = [1, 3, 5, 14, 22, 45];

    const result = lotto.comparisonEachLotto(eachLotto, bonusNumber);

    expect(result).toEqual({ cnt: 3, bonusCnt: 0 });
  });
  
  // 3 : 3개 일치, 4 : 4개 일치, 5 : 5개 일치, 7: 5개 일치 + 보너스 번호 일치. 6 : 6개 일치
  test("당첨 번호와 비교 후 같은 숫자의 값을 입력 받으면 그에 대한 결과를 리턴한다.", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const cnt = 3;
    const bonusCnt = 0;

    const result = lotto.calcRank(cnt, bonusCnt);

    expect(result).toEqual(3);
  });

  test("발행된 로또 전체와 당첨 번호 비교 함수 테스트", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const bonusNumber = 7;
    const publishedlottos = [
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
      [1, 8, 11, 31, 41, 42],
      [13, 14, 16, 38, 42, 45],
      [7, 11, 30, 40, 42, 43],
      [2, 13, 22, 32, 38, 45],
      [1, 3, 5, 14, 22, 45],
    ];
    const result = lotto.comparisonNumbers(publishedlottos, bonusNumber);
    expect(result).toEqual({ three: 1, four: 0, five: 0, bonus: 0, six:0 });
  });
});

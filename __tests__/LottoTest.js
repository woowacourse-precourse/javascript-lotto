const Lotto = require("../src/Lotto");

describe("로또 클래스 테스트", () => {
  const lotto = new Lotto();

  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      lotto.validate([1, 2, 3, 4, 5, 6, 7],6);
    }).toThrow("[ERROR]");
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test("로또 번호의 범위가 1~45를 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      lotto.validate([1, 2, 3, 4, 5, 90]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      lotto.validate([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });

  test("보너스 번호에 당첨번호와 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      lotto.validateBonus([1, 2, 3, 4, 5, 6],[1]);
    }).toThrow("[ERROR]");
  });

  test('구입한 로또와 당첨번호, 보너스번호를 비교하고 결과를 출력한다.', () => {
    const lottoAndBonusNum = [['1','2','3','4','5','6'],['7']];
    const makedLottos = [
      [ 1, 2, 3, 4, 5, 7 ],
      [ 1, 2, 3, 4, 5, 6 ],
      [ 4, 5, 6, 14, 36, 39 ],
      [ 4, 5, 26, 29, 39, 40 ]];
    expect(lotto.checkCorrect(lottoAndBonusNum, makedLottos)
    ).toEqual([[ 6, 3, 2 ],1]);
  });
  
  test('로또 결과 카운트 테스트', () => {
    const correctNums = [3,4,6];
    const correctBonus = 3;

    expect(
      lotto.checkResult(correctNums, correctBonus)
    ).toEqual([[ { '3개': 1 }, { '4개': 1 }, { '5개': 0 }, { '6개': 1 } ], 3])
  });
  
  
});

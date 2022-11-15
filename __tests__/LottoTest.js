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

 test('당첨번호와 로또번호 1세트를 비교하고 일치하는 숫자만 리스트로 반환한다.', () => {
    const makedLot = [ 1, 2, 3, 4, 5, 6 ];
    const winningNumLs = [ '1', '2', '3', '5', '6', '7' ];
    expect(lotto.checkWinNumInlot(makedLot, winningNumLs)
    ).toEqual([ 1, 2, 3, 5, 6])
  });

  test('5개 일치한 로또를 보너스번호와 비교하여 2등인지 확인하고 불린을 반환한다.', () => {
    const winNumInLot = [ 1, 2, 3, 5, 6 ];
    const makedLotto = [ 1, 2, 3, 5, 6, 7 ];
    const bonusNum = 7;
    expect(lotto.check2ndPrize(winNumInLot, makedLotto, bonusNum)
    ).toEqual(true)
  });

  test('5개 일치한 로또번호에서 나머지 1개가 보너스번호와 일치하는지 확인하고 불린을 반환한다. ', () => {
    const correctFiveNumLottos = [ 1, 2, 3, 5, 6, 7 ];
    const bonusNum = 7;
    expect(lotto.checkHasBonusNum(correctFiveNumLottos, bonusNum)
    ).toEqual(true)
  });
  
  

  test('구입한 로또와 당첨번호, 보너스번호를 비교하고 결과값을 반환한다.', () => {
    const lottoAndBonusNum = [['1','2','3','4','5','6'],['7']];
    const makedLottos = [
      [ 1, 2, 3, 4, 5, 7 ],
      [ 1, 2, 3, 4, 5, 6 ],
      [ 4, 5, 6, 14, 36, 39 ],
      [ 4, 5, 26, 29, 39, 40 ]];
    expect(lotto.checkCorrect(lottoAndBonusNum, makedLottos)
    ).toEqual([[ 6, 3, 2 ],1]);
  });

  test('카운트된 결과를 바탕으로 당첨개수를 순서대로 리스트화해서 반환한다.', () => {
    const winningList = [ { '3개': 1 }, { '4개': 1 }, { '5개': 0 }, { '6개': 1 } ];
    const secondPrize = 2;

    expect(lotto.preparePrint(winningList, secondPrize)
    ).toEqual([1,1,0,2,1])
  });
  
  
  test('로또 결과를 카운트해서 오브젝트 리스트로 반환하고 출력한다. ', () => {
    const correctNums = [3,4,6];
    const correctBonus = 3;

    expect(
      lotto.checkResult(correctNums, correctBonus)
    ).toEqual([[ { '3개': 1 }, { '4개': 1 }, { '5개': 0 }, { '6개': 1 } ], 3])
  });
  
  
});

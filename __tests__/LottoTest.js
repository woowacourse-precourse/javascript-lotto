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
  
  test('로또 번호가 제한 범위 밖이면 예외가 발생한다.', () => {    
    const notRangeLottos = [
      [1, 2, 3, 47, 5, 6],
      [11, 22, 0, 44, 15, 6],
      [11, 3, 44, 34, -30, 6],
      [7, 4, 12, 44, 3, 46]
    ];  
    notRangeLottos.forEach(lotto => {   
      expect(() => new Lotto(lotto)).toThrowError();
    });
  });
  
  test('로또 번호가 숫자가 아니라면 예외가 발생한다.', () => {        
    const notNumberLottos = [
      [1, 2, 3, 4, 5, 'a'],
      [11, 22, 3, ' ', 15, 6],
      [11, 3, '@#!', 34, 15, 6]
    ];   
    notNumberLottos.forEach(lotto => {   
      expect(() => new Lotto(lotto)).toThrowError();
    });
  });
  
  test('로또 번호가 소수라면 예외가 발생한다.', () => {        
    const diffrentLengthLottos = [
      [1, 2, 3, 43.1, 5, 6],
      [11, 22, 4.1, 44, 15, 6],
      [11, 3, 44.3, 34, 30, 6],
      [7, 4, 12, 44.2, 3, 41]
    ];
    diffrentLengthLottos.forEach(lotto => {   
      expect(() => new Lotto(lotto)).toThrowError();
    });
  });
});
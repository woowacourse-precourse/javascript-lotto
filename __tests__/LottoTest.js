const Lotto = require("../src/Lotto");
const MadeNumber = require('../src/LottoTool');

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
  test("로또 번호가 숫자가 아닐 시 예외가 발생한다.", () => {
    expect(() => {
      MadeNumber.checkLotto('a,2,3,4,5,6')
    }).toThrow("[ERROR]");
    expect(() => {
      MadeNumber.checkBonusNumber('b')
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 음수를 넣을 경우 예외가 발생한다.", () => {
    expect(() => {
      MadeNumber.checkLotto('-1,2,3,4,5,6');
    }).toThrow("[ERROR]");
    expect(() => {
      MadeNumber.checkBonusNumber('-2');
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 45 이상 숫자를 넣을 경우 예외가 발생한다.", () => {
    expect(() => {
      MadeNumber.checkLotto('1,2,3,4,5,46')
    }).toThrow("[ERROR]");
    expect(() => {
      MadeNumber.checkBonusNumber('47')
    }).toThrow("[ERROR]");
  });
  
  test("로또 번호에 공백 입력 시 예외가 발생한다.", () => {
    expect(() => {
      MadeNumber.checkLotto('1,2,3,4, ,6')
    }).toThrow("[ERROR]");
    expect(() => {
      MadeNumber.checkBonusNumber('5 ')
    }).toThrow("[ERROR]");
  });
});

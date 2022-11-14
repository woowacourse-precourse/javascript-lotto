const Lotto = require("../src/Lotto");
const game = require('../src/LottoGame');

describe("로또 클래스 테스트", () => {

  
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 1, 1, 4, 5, 5]);
    }).toThrow();
  });

  // 아래에 추가 테스트 작성 가능
  describe('로또 당첨 관련 테스트', () => {
    
    let target;
    let lottoGame;
    beforeEach(() => {
      lottoGame = new game.GameBuilder()
      .lottoLength(6)
      .maxNumber(45)
      .minPrice(1000)
      .build();

      target = new Lotto([1,2,3,4,5,6]);
      
    })

    test('당첨 번호 비교 후 맞는 개수 카운트', () => {
      
      expect(lottoGame.countHit([1,2,3,4,5,6])).toBe(6);
      expect(lottoGame.countHit([1,2,3,4,7,8])).toBe(4);
      expect(lottoGame.countHit([1,2,3,9,10,11])).toBe(3);
    });
  
    test('2등 판별을 위한 보너스 번호 당첨', () => {
      const bonus = 7;
      const secondPrize = lottoGame.drawLottery([1,2,3,4,5,7], bonus);
      expect(secondPrize).toBe(2);
    });

  });
});

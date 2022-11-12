const App = require('../../src/App');
const Purchaser = require('../../src/domain/Purchaser');
const Lotto = require('../../src/Lotto');

describe('로또 클래스 테스트', () => {
  // createToken(): 정수값을 받으면 해당 수만큼의 토큰을 리턴함
  test('입력된 숫자만큼 토큰을 리턴하지 않으면 예외가 발생한다.', () => {
    const input = 3;
    const purchaser = new Purchaser();

    expect(purchaser.createToken(input).length).toBe(input);
  });

  // buyLotto(): 정수값을 받으면 해당 수만큼의 Lotto 객체를 배열로 리턴함
  test('buyLotto 함수가 리턴하는 배열 요소가 Lotto 타입인지 검사', () => {
    const input = 3;
    const purchaser = new Purchaser();

    purchaser
      .buyLotto(input)
      .forEach((lotto) => expect(lotto).toBeInstanceOf(Lotto));
  });

  test('buyLotto 함수가 리턴하는 배열 길이가 로또 구매 갯수와 일치하는지 검사', () => {
    const input = 3;
    const purchaser = new Purchaser();

    expect(purchaser.buyLotto(input)).toHaveLength(input);
  });

  // compare(): 로또 번호와 당첨 번호 및 보너스 번호를 비교하여 몇개나 일치하는지 반환
  test('compare함수 테스트', () => {
    const purchaser = new Purchaser();
    const lottoToken = [1, 4, 6, 23, 28, 40];
    const winnerNumber = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;
    expect(purchaser.compare(lottoToken, winnerNumber, bonusNumber)).toEqual({
      count: 3,
      bonus: 0,
    });
  });

  // getReturnRate(): 수익률을 계산하는 함수
  test('수익률이 소수점 둘째 자리에서 반올림 되는지 검사', () => {
    const purchaser = new Purchaser();
    const money = 7000;
    const revenue = 5000;
    expect(purchaser.getReturnRate(money, revenue)).toBe(71.4);
  });
});

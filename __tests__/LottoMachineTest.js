const { ERROR } = require('../src/Constants');
const LottoMachine = require('../src/LottoMachine');
const lottoMachine = new LottoMachine();

describe('LottoMachine Class Test', () => {
  test('입력한 금액을 1000으로 나눈 나머지가 500이면 예외가 발생한다.', () => {
    expect(() => {
      lottoMachine.countLottos(1500);
    }).toThrow(ERROR.NOT_THOUSANDS);
  });

  test('입력한 금액에 문자열이 있으면 예외가 발생한다.', () => {
    expect(() => {
      lottoMachine.countLottos('1000l');
    }).toThrow(ERROR.NOT_THOUSANDS);
  });

  test('입력한 금액이 1000보다 작으면 예외가 발생한다.', () => {
    expect(() => {
      lottoMachine.countLottos(0);
    }).toThrow(ERROR.LESS_MONEY);
  });

  test('입력한 금액이 5000이면 발행한 로또의 개수는 5이다.', () => {
    const result = lottoMachine.countLottos(5000);
    expect(result).toBe(5);
  });

  test('입력한 금액이 10000이면 발행한 로또를 element로 갖는 로또 리스트의 길이는 5이다.', () => {
    const result = lottoMachine.makeLottoList(10000);
    expect(result.length).toBe(10);
  });
});

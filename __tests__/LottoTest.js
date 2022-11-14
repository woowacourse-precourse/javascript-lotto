const Lotto = require('../src/Lotto');
const LottoSet = require('../src/LottoSet');
const Bonus = require('../src/Bonus');

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR]');
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR]');
  });

  // 당청 번호 입력 예외 처리
  test('1~45 숫자가 아닐 경우 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 46]);
    }).toThrow('[ERROR] 1~45 사이 숫자여야 합니다.');
  });

  test('숫자가 아닐 경우 예외가 발생한다.', () => {
    expect(() => {
      new Lotto(['a', 'ㄱ', '!', 'z', 'Z', '@']);
    }).toThrow('[ERROR] 숫자여야 합니다.');
  });

  // 로또 구입 금액 입력 예외 처리
  test('숫가가 아닐 경우 예외가 발생한다.', () => {
    const money = '8!aㅇ';
    expect(() => {
      const lottoSet = new LottoSet();
      lottoSet.validate(money);
    }).toThrow('[ERROR] 숫자만 입력해야 합니다.');
  });

  test('1000으로 나눠 떨어지지 않는 경우 예외가 발생한다.', () => {
    const money = '8500';
    expect(() => {
      const lottoSet = new LottoSet();
      lottoSet.validate(money);
    }).toThrow('[ERROR] 로또 구입 후 잔돈이 남습니다.');
  });

  test('1000원 미만 금액일 경우 예외가 발생한다.', () => {
    const money = '800';
    expect(() => {
      const lottoSet = new LottoSet();
      lottoSet.validate(money);
    }).toThrow('[ERROR] 최소 금액이 1000원 입니다.');
  });

  // 보너스 번호 입력 예외 처리
  test('1~45 사이 숫자가 아닐 경우 예외가 발생한다.', () => {
    const winning = '1,2,3,4,5,6';
    const bonus = '0';
    expect(() => {
      new Bonus(winning, bonus);
    }).toThrow('[ERROR] 1~45 사이 숫자여야 합니다.');
  });

  test('숫자가 아닐 경우 예외가 발생한다.', () => {
    const winning = '1,2,3,4,5,6';
    const bonus = 'a';
    expect(() => {
      new Bonus(winning, bonus);
    }).toThrow('[ERROR] 숫자만 입력해야 합니다.');
  });

  test('한자리 숫자가 아닐 경우 예외가 발생한다.', () => {
    const winning = '1,2,3,4,5,6';
    const bonus = '7,8';
    expect(() => {
      new Bonus(winning, bonus);
    }).toThrow('[ERROR] 보너스 숫자 하나만 입력해야 합니다.');
  });

  test('보너스 번호가 당첨 번호와 중복될 경우 예외가 발생한다.', () => {
    const winning = '1,2,3,4,5,6';
    const bonus = '1';
    expect(() => {
      new Bonus(winning, bonus);
    }).toThrow('[ERROR] 당첨 번호와 보너스 번호가 중복될 수 없습니다.');
  });
});

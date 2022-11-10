const { Console } = require('@woowacourse/mission-utils');
const LottoStore = require('../src/LottoStore');

describe('로또 가게 클래스 테스트', () => {
  test('a - 금액이 숫자 + 뒷글자가 000이 아니면 에러 처리', () => {
    const lottoStore = new LottoStore('a');

    expect(() => {
      lottoStore.getBuyAt();
    }).toThrow('[ERROR]');
  });

  test('a1000 - 금액이 숫자 + 뒷글자가 000이 아니면 에러 처리', () => {
    const lottoStore = new LottoStore('a1000');

    expect(() => {
      lottoStore.getBuyAt();
    }).toThrow('[ERROR]');
  });

  test('1a000 - 금액이 숫자 + 뒷글자가 000이 아니면 에러 처리', () => {
    const lottoStore = new LottoStore('1a000');

    expect(() => {
      lottoStore.getBuyAt();
    }).toThrow('[ERROR]');
  });

  test('1200 - 금액이 숫자 + 뒷글자가 000이 아니면 에러 처리', () => {
    const lottoStore = new LottoStore('1200');

    expect(() => {
      lottoStore.getBuyAt();
    }).toThrow('[ERROR]');
  });

  test('(공백)12000 - 금액이 숫자 + 뒷글자가 000이 아니면 에러 처리', () => {
    const lottoStore = new LottoStore(' 12000');

    expect(() => {
      lottoStore.getBuyAt();
    }).toThrow('[ERROR]');
  });

  test('12000(공백) - 금액이 숫자 + 뒷글자가 000이 아니면 에러 처리', () => {
    const lottoStore = new LottoStore('12000 ');

    expect(() => {
      lottoStore.getBuyAt();
    }).toThrow('[ERROR]');
  });

  test('옳은 입력값 - 주어진 돈만큼 로또가 나왔는지 확인', () => {
    const lottoStore = new LottoStore('12000');

    const lottoCount = lottoStore.getBuyAt().length;

    expect(lottoCount).toEqual(12);

    Console.close();
  });
});

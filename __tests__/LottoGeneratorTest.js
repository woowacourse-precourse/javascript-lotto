const { LottoGenerator, Lotto } = require("../src/domain");
const { ConsoleAdapter } = require("../src/adapters");

const isSorted = (numbers) => {
  return numbers.every((number, index) => {
    if (index === numbers.length - 1) {
      return true;
    }

    return number < numbers[index + 1];
  });
};

describe("로또 생성 클래스 테스트", () => {
  afterAll(() => {
    const console = new ConsoleAdapter();
    console.close();
  });

  describe("createLotto 메서드", () => {
    test("로또를 생성할 수 있어야 한다.", () => {
      // given
      const generator = new LottoGenerator();

      // when
      const lotto = generator.createLotto();

      // then
      expect(lotto instanceof Lotto).toBe(true);
    });

    test("생성된 로또의 번호는 1~45 사이의 수여야 한다.", () => {
      // given
      const numbers = new Array(45).fill().map((_, index) => index + 1);
      const generator = new LottoGenerator();

      // when
      const lotto = generator.createLotto();

      // then
      const lottoNumbers = lotto.numbers;
      lottoNumbers.forEach((lottoNumber) => {
        expect(numbers).toContain(lottoNumber);
      });
    });

    test("로또 번호는 6자리여야 한다.", () => {
      // given
      const generator = new LottoGenerator();

      // when
      const lotto = generator.createLotto();

      // then
      expect(lotto.numbers).toHaveLength(6);
    });

    test("로또 번호는 중복되지 않은 서로 다른 수들이어야 한다.", () => {
      // given
      const generator = new LottoGenerator();

      // when
      const lotto = generator.createLotto();

      // then
      expect(new Set(lotto.numbers).size).toBe(6);
    });

    test("로또 번호는 오름차순이어야 한다.", () => {
      // given
      const generator = new LottoGenerator();

      // when
      const lotto = generator.createLotto();

      // then
      expect(isSorted(lotto.numbers)).toBe(true);
    });
  });

  describe("createMultipleLotto 메서드", () => {
    test("여러개의 로또를 생성할 수 있어야 한다.", () => {
      // given
      const generator = new LottoGenerator();

      // when
      const lottoArray = generator.createMultipleLotto(6);

      // then
      lottoArray.forEach((lotto) => {
        expect(lotto instanceof Lotto).toBe(true);
      });
    });
  });
});

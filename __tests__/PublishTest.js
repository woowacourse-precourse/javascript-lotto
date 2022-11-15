const Publish = require("../src/controller/Publish");

describe("로또발행 클래스 테스트", () => {
  test("로또 장수 계산", () => {
      const publish = new Publish({paid: 5000});
      const result =  publish.calculateNumberOfLotto();

      expect(result).toEqual(5);
    });

  test("로또 장수만큼 발행", () => {
    const publish = new Publish({paid: 5000, number_of_lottos: 5});
    publish.controllPublish();
    const result =  publish.model.getPublished().length;

    expect(result).toEqual(5);
  });
});

class Manager {
  constructor() {
    this.boughtLottos = [];
  }

  buyLottoValidate(answer) {
    const money = Number(answer);
    if (money < 1000) {
      throw new Error(`${ERROR} 로또는 1000원부터 구매가 가능합니다.`);
    }
    if (!money) {
      throw new Error(`${ERROR}  숫자만 입력이 가능합니다.`);
    }
    if (money % 1000 != 0) {
      throw new Error(`${ERROR} 로또는 1000원 단위로만 구매가 가능합니다.`);
    }
  }

  getResultNumberValidate(answer) {
    if (answer.split('').filter((text) => text == ',').length != 5) {
      throw new Error(
        `${ERROR} 쉼표(",")로 구분하여 6개의 수를 입력하여야 합니다.`
      );
    }
  }
  getBonusNumberValidate(answer) {
    if (!(1 <= answer && answer <= 45)) {
      throw new Error(`${ERROR} 로또 번호는 1에서 45 사이의 숫자입니다.`);
    }
    if (!Number(answer)) {
      throw new ERROR(`${ERROR} 보너스 번호는 1개만 입력하여야 합니다.`);
    }
  }
}

module.exports = Manager;

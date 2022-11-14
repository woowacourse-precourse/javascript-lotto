class CalculatorModel {
  draw(lottos, winning) {
    const winningList = [];
    const [winningLotto, bonus] = winning;

    lottos.forEach((lotto) => {
      let comparedLotto = lotto.compare(winningLotto);
      let comparedBonus = lotto.isContain(bonus);

      winningList.push({ comparedLotto, comparedBonus });
    });

    return winningList;
  }
}

module.exports = CalculatorModel;

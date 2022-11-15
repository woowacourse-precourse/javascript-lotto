const { CONDITION } = require('../constant/constant');

class WinStatistics {
  static getWinStatistics(results) {
    const winPlace = {
      firstPlace: 0,
      secondPlace: 0,
      thirdPlace: 0,
      fourthPlace: 0,
      fifthPlace: 0,
    };
    results.forEach((winAndBonus) => {
      WinStatistics.#winCondition({ winAndBonus, winPlace });
    });
    return winPlace;
  }

  static #winCondition({ winAndBonus, winPlace }) {
    if (winAndBonus.win === CONDITION.FIRST_PLACE) {
      winPlace.firstPlace += 1;
    }
    if (winAndBonus.win === CONDITION.THIRD_PLACE && winAndBonus.bonus) {
      winPlace.secondPlace += 1;
    }
    if (winAndBonus.win === CONDITION.THIRD_PLACE && !winAndBonus.bonus) {
      winPlace.thirdPlace += 1;
    }
    if (winAndBonus.win === CONDITION.FOURTH_PLACE) {
      winPlace.fourthPlace += 1;
    }
    if (winAndBonus.win === CONDITION.FIFTH_PLACE) {
      winPlace.fifthPlace += 1;
    }
  }
}

module.exports = WinStatistics;

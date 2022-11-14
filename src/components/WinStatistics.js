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
    if (winAndBonus.win === 6) winPlace.firstPlace += 1;
    if (winAndBonus.win === 5 && winAndBonus.bonus) winPlace.secondPlace += 1;
    if (winAndBonus.win === 5 && !winAndBonus.bonus) winPlace.thirdPlace += 1;
    if (winAndBonus.win === 4) winPlace.fourthPlace += 1;
    if (winAndBonus.win === 3) winPlace.fifthPlace += 1;
  }
}

module.exports = WinStatistics;

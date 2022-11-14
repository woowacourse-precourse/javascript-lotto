class WinStatistics {
  static statizeWin(results) {
    const winPlace = {
      firstPlace: 0,
      secondPlace: 0,
      thirdPlace: 0,
      fourthPlace: 0,
      fifthPlace: 0,
    };
    results.forEach((results) => {
      WinStatistics.#winCondition({ results, winPlace });
    });
    return winPlace;
  }

  static #winCondition({ results, winPlace }) {
    if (results.win === 6) winPlace.firstPlace += 1;
    if (results.win === 5 && results.bonus) winPlace.secondPlace += 1;
    if (results.win === 5 && !results.bonus) winPlace.thirdPlace += 1;
    if (results.win === 4) winPlace.fourthPlace += 1;
    if (results.win === 3) winPlace.fifthPlace += 1;
  }
}

module.exports = WinStatistics;

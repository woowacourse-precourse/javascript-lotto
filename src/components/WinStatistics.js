class WinStatistics {
  constructor() {
    this.winPlace = {
      firstPlace: 0,
      secondPlace: 0,
      thirdPlace: 0,
      fourthPlace: 0,
      fifthPlace: 0,
    };
  }

  statizeWin(results) {
    results.forEach((results) => {
      this.winCondition(results);
    });
    return this.winPlace;
  }

  winCondition(results) {
    if (results[0] === 6) this.winPlace.firstPlace += 1;
    if (results[0] === 5 && results[1]) this.winPlace.secondPlace += 1;
    if (results[0] === 5 && !results[1]) this.winPlace.thirdPlace += 1;
    if (results[0] === 4) this.winPlace.fourthPlace += 1;
    if (results[0] === 3) this.winPlace.fifthPlace += 1;
  }
}

module.exports = WinStatistics;

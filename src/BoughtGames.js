const MissionUtils = require('@woowacourse/mission-utils')
const { Console, Random } = MissionUtils

class BoughtGames {
	#purchasePrice
	#games = []
  #gameCount

	constructor (purchasePrice) {
		this.#purchasePrice = purchasePrice
    this.getGameCount()
		this.#generateGames()
	}

  getGameCount() {
    this.#gameCount = parseInt(this.#purchasePrice / 1000)
  }

  getGameAt() {
    return this.#games
  }

  getCount() {
    return this.#gameCount
  }

	#generateGames() {
    for(let i = 0; i < this.#gameCount; i++) {
      this.#games.push(
        Random.pickUniqueNumbersInRange(1, 45, 6)
        .sort((a, b)=> a - b)
      ) // ex. [ 39, 6, 14, 2, 36, 15 ]
    }
	}
}

module.exports = BoughtGames

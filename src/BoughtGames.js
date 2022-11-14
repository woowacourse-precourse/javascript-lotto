const MissionUtils = require('@woowacourse/mission-utils')
const { Console, Random } = MissionUtils

class BoughtGames {
	#purchasePrice
	#games

	constructor (purchasePrice) {
		this.#purchasePrice = purchasePrice
		this.generateGaems()
	}

	generateGaems() {
    this.#games = []
    for(let i = 0; i < this.#purchasePrice / 1000; i++) {
      this.#games.push(
        Random.pickUniqueNumbersInRange(1, 45, 6)
        .sort((a, b)=> a - b)
      ) // ex. [ 39, 6, 14, 2, 36, 15 ]
    }
    return this.#games
	}
}

module.exports = BoughtGames

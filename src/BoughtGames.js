const MissionUtils = require('@woowacourse/mission-utils')
const { Random } = MissionUtils

class BoughtGames {
	#purchasePrice
	#games = []
  #gameCount

	constructor (purchasePrice) {
		this.#purchasePrice = purchasePrice
    this.#setGameCount()
		this.#generateGames()
	}

  #setGameCount() {
    this.#gameCount = parseInt(this.#purchasePrice / 1000)
  }
  
  #generateGames() {
    for(let i = 0; i < this.#gameCount; i++) {
      this.#games.push(
        Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b)=> a - b)
      )
    }
  }
  
  getPurchasePrice() {
    return this.#purchasePrice
  }

  getGameCount() {
    return this.#gameCount
  }

  getGameAt(i) {
    return this.#games[i]
  }
}

module.exports = BoughtGames

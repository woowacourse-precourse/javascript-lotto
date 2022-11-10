class Tickets {
  static get(lottos, ticket) {
    return [...lottos, ticket];
  }

  static removeDuplicatedLotto(lottos) {
    const set = new Set(lottos);

    return [...set];
  }
}

module.exports = Tickets;

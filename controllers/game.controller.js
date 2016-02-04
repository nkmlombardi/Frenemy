var gameController = function(game, players) {
    var game = this;
    var players = players;                          // array
    var timeout = this.GameType.timeout;            // int
    var rounds = new array[this.GameType.rounds];   // array
    var phases = new array[this.GameType.phases];   // array

    while (players.count >= GameType.endGamePlayerCount) {
        if (timeout <= (timeout * 0.80)) {
            game.openVoting();
            game.decrementPhase();
        }

        if (timeout == 0) {
            var losers = votes.highestPlayers();    // returns array
            game.kickLosers(losers);
            game.decrementPhase();
        }

        game.resetPhases();
        game.decrementRound();
    }
};

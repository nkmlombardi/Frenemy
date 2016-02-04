var matchmakingController = function() {
    var searchingPlayers = [];

    // Watcher to call addPlayer function

    var addPlayer = function(player, gameType) {
        seachingPlayers[gameType.slug].push(player);

        if (gameType.players >= searchingPlayers[gameType.slug].length) {
            var gamePlayers = searchingPlayers.slice(0, gameType.players);

            // Pass players array and gametype to game constructor
        }
    }
};

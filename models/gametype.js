/*
    We want certain game type mechanics to be abstracted from the game
    controller. This means the variables such as round time and phases are
    contained here. Not only that but we also want functions that determine
    vote ties and end-game ties to also be defined here, to be called in the
    game controller.
 */
var ClassicGametype = function() {

    // Attributes
    var rounds = {
        timeout:    300                 // 5 Minutes
    }

    var phases = ['Cold', 'Hot', 'Closing'];

    /**
     * This function determines what to do in the case of a tiebreaker
     * @param  {array}      players     all the players in a game
     * @param  {object}     votes       the vote object that was created
     * @return {array}                  array of players that remain in the game
     */
    var tieBreaker = function(players, votes) {
        var losers = votes.highestVotes();

        // Iterate through losers and set state of players that lost to "Dead"

        return players;
    };

    /**
     * This function determines who wins the entire game.
     * @param  {array}      players     all the players in a game
     * @param  {object}     votes       the vote object that was created
     * @param  {int}        jackpot     funds the users wagered at game start
     * @return {object}                 game result object with who won and
     *                                       jackpot distribution information
     */
    var endGameTieBreaker = function(players, votes, jackpot) {
        var winners = tieBreaker(players, votes);

        // Check if there were winners
        if (winners.length == 0 || typeof winners === 'undefined') {
            console.log('GameType.endGameTieBreaker was called when it was not suppose to be.');
            return {
                status: 404,
                message: 'Function was called with invalid parameters. There was no tie in the vote results.'
            };
        }

        var jackpotCut = Math.floor(jackpot / winners.length);

        // Iterate through winners and distribute jackpot
        // Or return jackpot cut amount from function and distribute jackpot
        // amount to each player in containing game controller
    };
};
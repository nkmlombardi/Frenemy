var Game = function() {

    // Attributes
    var id;
    var gametype;
    var players;
    var round;
    var phase;
    var created;
    var modified;

    var openVoting = function() {
        // Create voting object
        // Listen for new votes
    };

    var decrementPhase = function() {
        if (phase > 0) {
            phase--;
        } else {
            console.log('Cannot go below phase zero');
        }
    };

    var decrementRound = function() {
        if (round > 0) {
            round--;
        } else {
            console.log('Cannot go below round zero');
        }
    };

    var kickLosers = function(losers) {
        if (typeof losers !== 'array') {
            console.log('function kickLosers espects an array.');
        }

        // Change player statuses of losing players to out
    };
};
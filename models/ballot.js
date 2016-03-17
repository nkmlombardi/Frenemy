// Libraries
var utility = require('../helpers/utility');
var Database = require('../database');
var _ = require('underscore');

exports.create = function(options) {
    return new Ballot(options);
};

function Ballot(options) {
    this.id = utility.guid();
    this.votes = [];
    this.players = [];
    this.results = [];
    this.open = true;
};


Ballot.prototype.randomizeVotes = function(argPlayers) {
    console.log(argPlayers);

    for (var i = 0; i < argPlayers.length; i++) {
        this.addVote({
            balloter: argPlayers[i],
            candidate: argPlayers[Math.floor(Math.random() * argPlayers.length)]
        });
    }
};


Ballot.prototype.close = function() {
    var flatten = function (ary) {
        var ret = [];
        for (var i = 0; i < ary.length; i++) {
            if (Array.isArray(ary[i])) {
                ret = ret.concat(flatten(ary[i]));
            } else {
                ret.push(ary[i]);
            }
        }
        return ret;
    };


    this.open = false;

    console.log('This votes: ', this.votes);

    /* 
        Flatten the array of votes into one array with all the votes, with no
        consideration of who submitted each vote. This makes it easier to 
        iterate over and count up the votes for each candidate.
    */
    var flatBallot = [[0, 1], [2, 3], [4, 5]].reduce(function(a, b) {
      return a.concat(b);
    }, []);

    console.log('flatBallot: ', this.votes);
    console.log('flatBallot: ', flatBallot);

    // Group candidate ID's and count occurences of the ID in the flatBallot
    var voteCounts = _.countBy(flatBallot, function(candidateID) {
        return candidateID;
    });

    console.log('Ballot count votes: ', voteCounts);

    // Determine the candidates tied for the most votes
    var maxValue = _.max(voteCounts, function(value) {
        return value;
    });

    console.log('Ballot max value: ', maxValue);

    // Filter candidates with most votes out of array into new one
    _.each(voteCounts, function(val, key) {
        if (val == maxValue) {
            this.results.push(key);
        }
    }, this);

    return this.results;
};


/**
 * Adds a Vote to the Ballot, limited by Player tokens
 * @param {string}     balloter
 * @param {string}     candidate
 */
Ballot.prototype.addVote = function(balloterID, candidateID) {
    var balloter = Database.players.get(balloterID);

    // Stack Overflow: http://stackoverflow.com/questions/2647867/how-to-determine-if-variable-is-undefined-or-null
    if (this.votes[balloterID] == null) {
        this.votes[balloterID] = [candidateID];
    } else {
        this.votes[balloterID].push(candidateID);
    }

    console.log('Vote created!', balloterID, candidateID);
    return balloter.removeToken(1);
};


/**
 * Removes a Player object to the PlayerList
 * @param {object}     player
 * @param {string}     player.id
 * @param {string}     player.name
 */
Ballot.prototype.removeVote = function(balloterID, candidateID) {
    var balloter = Database.players.get(balloterID);

    var found = this.votes[balloterID].indexOf(candidateID);
    if (found !== -1) {
        this.votes[balloterID].splice(found, 1);
    }

    console.log('Voted removed!', balloterID, candidateID);
    return balloter.addToken(1);
};

### Classic Mode
Aimed to make classic mode as simple as possible. Took the names of the phases from the sales world where a
salesman will make a "Cold Call" to a company trying to do business with them without any prior introduction.
I felt it was a rather suiting name for the phase. Other phases are similarly named.

    roundTimeout    = 5 minutes
    roundPhases     = 3
    roundCount      = number of players, game ends early if players tie for getting eliminated
    phases = {
        Cold Phase      = 70% of round timeout      Voting locked, "Deal making phase"
        Hot Phase       = 20% of round timeout      Voting unlocked, chat remains unlocked
        Closing Phase   = 10% of round timeut       Voting locks, votes tallied, losing player removed
    }
    tieBreakers     = all tieing players get eliminated
    endGameTie      = all tieing players split jackpot
    voteVisiblity   = player can see own vote only

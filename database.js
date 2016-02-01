var Games = {
    id:             0000000,
    gametype:       000,                // game hasOne gametype
    players:        [],                 // game hasMany Players
    round:          0000,
    phase:          00,
    created:        Unix Timestamp,
    modified:       Unix Timestamp
};

var Account = {
    id:             0000000,
    name:           'Player Name',
    created:        Unix Timestamp,
    modified:       Unix Timestamp
};

var Players = {
    id:             00000000,
    account:        00000000,           // player belongsToOne Account
    name:           'Player Name'
};

var Messages = {
    id:             00000000,
    game:           00000000,           // message hasOne game
    round:          0000,
    phase:          00,
    sender:         00000000,
    recepient:      00000000,
    channel:        ['Public', 'Private'],
    content:        "Content of message",
    created:        Unix Timestamp,
    modified:       Unix Timestamp
};

var Gametypes = {
    id:             000,
    name:           'Game Name'
    ruleset: {
        key:            value,
        key:            value,
        key:            value,
        key:            value
    },
    created:        Unix Timestamp,
    modified:       Unix Timestamp
};

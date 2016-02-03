/*
 *  create          POST        /game/
 *  read            GET         /game/:id
 *  update          POST        /game/:id
 *  delete          DELETE      /game/:id
 */
var Games = {
    id:             0000000,
    gametype:       000,                // game hasOne gametype
    players:        [],                 // game hasMany Players
    round:          0000,
    phase:          00,
    created:        Unix Timestamp,
    modified:       Unix Timestamp
};

/*
 *  create          POST        /account/
 *  read            GET         /account/:id
 *  update          POST        /account/:id
 *  delete          DELETE      /account/:id
 */
var Account = {
    id:             0000000,
    email:          'account@email.com',
    created:        Unix Timestamp,
    modified:       Unix Timestamp
};

/*
 *  create          POST        /players/
 *  read            GET         /players/:id
 *  update          POST        /players/:id
 *  delete          DELETE      /players/:id
 */
var Players = {
    id:             00000000,
    account:        00000000,           // player belongsToOne Account
    name:           'Player Name',
    state:          ['Playing', 'Out']
};

/*
 *  It's likely that this endpoint will need to actually be websocket listeners
 *  for events transmitted from the front end. This is still how the messages
 *  model should be stored in the database.
 *
 *  create          POST        /messages/
 *  read            GET         /messages/:id
 *  update          POST        /messages/:id
 *  delete          DELETE      /messages/:id
 */
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

/*
 *  We don't plan on building an administration panel for the app at this time
 *  so there is no point in having CRUD operations for the gametype model. It
 *  makes more sense to simply edit gametypes from the database.
 *
 *  read            GET         /gametypes/:id
 */
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

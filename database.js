/*
 *  We don't plan on building an administration panel for the app at this time
 *  so there is no point in having CRUD operations for the gametype model. It
 *  makes more sense to simply edit gametypes from the database.
 *
 *  read            GET         /gametypes/:id
 *
 *  A GameType belongsToOne:
 *      Game
 */
var Gametypes = {
    id:             0000,
    name:           'Game Name'
    ruleset: {
        key:            value,
        key:            value,
        key:            value,
        key:            value
    },
    created:        ISODate("0000-00-00T00:00:00+00:00"),
    modified:       ISODate("0000-00-00T00:00:00+00:00")
};

/*
 *  create          POST        /game/
 *  read            GET         /game/:id
 *  update          POST        /game/:id
 *  delete          DELETE      /game/:id
 *
 *  A Game hasMany:
 *      Players
 *      Messages
 *      Votes
 */
var Games = {
    id:             0000000,
    gametype:       0000,                                        // game.gametype    hasOne          GameType.id
    players:        [],                                         // game.players     hasMany         Player.id
    round:          0000,
    phase:          00,
    created:        ISODate("0000-00-00T00:00:00+00:00"),
    modified:       ISODate("0000-00-00T00:00:00+00:00")
};

/*
 *  create          POST        /account/
 *  read            GET         /account/:id
 *  update          POST        /account/:id
 *  delete          DELETE      /account/:id
 *
 *  An Account hasMany:
 *      Players
 */
var Account = {
    id:             0000000,
    email:          'account@email.com',
    created:        ISODate("0000-00-00T00:00:00+00:00"),
    modified:       ISODate("0000-00-00T00:00:00+00:00")
};

/*
 *  This is the pivot table that connects an account to a game. The state of
 *  the player determines if the player is still in the game or not.
 * 
 *  create          POST        /players/
 *  read            GET         /players/:id
 *  update          POST        /players/:id
 *  delete          DELETE      /players/:id
 */
var Players = {
    id:             00000000,
    account:        00000000,                                   // player.account   belongsToOne    Account.id
    name:           'Player Name',
    state:          ['Alive', 'Dead']
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
    game:           00000000,                                   // message.game     belongsToOne    Game.id
    round:          0000,                                       // message.round    belongsToOne    Game.round
    phase:          00,                                         // message.phase    belongsToOne    Game.phase
    sender:         00000000,                                   // message.sender   belongsToOne    Player.id
    reciever:       00000000,                                   // message.reciever belongsToOne    Player.id
    channel:        ['Public', 'Private'],
    content:        "Content of message",
    created:        ISODate("0000-00-00T00:00:00+00:00"),
    modified:       ISODate("0000-00-00T00:00:00+00:00")
};

/*
 *  It's likely that this endpoint will need to actually be websocket listeners
 *  for events transmitted from the front end. This is still how the votes
 *  model should be stored in the database.
 *  
 *  create          POST        /votes/
 *  read            GET         /votes/:id
 *  update          POST        /votes/:id
 *  delete          DELETE      /votes/:id
 */
var Votes = {
    id:             00000000,
    game:           00000000,                                   // vote.game        belongsToOne    Game.id
    round:          00000000,                                   // vote.round       belongsToOne    Game.round
    sender:         00000000,                                   // vote.sender      belongsToOne    Player.id
    reciever:       00000000,                                   // vote.reciever    belongsToOne    Player.id
    created:        ISODate("0000-00-00T00:00:00+00:00"),
    modified:       ISODate("0000-00-00T00:00:00+00:00")
};

var Matchmaking = {
    id:             00000000,
    account:        00000000,
    gametype:       0000,
    created:        ISODate("0000-00-00T00:00:00+00:00"),
    modified:       ISODate("0000-00-00T00:00:00+00:00")
};

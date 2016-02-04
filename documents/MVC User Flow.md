# Model, View, Controller Flow
This document outlines a more in-depth path a user can take from signing in to
finding a game. Which endpoints would be hit on the backend are also mentioned.


### Login Landing Page
View:           loginView
Controller:     loginController
Models:         Account, Authenticate
This is the landing page for guests opening the application. On this page the
guest is given the option to register or login (by email or social media).

Actions
- Register:                     POST -> /accounts           w/ form data
- Login:                        POST -> /authenticate       w/ form data
    Redirect to Dashboard



### Dashboard
View:           dashboard
Controller:     dashboardController
This is the page shown after a user logins. It will contain some interesting
statistics about the user or something. Maybe some information about their last
game. There will also be a list of options.

Actions
- Find a game:
    Change View         -> gameSearchView
    Change Controller   -> gameSearchController
- Account settings:
    Change View         -> accountSettingsView
    Change Controller   -> accountSettingsController



### Settings
View:           accountSettingsView
Controller:     accountSettingsController
Models:         Account
This page allows the user to change their account settings such as their email.
Still need to determine what information an account will have, as well as how
that will work alongside registration via social media.



### Game Search
View:           gameSearchView
Controller:     gameSearchController
Models:         Game
This page shows a list of game types to choose from. Clicking a game type
brings the user to a page with a description about the gametype and rules that
apply to the game, as well as a button to search for a game.

Actions
- Search for Game
    Change View         -> matchmakingView
    Change Controller   -> matchmakingController



### Matchmaking
View:           matchmakingView
Controller:     matchmakingController
Models:         Game, GameType, Player
This is a very simple page that shows the status of the matchmaking search.
Upon finding other players to form a game with, the user is prompted to accept
the match and be placed into a game.

Listeners
- Full Game
    Each GameType has a certain amount of players in each game. Once that many
    players are queued in the matchmaking service, a game is formed with those
    players.

- Accept Game Modal
    Modal shows up asking the player if they'd like to confirm the match.

    Change View -> acceptModal

Actions
- All players accept:           POST        -> /game            w/ GameType & Players



### Game
View:           gameView
Controller:     gameController
Models:         Game, Player, GameType, Messages, Votes
The actual game lobby itself. All players are displayed on the right side
slideout menu, while all game information and public chat are displayed in the
center panel.

Actions
- Send Public Message:          POST        -> /messages        w/ form data
- Send Private Message:         POST        -> /messages        w/ form data
- Vote for Player               POST        -> /votes           w/ form data
class Game {
  constructor() {}
//C37 step 1
  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function(data) {
      gameState = data.val();
    });
  }
//C37 step 5
  

  start() {
    player = new Player();
    playerCount = player.getCount();

    form = new Form();
    form.display();
//C37 step 6
    

  }

  handleElements() {
    form.hide();
    form.titleImg.position(40, 50);
    form.titleImg.class("gameTitleAfterEffect");
  }
//C37 step 7
  play() {
    this.handleElements();

    Player.getPlayersInfo();

    if (allPlayers !== undefined) {
      image(track, 0, -height * 5, width, height * 6);

      drawSprites();
    }
  }
}

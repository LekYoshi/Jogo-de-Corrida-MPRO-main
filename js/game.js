class Game {
  constructor() {

  }

  start() {
    if (gameState == 0) {
      form = new Form();
      form.display();
      player = new Player();
      player.getCount();
      this.createSprites()
    }

  }

  createSprites() {
    car1 = createSprite(100, 200)
    car2 = createSprite(250, 200)
    car3 = createSprite(400, 200)
    car4 = createSprite(550, 200)

    car1.addImage(carImg1)
    car2.addImage(carImg2)
    car3.addImage(carImg3)
    car4.addImage(carImg4)

    car1.scale = 0.1
    car2.scale = 0.1
    car3.scale = 0.1
    car4.scale = 0.1

    cars = [car1, car2, car3, car4]

  }

  getState() {
    database
      .ref("gameState")
      .on("value", data => gameState = data.val())
  }

  updateState(state) {
    database
      .ref("/")
      .update({
        gameState: state
      })
  }

  play() {
    form.hide()
    Player.getPlayerInfo()
    if (allPlayers != undefined) {
      background("#263238")
      image(track, 0, -height * 4, width, height * 5)

      var index = 0
      var x, y
      for (const p in allPlayers) {
        index++
        x = allPlayers[p].positionX
        y = allPlayers[p].positionY
        cars[index - 1].x = x
        cars[index - 1].y = y
      }
      drawSprites()

    }
  }

}

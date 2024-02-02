class Game {
  constructor() {
  this.resetButton = createButton("reset")
  }

  start() {
    this.resetButton.position(50,50)
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
    this.resetGame()
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
        this.playerControls()
        if (index == player.index) {
          camera.position.x = width / 2
          camera.position.y = cars[index - 1].y
          fill("red")
          stroke("red")
          ellipse(x, y, 60, 100)
        }
      }
      if (player.distance>2450){
        gameState =2
        player.rank +=1
        player.update()
      }

      drawSprites()

    }
  }
  playerControls() {
    if (keyIsDown(UP_ARROW)) {
      player.positionY -= 10
      player.distance += 10
      player.update()

    }
    if (keyIsDown(LEFT_ARROW)) {
      player.positionX -= 5
      player.update()
    }
    if (keyIsDown(RIGHT_ARROW)) {
      player.positionX += 5
      player.update()
    }
  }
 resetGame(){
  this.resetButton.mousePressed(()=>{
    database.ref("/")
    .set({
    gameState:0,
    playerCount:0,
    players:{}
    
    })
   window.location.reload()
    
  })

 }

 
}

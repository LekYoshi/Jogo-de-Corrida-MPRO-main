class Form {
  constructor() {
    this.input = createInput("nome");
    this.buttonImg = createImg("./assets/images/start.png");
    this.greetings = createElement("h2");
    this.greetings2 = createElement("h2")
    this.restartButton = createButton("restart")
  }

  //estilizando os elementos
  elementsStyle() {
    this.input.position(380, 180);
    this.input.size(180, 30);
    this.input.class('customInput')

    this.buttonImg.position(525, 250)
    this.buttonImg.size(150, 50)

    this.greetings.position(380, 180)

    this.restartButton.hide()
    this.restartButton.class("customButton")
  }

  //esconder os elementos
  hide() {
    this.input.hide()
    this.buttonImg.hide()
    this.greetings.hide()
  }

  display() {
    this.elementsStyle()
    this.handleButtonClick()
  }

  handleButtonClick() {
    this.buttonImg.mousePressed(() => {
      this.input.hide()
      this.buttonImg.hide()
      player.name = this.input.value()
      playerCount++
      player.index = playerCount
      player.updateCount(playerCount)
      player.addPlayer()
      this.greetings.html("Boas vindas " + player.name)
      this.greetings.position(300, 180)
    })
  }
  end() {
    this.greetings2.html("Parabéns " + player.name + " seu rank é " + player.rank)
    this.greetings2.position(370, 275)
  
  }
  restart(){
    this.restartButton.position(480, 350)
    this.restartButton.show()
    this.restartButton.mousePressed(() => {
      player.updateCarsAtEnd(0)
      player.updateCount(0)
      game.updateState(0)
      database
        .ref("players")
        .remove()
      this.greetings2.hide()
      window.location.reload()
    })
  }
}

class Form {
  constructor() {
    this.input = createInput("nome");
    this.buttonImg = createImg("./assets/images/start.png");
    this.greetings = createElement("h2");
  }

  //estilizando os elementos
  elementsStyle(){
    this.input.position(380,180);
    this.input.size(180,30);
    this.input.class('customInput')

    this.buttonImg.position(525,250)
    this.buttonImg.size(150,50)

    this.greetings.position(380,180)
  }

  //esconder os elementos
  hide(){
    this.input.hide()
    this.buttonImg.hide()
    this.greetings.hide()
  }
    
  display() {
    this.elementsStyle()
    this.handleButtonClick()
  }
  
  handleButtonClick(){
    this.buttonImg.mousePressed(() =>{
      this.input.hide()
      this.buttonImg.hide()
      player.name = this.input.value()
      playerCount ++ 
      player.index = playerCount 
      player.updateCount(playerCount)
      player.addPlayer()
      this.greetings.html("Boas vindas " + player.name)
      this.greetings.position(300,180)
    })
  }
}

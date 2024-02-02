class Player {
  constructor() {
    this.name = null
    this.index = null
    this.positionX = 0
    this.positionY = 400
    this.rank = 0
    this.distance = 0
    this.rotation = 0

  }
  getCount() {
    database
      .ref("playerCount")
      .on("value", data => playerCount = data.val())

  }

  updateCount(count) {
    database
      .ref("/")
      .update({
        playerCount: count
      })

  }

  addPlayer() {
    var playerIndex = "players/player" + this.index
    if (this.index == 1) {
      this.positionX = 100
    }
    else if (this.index == 2) {
      this.positionX = 250
    }
    else if (this.index == 3) {
      this.positionX = 400
    }
    else if (this.index == 4) {
      this.positionX = 550
    }
    database
      .ref(playerIndex)
      .set({
        name: this.name,
        positionX: this.positionX,
        positionY: this.positionY,
        rank: this.rank,
        distance: this.distance
      })
  }
  static getPlayerInfo() {
    database
      .ref("players")
      .on("value", data => allPlayers = data.val())

  }
  update(){
    var playerIndex = "players/player" + this.index
    database
    .ref(playerIndex)
    .update({
      positionX: this.positionX,
      positionY: this.positionY,
      rank: this.rank,
      distance: this.distance
    })
  }
}

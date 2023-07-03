const screen = document.getElementById("game-console")
screen.textContent =
  "Let's play a game of Rock, Paper, Scissors! Best of 5 wins."
const history = document.getElementById("history")
const previousPlays = []
const rock = {
  element: document.getElementById("rock"),
  beats: null,
}
const paper = {
  element: document.getElementById("paper"),
  beats: null,
}
const scissors = {
  element: document.getElementById("scissors"),
  beats: null,
}

rock.beats = scissors.element.textContent
paper.beats = rock.element.textContent
scissors.beats = paper.element.textContent

const options = [rock, paper, scissors]

let playerScore = 0
let cpuScore = 0

const game = () => {
  // Create a reset button for use later in game file
  let resetButton = document.createElement("button")
  resetButton.textContent = "Restart"
  resetButton.addEventListener("click", () => {
    screen.textContent = "Restarting..."
    setTimeout(() => {
      screen.textContent =
        "Let's play a game of Rock, Paper, Scissors! Best of 5 wins."
      history.innerHTML = ""
      plays = 0
    }, 1000)
    playerScore = 0
    cpuScore = 0
  })

  // Create CPU move
  const makeCpuMove = () => {
    let i = Math.floor(Math.random() * 3)
    let cpuMove = options[i]
    return cpuMove
  }
  // Set player move
  const makeMove = (choice) => {
    let cpuMove = makeCpuMove()
    playerMove = choice
    findWinner(playerMove, cpuMove)
  }
  // Create game logic to find winner
  const findWinner = (firstMove, secondMove) => {
    let resultMessage = document.createElement("p")
    let a = firstMove.element.textContent
    let b = secondMove.element.textContent
    if (a == b) {
      resultMessage.textContent = "It's a tie!"
      history.appendChild(resultMessage)
    } else if (firstMove.beats == b) {
      resultMessage.textContent =
        "Player wins! They played " + a + " against " + b + "."
      history.appendChild(resultMessage)
      playerWins()
    } else if (secondMove.beats == a) {
      resultMessage.textContent =
        "Computer wins! They played " + b + " against " + a + "."
      history.appendChild(resultMessage)
      cpuWins()
    }
    screen.textContent = resultMessage.textContent
    previousPlays.push(resultMessage)
  }

  // Write functions to update score
  const playerWins = () => {
    playerScore++
    if (playerScore == 3) {
      screen.textContent =
        "Congratulations! You win. You had a total of " +
        playerScore +
        " points, while the computer had " +
        cpuScore +
        "."
    }
  }
  const cpuWins = () => {
    cpuScore++
    if (cpuScore == 3) {
      screen.textContent =
        "Uh oh! The computer won. It had " +
        cpuScore +
        " points, while you only had " +
        playerScore +
        "."
    }
  }

  // Add a click listener for each button
  options.forEach((option) => {
    option.element.addEventListener("click", () => {
      if (playerScore == 3 || cpuScore == 3) {
        return
      }
      makeMove(option)
      if (playerScore == 3 || cpuScore == 3) {
        screen.appendChild(resetButton)
        let gameOverMessage = document.createElement('p')
        gameOverMessage = "Maximum points reached. Game over!"
        screen.appendChild(gameOverMessage)
        return
      }
    })
  })
}

game()

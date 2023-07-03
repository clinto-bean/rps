const screen = document.getElementById("game-console")
const history = document.getElementById("history")
const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissors = document.getElementById("scissors")
const options = document.querySelectorAll(".option")

const logResults = () => {
  let result = document.createElement("p")
  result.textContent = winner + " has defeated " + loser + "!"
}

const makeChoice = (choice) => {
  playerMove = choice.textContent
  let result = document.createElement("p")
  result.textContent = playerMove
  history.appendChild(result)
}

const playGame = () => {
  rock.addEventListener("click", makeChoice(rock))
  paper.addEventListener("click", makeChoice(paper))
  scissors.addEventListener("click", makeChoice(scissors))
}

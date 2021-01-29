//RockPaperScissors

const getUserChoice = userInput => {
    userInput = userInput.toLowerCase()
  
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
      return userInput
    } else {
      console.log('Error!')
    }
  }
  
    function getComputerChoice() {
      switch (Math.floor(Math.random() * 3)) {
        case 0:
          return 'rock'
        case 1:
          return 'paper'
        case 2:
          return 'scissors'
      }
    }
  
    function determineWinner(userChoice, computerChoice) {
      
      if (userChoice === computerChoice) {
          return 'The game is a tie'
      } 
  
      if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
          return 'Computer Won!'
        } else {
          return 'User Won!'
        } 
      }
  
      if (userChoice === 'paper') {
        if (userChoice === 'scissors') {
          return 'Computer Won!'
        } else {
          return 'User Won!'
        }
      }
  
      if (userChoice === 'scissors') {
        if (userChoice === 'rock') {
          return 'Computer Won!'
          } else {
          return 'User Won!'
          }
      }
  
    }
  
    const playGame = () => {
      let userChoice = getUserChoice('rock')
      let computerChoice = getComputerChoice 
      console.log(`You choose ${userChoice}`)
      console.log(`The computer choose ${computerChoice}`)
      console.log(determineWinner(userChoice, computerChoice))
    }
  
    playGame()
  
  
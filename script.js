const board = document.querySelector('.board');
const cells = board.querySelectorAll('.cell');

const gameBoard = (() => {
    const boardArray = ['', '', '', '', '', '', '', '', ''];

    const contentBoard = (() => {
        cells.forEach((cell, index) => {
            cell.textContent = `${boardArray[index]}`
        })

    })();
    return {boardArray}

})();

const displayController = (() => {
    let mark = 'X';
    let round = 1;
    let win = false;

    const renderArray = (() => {
        cells.forEach((cell) => {
            cell.addEventListener('click', () => {
                gameBoard.boardArray.forEach((aux, index) => {
                    if (index == cell.dataset.id) {
                        if (win == true || cell.textContent != "") {
                            return
                        } else if (mark == 'X') {
                            gameBoard.boardArray[index] = mark;
                            cell.textContent = mark;
                            setResult();
                            mark = 'O'
                            round++;
                        } else if (mark == 'O') {
                            gameBoard.boardArray[index] = mark;
                            cell.textContent = mark;
                            setResult();
                            mark = 'X'
                            round++;
                        }
                    }
                })
            })
        })
    })();

    const setResult = () => {
        if (game.checkWinner(mark) == true) {
          win = true;
          console.log("win!");
          const message = document.createElement('div');
          message.setAttribute('class', 'message');
          document.body.appendChild(message);
          message.textContent = `"${mark}" Wins!`
          const button = document.createElement('button');
          document.body.appendChild(button);
          button.addEventListener('click', eraseAll)
        } else if (round == 9){
          const message = document.createElement('div');
          message.setAttribute('class', 'message');
          document.body.appendChild(message);
          message.textContent = `It's a Draw!`;
          const button = document.createElement('button');
          document.body.appendChild(button);
          button.addEventListener('click', eraseAll);
        }
      }

      function eraseAll() {
            const button = document.querySelector('button');
            const message = document.querySelector('.message');
            button.remove();
            message.remove();
            gameBoard.boardArray = ['', '', '', '', '', '', '', '', ''];
            cells.forEach(cell => cell.textContent = "");
            win = false;
            round = 1;
      }
    return {mark}
})();

const game = (() =>{

    const winSetup = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ];

    const checkWinner = (mark) => {
        return winSetup.some(combination => {
            return combination.every(index => {
            return gameBoard.boardArray[index] == mark; 
            })
        })
    }
    return {checkWinner}
})();

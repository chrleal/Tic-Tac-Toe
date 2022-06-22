const newPlayer = (name, marker) => {
    return {name, marker};
}

const gameBoard = (() => {
    const boardArray = ['', '', '', '', '', '', '', '', ''];

    const contentBoard = (() => {
        const board = document.querySelector('.board');
        const fields = board.querySelectorAll('.square');
        fields.forEach((field, index) => {
            field.textContent = `${boardArray[index]}`
        })

    })();
    return {boardArray}

})();

const displayController = (() => {
    const board = document.querySelector('.board');
    const fields = board.querySelectorAll('.square');

    const renderArray = (() => {
        let mark = 'X';
        fields.forEach((field) => {
            field.addEventListener('click', () => {
                gameBoard.boardArray.forEach((aux, index) => {
                    if (index == field.dataset.id) {
                        if (gameBoard.boardArray[index] != "") {
                            return
                        } else if (mark == 'X') {
                            gameBoard.boardArray[index] = mark;
                            field.textContent = mark;
                            mark = 'O'
                        } else {
                            gameBoard.boardArray[index] = mark;
                            field.textContent = mark;
                            mark = 'X'
                        }
                    }
                })
            })
        })
    })();

})();

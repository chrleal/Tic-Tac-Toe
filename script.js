const newPlayer = (name, marker) => {
    return {name, marker};
}

const gameBoard = (() => {
    const board = ['X', 'X', 'X', 'X', 'O', 'O', 'O', 'O', 'O'];

    const contentboard = (() => {
        const gameBoard = document.querySelector('.board');
        const fields =gameBoard.querySelectorAll('.square');
        fields.forEach((field, index) => {
            field.textContent = `${board[index]}`
        })

    })();
})();


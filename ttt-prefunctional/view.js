function view() {
    let game = document.getElementById('game'),
        messages = document.getElementById('messages'),
        table = document.getElementById('board'),
        tiles = [ new Array(3), new Array(3), new Array(3) ]
    const reset = document.getElementById('reset')
    
    for (let i = 0; i < 3; i++) {
        let tr = table.appendChild(document.createElement('tr'))
        for (let j = 0; j < 3; j++) {
            tiles[i][j] = tr.appendChild(document.createElement('td'))
        }
    }
    
    function showWinner(winner) {
        messages.textContent = winner.winner + ' won!'
    }
    
    function showInTurn(inTurn) {
        messages.textContent = 'Your turn, ' + inTurn
    }
    
    function updateBoard(board) {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (board[i][j]) {
                    tiles[i][j].style['background-image'] = 'url(' + board[i][j] + '.png)';
                } else {
                    tiles[i][j].style.background = 'white';
                }
            }
        };
    }

    function control(controller) {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                tiles[i][j].onclick = controller.clickBoard.bind(controller, i, j)
            }
        }
        reset.onclick = controller.clickReset
    }

    function createWinnerMessage(winner) {
        let p = document.createElement('p')
        p.textContent = winner.winner + ' won!'
        return p
    }

    function createShowInTurn(inTurn) {
        let p = document.createElement('p')
        p.textContent = 'Your turn, ' + inTurn
        return p
    }

    function createTiles(board) {
        return board.map ( (row, i) => {
            const tr = document.createElement('tr')
            row.forEach ( (cell, j) => {
                const td = tr.appendChild(document.createElement('td'))
                td.onclick = () => listener(i, j)
                if (cell)
                    td.style['background-image'] = 'url(' + board[i][j] + '.png)'
                else
                    td.style.background = 'white'
            })
            return tr
        })
    }

    function createBoard(board) {
        const table = document.createElement('table')
        createTiles(board).forEach(table.appendChild.bind(table))
        return table
    }
    
    function createView(model) {
        let div = document.createElement('div')
        if (model.winner()) {
            div.appendChild(createWinnerMessage(model.winner()))
        } else {
            div.appendChild(createShowInTurn(model.playerInTurn()))
        }
        div.appendChild(createBoard(model.board))
        div.appendChild(reset)
        return div
    }

    function render(model) {
        const p = game.parentNode
        p.removeChild(game)
        game = createView(model)
        p.appendChild(game)
    }

    let listener

    function onclick(_listener) {
        listener = _listener
    }

    return { showWinner, showInTurn, updateBoard, control, onclick, render }
}
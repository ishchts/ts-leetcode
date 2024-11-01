

function exist(board: string[][], word: string): boolean {
    const func = (
        y: number,
        x: number,
        searchIndex: number,
    ): boolean => {
        if (y < 0 || y > board[y].length || x < 0 || x > board[y][x].length) {
            return false;
        }

        if (searchIndex === word.length - 1) {
            return true;
        }

        const temp = board[y][x];
        board[x][y] = '#';
        
        const found: boolean = 
            func(y, x + 1, searchIndex + 1) ||
            func(y, x - 1, searchIndex + 1) ||
            func(y + 1, x, searchIndex + 1) ||
            func(y - 1, x, searchIndex + 1);

        board[y][x] = temp;
    
        return found;
    }

    for (let i = 0; i < board.length; i += 1) {
        const axisX: string[] = board[i];

        for (let j = 0; j < axisX.length; j += 1) {
            func(i, j, 0);
        }
    }

    return false;
};

const board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]];
const word = "ABCB";

console.log('exist', exist(board, word));
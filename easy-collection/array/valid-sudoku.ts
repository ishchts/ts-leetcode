



function isValidSudoku(board: string[][]): boolean {
    const map: Record<string, boolean> = {};

    for (let row = 0; row < board.length; row += 1) {
        for (let col = 0; col < board[0].length; col += 1) {
            const val = board[row][col];
            if (val === '.') continue;
            const rowKey = `row-${row}-${val}`;
            if (rowKey in map) {
                return false;
            }

            const colKey = `col-${col}-${val}`;
            if (colKey in map) {
                return false;
            }
            const boxKey = `box-key-${Math.floor(row / 3)}-${Math.floor(col / 3)}-${val}`;
            console.log('boxKey', boxKey);
            if (boxKey in map) {
                return false;
            }

            map[rowKey] = true;
            map[colKey] = true;
            map[boxKey] = true;
        }
    }

    return true;
};

let input: string[][] =
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]];

console.log('isValidSudoku', isValidSudoku(input));
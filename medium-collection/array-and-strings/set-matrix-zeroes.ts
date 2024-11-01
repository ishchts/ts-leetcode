function setZeroes(matrix: number[][]): void {
    const coordinates: number[][] = [];

    for (let i = 0; i < matrix.length; i += 1) {
        const row = matrix[i];
        row.forEach((rowEl, rowElIndex) => {
            if (rowEl === 0) {
                coordinates.push([i, rowElIndex])
            }
        })
    }

    for (let i = 0; i < coordinates.length; i += 1) {
        const [curRow, curCol] = coordinates[i];
        const row = matrix[curRow];

        for (let y = 0; y < row.length; y += 1) {
            row[y] = 0;
        }

        for (let j = 0; j < matrix.length; j += 1) {
            matrix[j][curCol] = 0;
        }
    }
};

const matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]];

setZeroes(matrix);
console.log('matrix', matrix);
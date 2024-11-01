function rotate(matrix: number[][]): void {
    const length = matrix.length - 1;

    for (let i = length; i >= 0; i -= 1) {
        let tmp: number[] = [];
        for (let y = length; y >= 0; y -= 1) {
            const el = matrix[y].pop();
            if (el !== undefined) {
                tmp.push(el);
            }

            if (matrix[y].length === 0) {
                matrix.splice(y, 1);
            }
        }

        matrix.push(tmp);
    }

    matrix.reverse();
};

const matrix = [[1,2,3],[4,5,6],[7,8,9]];

rotate(matrix);
console.log('matrix', matrix);


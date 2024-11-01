function createTwoDimensionalArray(rows: number, columns: number) {
  const arr = new Array(rows);
  for (let i = 0; i < rows; i++) {
    arr[i] = new Array(columns);
  }
  return arr;
}

function uniquePaths(m: number, n: number): number {
  const dp: number[][] = createTwoDimensionalArray(m, n);
  dp[0][0] = 1;

  for (let i = 0; i < dp.length; i += 1) {
    for (let j = 0; j < dp[i].length; j +=1) {
      if (i === 0 && j === 0) {
        continue;
      }

      const prevLeftCell = dp[i][j - 1] ?? 0;
      const prevTopCell = dp[i - 1] ? dp[i - 1][j] : 0;
      const currentPath = prevLeftCell + prevTopCell;
      dp[i][j] = currentPath;
    }
  }

  return dp[m - 1][n - 1];
};

console.log(uniquePaths(3, 2));
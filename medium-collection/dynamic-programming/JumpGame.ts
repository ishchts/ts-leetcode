function canJump(nums: number[]): boolean {
  let maxReach = 0;            // Переменная, хранящая максимальный индекс, до которого можно добраться
  let lastIndex = nums.length - 1; // Индекс последнего элемента массива

  for (let i = 0; i <= maxReach; i++) {  // Итерируемся по массиву до тех пор, пока можем достигать текущий индекс
    maxReach = Math.max(maxReach, i + nums[i]);  // Обновляем maxReach, чтобы он всегда был максимальным достигнутым индексом

    if (maxReach >= lastIndex) {  // Если maxReach достигает или превышает последний индекс, возвращаем true
      return true;
    }
  }

  return false;  // Если цикл завершился, и maxReach меньше lastIndex, возвращаем false
}

function longestValidParentheses(s: string): number {
    let maxLength = 0;
    const stack: number[] = [-1]; // Инициализация стека с начальными значением -1

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(i); // Добавляем индекс открывающей скобки
        } else {
            stack.pop(); // Извлекаем верхний элемент из стека
            if (stack.length === 0) {
                stack.push(i); // Если стек пуст, добавляем текущий индекс
            } else {
                const lastStackIndex = stack.length - 1;
                const lastStackEl = stack[lastStackIndex];
                maxLength = Math.max(maxLength, i - lastStackEl);
                // Вычисляем длину валидной подстроки
            }
        }
    }

    return maxLength;
}
console.log(longestValidParentheses('()'))


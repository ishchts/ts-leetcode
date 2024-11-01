function myAtoi(s: string): number {
    let parsed = parseInt(s, 10);
    if (isNaN(parsed)) {
        return 0
    } else if (parsed >= Math.pow(2, 31)) {
        return Math.pow(2, 31) - 1   
    } else if (parsed <= Math.pow(-2, 31)) {
        return Math.pow(-2, 31)
    } else {
        return parsed
    }
};

console.log('myAtoi', myAtoi("words and 987"));
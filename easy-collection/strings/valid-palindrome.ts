function isPalindrome(s: string): boolean {
    const str = s.toLocaleLowerCase().replace(/[^A-Za-z0-9]+/g, '');
    let newStr = '';

    for (let i = str.length - 1; i >= 0; i --) {
        newStr += str[i];
    }
    console.log('str', str);
    return str === newStr;
};

console.log('qwe', isPalindrome("0P"));
const bad = 2;

const isBadVersion = (n: number): boolean => {
    return n === bad;
}

const solution = function(isBadVersion: any) {

    return function(n: number): number {
        let min = 1;
        let max = n;
        
        let firstBadVersion = -1;

        if (isBadVersion(min)) {
            return min;
        }

        while (true) {
            let mid = Math.floor((max + min) / 2);

            if (!isBadVersion(mid)) {
                min = mid + 1;
            } else if (isBadVersion(mid - 1)) {
                max = mid;
            } else {
                firstBadVersion = mid;
                return firstBadVersion;
            }
        }
    };
};

const n = 5;
console.log('solution', solution(isBadVersion)(2))


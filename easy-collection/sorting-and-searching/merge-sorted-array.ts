
// function merge(nums1: number[], m: number, nums2: number[], n: number): void {
//     nums1.splice(m);
//     nums1.push(...nums2.slice(0, n));
//     nums1.sort((a, b) => a - b);

//     console.log('nums1', nums1);
// };
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let num1Index = m - 1;
    let num2Index = n - 1;
    let i = m + n - 1;

    while (num2Index >= 0) {
        if (nums1[num1Index] > nums2[num2Index]) {
            nums1[i] = nums1[num1Index];
            num1Index -= 1;
        } else {
            nums1[i] = nums2[num2Index];
            num2Index -= 1;
        }
        i -= 1; 
    }

    console.log('nums1', nums1);
};

// merge([1,2,3,0,0,0], 3, [2,5,6], 3);
// merge([1], 1, [], 0);
// merge([0], 0, [1], 1);
// merge([2,0], 1, [1], 1);
merge([1,2,3,0,0,0], 3, [2,5,6], 3);

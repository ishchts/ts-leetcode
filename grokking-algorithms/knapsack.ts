const recorder = {
	name: 'Магнитофон',
	price: 3000,
	size: 4
};
const laptop = {
	name: 'Ноутбук',
	price: 2050,
	size: 3
};
const guitar = {
	name: 'Гитара',
	price: 1500,
	size: 1
};
const iPhone = {
	name: 'iPhone',
	price: 2000,
	size: 1
};
const player = {
  name: "MP3 player",
  price: 1000,
  size: 1
};

type Item = {
    name: string,
	price: number,
	size: number
}

const knapsack = (items: Item[], weight: number): number => {
	items.sort((a, b) => a.size - b.size);
	const dp: number[][] = Array.apply(null, new Array(items.length)).map(() => new Array(weight));
	dp[0].fill(items[0].price);

    for (let i = 1; i < dp.length; i += 1) {
        const row = dp[i];
        
        for (let j = 0; j < row.length; j +=1) {
            const currentItem = items[i];
            const currentWeight = j + 1;
            const restIndex = currentWeight - currentItem.size - 1;

            if (restIndex >= 0) {
                const prevMax = dp[i - 1][j];
                const currentMax = currentItem.price + dp[i - 1][restIndex];
                dp[i][j] = Math.max(prevMax, currentMax);
            } else if (currentItem.size <= currentWeight) {
                dp[i][j] = Math.max(currentItem.price, dp[i - 1][j]);;
            } else {
                dp[i][j] = dp[i - 1][j];
            }
        }
    }

    return Math.max(dp[dp.length - 1][weight - 1]);
}

console.log(knapsack([recorder, laptop, guitar], 4)); // 3500, Ноутбук + Гитара
console.log(knapsack([recorder, laptop, guitar, iPhone], 4)); // 4000, iPhone + Ноутбук
console.log(knapsack([recorder, laptop, guitar, iPhone, player], 4)); // 4500, плеер+ iPhone + Гитара
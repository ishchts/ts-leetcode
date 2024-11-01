class MinStack {
    min: number[]
    stack: number []

    constructor() {
        this.min = [];
        this.stack = [];
    }

    push(val: number): void {
        this.stack.push(val);
        if (this.min.length === 0) {
            this.min.push(val);
            return
        }
        
        const min = Math.min(this.min[this.min.length - 1], val)
        this.min.push(min);
    }

    pop(): void {
        this.stack.pop();
        this.min.pop();
    }

    top(): number {
        return this.stack[this.stack.length - 1];
    }

    getMin(): number {
        return this.min[this.min.length - 1];
    }

    getMinStack(): number[] {
        return this.min;
    }
}

const minStack = new MinStack();

minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMinStack());
console.log(minStack.getMin()); // return -3
minStack.pop();
console.log(minStack.top()); // return 0
console.log(minStack.getMin()); // return -2
class FibonacciWithMemo {
    private static hash = new Map<number, number>();

    static main(): void {
        let number = 10;
        console.log(this.fib(number));

        this.hash.forEach((key,value)=>{
            console.log(`${key}`);
        })
        
    }

    private static fib(n: number): number {
        if (n <= 1) {
            return n;
        }

        if (this.hash.has(n)) {
            return this.hash.get(n)!;
        }

        let result = this.fib(n - 1) + this.fib(n - 2);
        this.hash.set(n, result);
        console.log(`${result}`)
        return result;
    }
}

FibonacciWithMemo.main();
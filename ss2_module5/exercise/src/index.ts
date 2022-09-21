let fibonacci = (num: number): number => {
    if (num == 1) {
        return 0
    } else if (num == 2) {
        return 1
    } else {
        return fibonacci(num - 1) + fibonacci(num - 2)
    }
}
let sum = 0;
for (let i = 1; i <= 10; i++) {
    let fibo = fibonacci(i)
    console.log(fibo)
    sum += fibo
}
console.log(`sum = ${sum}`)

export function sum(a, b) {
    return a + b;
}
 

export function product(a, b, c) {
    return a * b * c;
}
 

export function factorial(n) {
    if (n === 0 || n === 1) return 1;
    let fact = 1;
    for (let i = 2; i <= n; i++) {
        fact *= i;
    }
    return fact;
}
 


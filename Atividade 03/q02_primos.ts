function ehprimo(n: number): Boolean{
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false
        }
    }
    return true
}
console.log(ehprimo(397))
console.log(ehprimo(98))

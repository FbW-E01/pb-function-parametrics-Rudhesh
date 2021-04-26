// Create a function sum which accepts any amount of numbers and return the sum of their addition

const sum = (...num) => {
    let sumof = 0;
    for (let i = 0; i < num.length; i++) {
        sumof += num[i];
        
    }

    return sumof;
};

console.log(sum(1)); // -> 1
console.log(sum(1, 15)); // -> 16
console.log(sum(25, 25, 20)); // -> 70

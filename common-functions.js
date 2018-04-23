// Recursive examples
function power(base, exponent) {
    if (exponent === 0) {
        return 1;
    } else {
        return base * power(base, exponent - 1 );
    }
}

// Factorial in recursive format
function factorial(n) {
    if (n === 1) {
        return 1;
    } else if (n === 0) {
        return 0;
    } else {
        return n * factorial(n - 1);
    }
} 

// add multiple times.
function add(x, y) {
    if(y === undefined) {
        return function(y) {
            return x + y;
        }
    } else {
        return x + y;
    }
}

console.log(add(2, 5));
console.log(add(2)(3));

// more generic solution for adding multiple params
let sum = (arr) => arr.reduce((a, b) => a + b);
let addGenerator = (numArgs, prevArgs) => {
  return function () {
    let totalArgs = prevArgs.concat(Array.from(arguments));
    if (totalArgs.length === numArgs) {
      return sum(totalArgs);
    }
    return addGenerator(numArgs, totalArgs);
  };
};

let addGeneral = addGenerator(2, []);

addGeneral(2, 5); // 7
addGeneral(2)(5); // 7
addGeneral()(2, 5); // 7
addGeneral()(2)(5); // 7
addGeneral()()(2)(5); // 7
console.log(addGeneral()(2)(5));

// isPrime
function isPrime(n) {
    if (n === 1) {
        return true;
    } else if (n === 0) {
        return false;
    }

    for (let i = 2; i < n; i++) {
        if (n % i !== 0) {
            return false;
        }
    }

    return true;
}

// isPrime optimized
const isPrimeOptimized = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) return false; 
    return num !== 1;
}

// generate fibonacci
function fib(n) {
    // modify this starting point to be zero or 1 depending on their requirements
    let arr = [1, 1];
    for (let index = 2; index < n; index++) {
        const element = arr[index - 1],
                nextElement = arr[index  - 2],
                result = element + nextElement;
        arr.push(result);
    }
    return arr;
}

// find fibonacci sequence 
function fibNo(n) {
    return (n === 0 ) ? 0 : fib(n)[n-1];
}

console.log(fib(1));
console.log(fibNo(0));

// isSorted
function isSorted(arr) {
    return arr.every(function (x, i) {
        // sorted ascendingly, if want descending, use <=
        return i === 0 || x >= arr[i - 1];
    });
}

console.log(isSorted([]));
console.log(isSorted([-Infinity, -5, 0, 3, 9]));
console.log(isSorted([3, 9, -3, 10]));

// filter
function ownFilter(arr, fn) {
    let filteredArr = [];
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (fn(element)) {
            filteredArr.push(element);
        }
    }
    return filteredArr;
}

console.log(ownFilter([1, 2, 3, 4], n => n < 3) );

// 5 dices, if you got 11111, 600 points, 66666 400 points, etc.etc.
function throwDices(n) {
    let arr = [],
        result = 0;
    
    // throw dice n time
    for(let i = 0; i < n; i++) {
        let newDiceNumber = Math.floor(Math.random() * 6) + 1;
        arr.push(newDiceNumber);
        if (newDiceNumber === 1) {
            result += 120;
        } else if (newDiceNumber === 2) {
            result += 100;
        } else if (newDiceNumber === 3) {
            result += 80;
        } else if (newDiceNumber === 4) {
            result += 60;
        } else if (newDiceNumber === 5) {
            result += 40;
        } else if (newDiceNumber === 6) {
            result += 20;
        }
    }

    console.log(`Number = ${arr}, Result = ${result} points`);
    
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

throwDices(5);
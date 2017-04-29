1) Validating Email Address

function validateForm() {
    var x = document.forms["myForm"]["email"].value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= x.length) {
        alert("Not a valid e-mail address");
        return false;
    }
}

< body >
    < form name = "myForm"
action = "demo_form.asp"
onsubmit = "return validateForm();"
method = "post" >
    Email: < input type = "text"
name = "email" >
    < input type = "submit"
value = "Submit" >
    < /form> < /body>

2) Clock

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    // add a zero in front of numbers<10
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML = h + ":" + m + ":" + s;
    t = setTimeout(function() { startTime() }, 500);
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

< body onload = "startTime()" >
    < div id = "txt" > < /div>

3) String split

function myFunction() {
    var str = "a,b,c,d,e,f";
    var n = str.split(",");
    document.getElementById("demo").innerHTML = n[1];
}

4) The following example uses the floor() and random() methods of the Math object to
return a random number between 0 and 10:

    document.write(Math.floor(Math.random() * 11));

5) An integer is a number that can be written without a fractional or decimal component.
    //Augmenting the number prototypes 
Number.method('integer', function() {
    return Math[this < 0 ? 'ceiling' : 'floor'](this);
}); // ceiling if negative number , floor if positive

example: document.writeIn((-10 / 3).integer()); // - 3

6) Sealer / Unsealer // similar like deffie huffman /rsa cryptography
function make_sealer() {
    var boxes = [],
        values = [];
    return {
        sealer: function(value) {
            var i = boxes.length,
                box = {};
            boxes[i] = box;
            values[i] = value;
            return box;
        },
        unsealer: function(box) {
            return values[boxes.indexOf(boxes)]
        };
    };
}

7)
function newDoc() {
    window.location.assign("insert url link here ")
} < button onclick = "newDoc()" > Load New Document < /button> 

8) var fibonacci = function(n) {
    return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

Better solution // with Memoization 
var fibonacci = function() {
var memo = [0, 1]; //array , ans for n = 0 and n = 1 , the answer for the n > 1, are not defined yet 
var fib = function(n) {
    var result = memo[n];
    if (typeof result !== 'number') { //if result != number , which means the array haven't been created yet / undefined
        result = fib(n - 1) + fib(n - 2);
        memo[n] = result;
    }
    return result;
};
return fib;
}();

9) Write a
function greaterThan, which takes one argument, a number, and returns a
function that represents a test.When this returned
function is called with a single number as argument, it returns a boolean: true
if the given number is greater than the number that was used to create the test
function, and false otherwise.

function greaterThan(x) {
    return function(y) {
        return y > x;
    };
}

var greaterThanTen = greaterThan(10);
show(greaterThanTen(9));

10)
function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
    // }

    11) finding something between two strings

function between(x, y, z) {
    var start = x.indexOf(y) + y.length;
    var end = x.indexOf(z, start);
    return x.slice(start, end);
}

between("bu ] boo [ bah ] gzz", "[ ", " ]");

12) You don 't need to define any parameters for a function. You can just use the function'
s arguments array - like object.

function sum() {
    var retval = 0;
    for (var i = 0, len = arguments.length; i < len; ++i) {
        retval += arguments[i];
    }
    return retval;
}

sum(1, 2, 3) // returns 6

13) Simplification of
for loop.Encapsulated in a
function.
function forEach(array, action) {
    for (var i = 0; i < array.length; i++)
        action(array[i]);
}

function sum(numbers) {
    var total = 0;
    forEach(numbers, function(number) {
        total += number; // assume it's total += numbers[i];
    });
    return total;
}

14)
function countZeroes(array) {
    var total = 0;
    for (var i = 0; i < array.length; i++) {
        total += (array[i] === 0 ? 1 : 0);
    }
    return total;
}

15)
function findSequence(goal) {
    function find(start, history) {
        if (start == goal)
            return history;
        else if (start > goal)
            return null;
        else
            return find(start + 5, "(" + history + " + 5)") ||
                find(start * 3, "(" + history + " * 3)");
    }
    return find(1, "1");
}

print(findSequence(24)); //abit lengthy because it's a recursion, so it loops through the entire program a few times ,until it doesn't return null . e.g find ( 1,"1') , next find ( 1+5 ,"(1+5")) .. 6+5 ,11+5,16+5,21+5 = null, try 16*3 = null, try 11*3 = null , 6*3 = 18 , proceed 18+5 , 23+5 = null , try 23*3 = null , tries 18*3 = null, tries 1*3 ,3+5 , 8+5 ,13+5 ,18+5 = not viable coz tried b4 , 13*3 = null ,8*3 =24 !!! ans = ((3+5)*3) http://i.stack.imgur.com/gmwK0.png

16)
function power(base, exponent) { //exponential function
    var result = 1;
    for (var count = 0; count < exponent; count++)
        result *= base;
    return result;
}

17) Animating Raphael Objects
http: //stackoverflow.com/questions/6282171/raphael-js-how-to-move-animate-a-path-object?rq=1
    var _transformedPath = Raphael.transformPath('M100 100L190 190', 'T400,0');
testpath.animate({ path: _transformedPath }, 1000);

18) Test Visibility of Raphael Object
http: //stackoverflow.com/questions/3222778/how-to-know-if-raphael-object-is-hidden

    19) http: //stackoverflow.com/questions/3913362/what-does-fn-mean-when-used-in-raphael

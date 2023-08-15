// Complete the square sum function so that it squares each number passed into it and then sums the results together.

function squareSum(numbers){
    return numbers.reduce((acc,cur)=> acc + Math.pow(cur,2),0)
    
    }

    // Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
    function repeatStr (n, s) {
        return s.repeat(n)
        }
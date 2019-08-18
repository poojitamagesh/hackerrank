//
// HackerRank Warm-Up Solutions 
//
// Repeated String
//
// Author - Poojita Magesh
// https://www.hackerrank.com/challenges/repeated-string/problem

// Solution:

//input string
var s = "abbadassda";
var n = 50;

//solution function

function repeatedString(s, n) {
    //obtaining the number 'a's in the input string
    var count = s.split("").filter(char => char === "a").length;
    
    //find the remainder of n divided by the length of string s
    //find the number of 'a's in the remaining string
    //obtain the number of 'a's when the string is repeated n times where n is an integer
    var res = s.slice(0, n % s.length).split("").filter(char => char === "a").length + count * Math.floor(n / s.length);
    return res;
}

//output
console.log(repeatedString(s, n));

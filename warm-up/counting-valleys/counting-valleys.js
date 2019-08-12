//
// HackerRank Warm-Up Solutions 
//
// Counting Valleys
//
// Author - Poojita Magesh
// https://www.hackerrank.com/challenges/counting-valleys/problem

// Solution:

n = 8; //array length

s = [UDDDUDUU];

//solution function

function countingValleys(n, s) {
    //level is altitude with respect to sealevel
    //sealevel is 0
    //val is the valleys entered
    let level = 0, val = 0;
    for (let char of s) {   
        //when entering a valley from sealevel
        if (char === "D" && level == 0) {
            val++;
            level--;
        }
        
        //when taking steps above sealevel
        else if (char === "U")
            level++;
         
        //when taking steps into the valley (staying in the valley)
        else if (char === "D" && level != 0)
            level--;
    }
    return val;
}

//output
console.log(countingValleys(n, s));

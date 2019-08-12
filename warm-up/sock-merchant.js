//
// HackerRank Warm-Up Solutions 
//
// Sock Merchant
//
// Author - Poojita Magesh
// https://www.hackerrank.com/challenges/sock-merchant/problem

// Solution:

n = 9; //array length

ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];

//solution function

function sockMerchant(n, ar) {
    ar = ar.sort();
    var pair = 0;
    //create a map for storing frequency
    var numMap = {};
    //loop throught the sock colours
    for (let num of ar) {
        //increase the frequency by 1 or initialize with 1 if encountered for the first time
        numMap[num] = numMap[num] + 1 || 1;
        //if it's a pair, add 1 to pair
        if ((numMap[num] % 2) == 0)
            pair++;
    }
    return pair;
}

//output
console.log(sockMerchant(n, ar));

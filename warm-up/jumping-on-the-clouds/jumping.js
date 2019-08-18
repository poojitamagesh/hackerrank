//
// HackerRank Warm-Up Solutions 
//
// Jumping on the Clouds
//
// Author - Poojita Magesh
// https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem

// Solution:

//input array
c = [0, 0, 0, 0, 1, 0];

//solution function

function jumpingOnClouds(c) {
    var jumps = 0;
    for (var i = 0; i < c.length; i++) {
        //if there are 3 consecutive 0s (safe clouds)
        if (i + 2 < c.length && c[i + 2] == 0) {
            jumps++;
            //skip the next iteration (the next cloud)
            i++;
        }
        //if the 3rd cloud from index is 1 or the next cloud
        else if (i + 1 < c.length && c[i + 1] == 0)
            jumps++;
    }
    return jumps;
}

//output
console.log(jumpingOnClouds(c));

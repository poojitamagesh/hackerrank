## HackerRank - Jumping On The Clouds JS
- **Language used:** JavaScript 
- **Problem Link:** https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem
- **Level**: Easy


#### Problem Statement
Emma is playing a new mobile game that starts with consecutively numbered clouds. Some of the clouds are thunderheads and others are cumulus. She can jump on any cumulus cloud having a number that is equal to the number of the current cloud plus _**1**_ or _**2**_. She must avoid the thunderheads. Determine the minimum number of jumps it will take Emma to jump from her starting postion to the last cloud. It is always possible to win the game.

For each game, Emma will get an array of clouds numbered _**0**_ if they are safe or _**1**_ if they must be avoided. For example,  _**c = [0, 1, 0, 0 , 0, 1, 0]**_ indexed from _**0..6**_. The number on each cloud is its index in the list so she must avoid the clouds at indexes _**1**_ and _**5**_. She could follow the following two paths: _**0→2→4→6**_ or _**0→2→3→4→6**_. The first path takes _**3**_ jumps while the second takes _**4**_.

#### Function Description

Complete the jumpingOnClouds function in the editor below. It should return the minimum number of jumps required, as an integer.

jumpingOnClouds has the following parameter(s):

- c: an array of binary integers

#### Input Format

The first line contains an integer _**n**_, the total number of clouds. The second line contains _**n**_ space-separated binary integers describing clouds _**c[i]**_ where _**0<=i<n**_.


#### Constraints

- _**2<=n<=100**_
- _**c[i] ∈ {0,1}**_
- _**c[0] = c[n-1] = 0**_


#### Output Format

Print the minimum number of jumps needed to win the game.


#### Sample Input 0

```
7
0 0 1 0 0 1 0
```

#### Sample Output 0

```
4
```

#### Explanation 0

Emma must avoid _**c[2]**_ and _**c[5]**_. She can win the game with a minimum of _**4**_ jumps:
_**0→1→3→4→6**_

#### Sample Input 1

```
6
0 0 0 0 1 0
```

#### Sample Output 1

```
3
```

#### Explanation 1

The only thundercloud to avoid is _**c[4]**_. Emma can win the game in _**3**_ jumps:
_**0→2→3→5**_

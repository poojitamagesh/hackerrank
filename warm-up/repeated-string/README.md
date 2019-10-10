## HackerRank - Sock Merchant JS
- **Language used:** JavaScript 
- **Problem Link:** https://www.hackerrank.com/challenges/repeated-string/problem
- **Level**: Easy


#### Problem Statement
Lilah has a string, _**s**_, of lowercase English letters that she repeated infinitely many times.

Given an integer, _**n**_, find and print the number of letter a's in the first  letters of Lilah's infinite string.

For example, if the string _**s='abcac'**_ and _**n=10**_, the substring we consider is _**abcac**_, the first _**10**_ characters of her infinite string. There are _**4**_ occurrences of a in the substring.

#### Function Description

Complete the repeatedString function in the editor below. It should return an integer representing the number of occurrences of a in the prefix of length _**n**_ in the infinitely repeating string.

repeatedString has the following parameter(s):

- s: a string to repeat
- n: the number of characters to consider

#### Input Format

The first line contains a single string, _**s**_.
The second line contains an integer, _**n**_.


#### Constraints

- _**1<=|s|<=100**_
- _**1<=n<=10^12**_
- _**For 25% of the test cases, n<=10^6**_


#### Output Format

Print a single integer denoting the number of letter a's in the first _**n**_ letters of the infinite string created by repeating  _**s**_ infinitely many times.


#### Sample Input 0

```
aba
10
```

#### Sample Output 0

```
7
```

#### Explanation 0

The first _**n=10**_ letters of the infinite string are abaabaabaa. Because there are _**7**_ a's, we print _**7**_ on a new line.

#### Sample Input 1

```
a
1000000000000
```

#### Sample Output 1

```
1000000000000
```

#### Explanation 1

Because all of the first _**n=1000000000000**_ letters of the infinite string are a, we print _**1000000000000**_ on a new line.

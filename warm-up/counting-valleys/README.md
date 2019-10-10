## HackerRank - Counting Valleys JS
- **Language used:** JavaScript 
- **Problem Link:** https://www.hackerrank.com/challenges/counting-valleys/problem
- **Level**: Easy


#### Problem Statement
Gary is an avid hiker. He tracks his hikes meticulously, paying close attention to small details like topography. During his last hike he took exactly _**n**_ steps. For every step he took, he noted if it was an uphill, _**U**_, or a downhill, _**D**_ step. Gary's hikes start and end at sea level and each step up or down represents a _**1**_ unit change in altitude. We define the following terms:

- A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level.
- A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.
Given Gary's sequence of up and down steps during his last hike, find and print the number of valleys he walked through.

For example, if Gary's path is _**s = [DDUUUUDD]**_, he first enters a valley _**2**_ units deep. Then he climbs out an up onto a mountain _**2**_ units high. Finally, he returns to sea level and ends his hike.

#### Function Description

Complete the countingValleys function in the editor below. It must return an integer that denotes the number of valleys Gary traversed.

countingValleys has the following parameter(s):

- n: the number of steps Gary takes
- s: a string describing his path

#### Input Format

The first line contains an integer  _**n**_, the number of steps in Gary's hike.
The second line contains a single string _**s**_, of  _**n**_ characters that describe his path


#### Constraints

- _**2<=n<=10^6**_
- _**s[i] ∈ {U,D}**_


#### Output Format

Print a single integer that denotes the number of valleys Gary walked through during his hike.


#### Sample Input

```
8
UDDDUDUU
```

#### Sample Output

```
1
```

#### Explanation

If we represent _ as sea level, a step up as /, and a step down as \, Gary's hike can be drawn as:

```
_/\      _
   \    /
    \/\/
```

He enters and leaves one valley.

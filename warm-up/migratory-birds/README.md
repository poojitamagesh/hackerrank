## HackerRank - Counting Valleys JS
- **Language used:** Python 
- **Problem Link:** https://www.hackerrank.com/challenges/migratory-birds/problem
- **Level**: Easy


#### Problem Statement

You have been asked to help study the population of birds migrating across the continent. Each type of bird you are interested in will be identified by an integer value. Each time a particular kind of bird is spotted, its id number will be added to your array of sightings. You would like to be able to find out which type of bird is most common given a list of sightings. Your task is to print the type number of that bird and if two or more types of birds are equally common, choose the type with the smallest ID number.

For example, assume your bird sightings are of types _**arr = [1,1,2,2,3]**_. There are two each of types _**1**_ and _**2**_, and one sighting of type _**3**_. Pick the lower of the two types seen twice: type _**1**_.

#### Function Description

Complete the migratoryBirds function in the editor below. It should return the lowest type number of the most frequently sighted bird.

migratoryBirds has the following parameter(s):

- arr: an array of integers representing types of birds sighted

#### Input Format

The first line contains an integer denoting _**n**_, the number of birds sighted and reported in the array _**arr**_.
The second line describes _**arr**_ as _**n**_ space-separated integers representing the type numbers of each bird sighted.

#### Constraints

- _**5<=n<=2*10^5**_
- It is guaranteed that each type is _**1**_,_**2**_,_**3**_,_**4**_, or _**5**_.


#### Output Format

Print the type number of the most common bird; if two or more types of birds are equally common, choose the type with the smallest ID number.

#### Sample Input 0

```
6
1 4 4 4 5 3
```

#### Sample Output 0

```
4
```

#### Explanation 0

The different types of birds occur in the following frequencies:

- Type : _**1:1**_ bird
- Type : _**2:0**_ birds
- Type : _**3:1**_ bird
- Type : _**4:3**_ birds
- Type : _**5:1**_ bird

The type number that occurs at the highest frequency is type _**4**_, so we print _**4**_ as our answer.

#### Sample Input 1

```
11
1 2 3 4 5 4 3 2 1 3 4
```

#### Sample Output 1

```
3
```

#### Explanation 1

The different types of birds occur in the following frequencies:

- Type : _**1:2**_ bird
- Type : _**2:2**_ birds
- Type : _**3:3**_ bird
- Type : _**4:3**_ birds
- Type : _**5:1**_ bird

The type number that occurs at the highest frequency is type _**3**_, so we print _**3**_ as our answer.

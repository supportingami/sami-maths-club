# Secret Santa

## Introduction

In this problem, we are trying to count the number of possible ways to have a secret Santa. The idea behind secret Santa is that the names of all the people involved are put in a hat and each person has to pick one name from the hat, not including your name.   

Each stage gets progressively harder in the hope that the students start to understand the general rules behind the way to find the number of possible scenarios.   

Firstly, let the students think about ways to represent this problem. The students could even arrange themselves in groups to reenact different scenarios and count the number of different ways of having a secret Santa.

## Solution   

**<ins>3 people<ins>**


![](https://github.com/supportingami/sami-maths-club/blob/master/maths-club-pack/images/secret-santa-2.png?raw=true)   

In this problem, you might have noticed that if A could either give to B or C, thus there are the 2 circular
solutions above.   

**3 people, 2 ways**   

**<ins>4 people<ins>**   
   
For 4 people, if you looked at the possibilities using networks, you might have realised that the network can be decomposed into 2 networks with 2 people in them:    

![](https://github.com/supportingami/sami-maths-club/blob/master/maths-club-pack/images/secret-santa-3.png?raw=true)  

The problem is therefore how many different ways do you have of having everyone in a same network and having 2 smaller networks with 2 people each?   

The answer is that for the larger network, there are 3! (= 3 × 2 × 1) ways of doing it as there are 3! different ways of changing the order of neighbouring nodes. You could write all these options as a list that you can imagine into a circle: ABCD, ABDC, ACBD,ACDB, ADBC,ADCB.   

For the second question, we can see that there are 3 possibilities, which are the one above and the two
below:   

![](https://github.com/supportingami/sami-maths-club/blob/master/maths-club-pack/images/secret-santa-4.png?raw=true)   

Therefore, for 4 people, you have 6+3 = 9   

**4 people, 9 ways**   

**<ins>5 people<ins>**   

There are two different options. A circle of 5, which could be done in 4! = 4 × 3 × 2 × 1 = 24 ways.   

A circle of 3 and a pair. The 3 could be chosen in 10 different ways and then there are two ways round the
circle so that is 20.   

**5 people, 44 ways**

## Extension

How about 6 people? 7? There are some properties of the sequence 2, 9, 44, etc. here https://oeis.org/A000166
# Kaprekar's Number

## Introduction

This problem is a good way to practice subtraction, it also demonstrates an interesting result.

After trying a few examples, it becomes quite apparent that all four-digit numbers seem to lead to the same number under repeated application of this opperation, namely 6174 or *Kaprekar's Number*.

Students will notice a similar pattern for three-digit numbers, with the resulting number being 495. They may also be able to demonstrate that this will happen for any three-digit number (see Extension section), although this is a difficult task for the four-digit problem.

## Solution

Starting with 4252, as in the question, and applying the operation defined in the question (known as the *Kaprekar Mapping*) the process would be as follows:

$5422 - 2245 = 3177$  
$7731 - 1377 = 6354$  
$6543 - 3456 = 3087$  
$8730 - 0378 = 8352$  
$8532 - 2358 = 6174$  
$7641 - 1467 = 6174$  
...

So we can see that the sequence eventually reaches 6174 at which point, if we continued, it would repeat 6174 indefinately.

## Extension

For three-digit numbers, we can demonstrate that repeated application of the Kaprekar mapping will always lead to 495.

Consider a general three-digit number $*abc* = 100a + 10b + c$ 
where $9 \geq a \geq b \geq c \geq 0$  

Applying the Kaprekar mapping gives the second number in our sequence:

$(100a + 10b + c) - (100c + 10b + a) = 100(a - c) + (c - a)$

We can simplify this to: $99(a - c)$

So, after one application of the Kaprekar mapping, the only possible results are the multiples of 99:

099, 198, 297, 396, 495, 594, 693, 792, 891, 990

In fact, each of these numbers uses the same digits as exactly one other, and will give the same result under the Kaprekar mapping. So, we only need to consider how half of them will be changed by a second application.

$990 - 099 = 891$  
$981 - 189 = 792$  
$972 - 279 = 693$  
$963 - 369 = 594$  
$954 - 459 = 495$

We could express this information as a flow diagram:

<img src="https://github.com/supportingami/sami-maths-club/blob/master/maths-club-pack/images/kaprekars-number.png?raw=true" width=400>

After one application of the Kaprekar mapping, the sequence will be one of the numbers on the flow diagram and then will follow it to reach 495. In total, any number will reach 495 in a maximum of 5 applications of the Kaprekar mapping. For example, 545 will require 5 applications.

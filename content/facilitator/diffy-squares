# Diffy Squares

## Introduction

This problem, at the simplest level, is a great way to practice subtraction and, for higher level students, can reveal some interesting mathematics.

With regards to the question asked, it is quite difficult to find particularly long seqences and not at all obvious when they will occur. In the solutions section, you fill find an example of the longest sequence possible under certain assumptions for the starting numbers. However, allowing any starting numbers to be used, this challenge can be as difficult as you want it to be.

It is technically possible to choose four numbers that make an infinite sequence where you never end up at $0, 0, 0, 0$. However, demonstrating this is tricky. [Here](https://mathforlove.com/2011/10/squares-of-difference-iii-a-surprising-solution/) is a link to a blog discussing the problem.

## Solution

Using just single-digit integers, the longest sequence length possible is 7.
Here is an example of such a sequence (using the column notation):

$0, 1, 4, 9$  
$1, 3, 5, 9$  
$2, 2, 4, 8$  
$0, 2, 4, 6$  
$2, 2, 2, 6$  
$0, 0, 4, 4$  
$0, 4, 0, 4$  
$4, 4, 4, 4$  
$0, 0, 0, 0$

It is interesting to point out that the same four starting numbers will not always give the same length of sequence. Taking $0, 4, 1, 9$ as the starting line for example:

$0, 4, 1, 9$  
$4, 3, 8, 9$  
$1, 5, 1, 5$  
$4, 4, 4, 4$  
$0, 0, 0, 0$

We managed to make this sequence quite a bit shorter just by swapping the position of the $1$ and the $4$. You might like to think about how many different lengths of sequence it is possible to get from the same four starting numbers (see Extention section for solution).

If we allow any integers less that 100 to be used, the longest sequence length possible is 12.
Here is an example of such a sequence:

$0,  7,  20, 44$  
$7,  13, 24, 44$  
$6,  11, 20, 37$  
$5,  9,  17, 31$  
$4,  8,  14, 26$  
$4,  6,  12, 22$  
$2,  6,  10, 18$  
$4,  4,  8,  16$  
$0,  4,  8,  12$  
$4,  4,  4,  12$  
$0,  0,  8,  8$  
$0,  8,  0,  0$  
$8,  8,  8,  8$  
$0,  0,  0,  0$

Introducing fractions is an effective way to increase the length of sequences which we can obtain. Using fractions we can find sequences with numbers less that 10 which are longer than the longest sequence possible using integers up to 100.
Here is an example:

$0, \frac{17}{12}, 4, \frac{35}{4}$  
$\frac{17}{12}, \frac{31}{12}, \frac{19}{4}, \frac{35}{4}$  
$\frac{7}{6}, \frac{13}{6}, 4, \frac{22}{3}$  
$1, \frac{11}{6}, \frac{10}{3}, \frac{37}{6}$  
$\frac{5}{6}, \frac{3}{2}, \frac{17}{6}, \frac{31}{6}$  
$\frac{2}{3}, \frac{4}{3}, \frac{7}{3}, \frac{13}{3}$  
$\frac{1}{3}, 1, 2, \frac{11}{3}$  
$\frac{1}{3}, 1, \frac{5}{3}, 3$  
$\frac{2}{3}, \frac{2}{3}, \frac{4}{3}, \frac{8}{3}$  
$0, \frac{2}{3}, \frac{4}{3}, 2$  
$\frac{2}{3}, \frac{2}{3}, \frac{2}{3}, 2$  
$0, 0, \frac{4}{3}, \frac{4}{3}$  
$0, \frac{4}{3}, 0, \frac{4}{3}$  
$\frac{4}{3}, \frac{4}{3}, \frac{4}{3}, \frac{4}{3}$  
$0, 0, 0, 0$

(In particular, 13 is the longest a sequence can be using numbers which are integer multiples of $\frac{1}{12}$ and less than 10, above is such an example)

## Extension

How many sequences of different length are possible from the same four starting numbers?

If we take a general starting square, using the numbers $a, b, c, d$.

Say that if we start with line $(a, b, c, d)$, this means that $a$ is in the top-left corner, $b$ is in the top-right, $c$ the bottom-right and $d$ the bottom-left.

By rotating the square, we will not change the length of the sequence generated, and we can see therefore that the starting lines $(b, c, d, a)$, $(c, d, a, b)$ and $(d, a, b, c)$ will give sequences of the same length as that given by $(a, b, c, d)$.

<img src="../images/diffy-squares-3.png" width=600>

We could also reflect the square in any of its four lines of symmetry without changing the length of the resulting square. So the starting lines $(a, d, c, b)$, $(d, c, b, a)$, $(c, b, a, d)$ and $(b, a, d, c)$ will all give sequences of the same length as $(a, b, c, d)$.

<img src="../images/diffy-squares-4.png" width=600>

So for each starting line $(a, b, c, d)$ there are 8 lines in total using the numbers $a$, $b$, $c$ and $d$ which give sequences of the same length.

But how many starting lines are possible in total from the numbers $a$, $b$, $c$ and $d$?

If we choose the number in the top-left corner first, we have four choices $a$, $b$, $c$ or $d$. Next, if we choose the number in the top-right we have a choice of the three remaining number. Likewise, for the bottom-right, we have a choice from two and the bottom-left must be the one remaining number. 

So, the total number of possible lines is $4 \times 3 \times 2 \times 1 = 24$

But since we know that these lines come in groups of 8, all of which have the same length. The largest number of different lengths possible must be $\frac{24}{3}$ which is 3.

Another way to see this would be to fix the position of $a$ to the top-left, which we can do since rotation does not change the length of the sequence as we have seen. We can then ask, of the remaining numbers $b$, $c$ and $d$, how many different ways can we choose the two numbers which $a$ will share an edge with?

The answer is 3. Either $b$ and $c$, $b$ and $d$ or $c$ and $d$.

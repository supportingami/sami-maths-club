# Balls and Books

## Introduction

This is a follow-up to “Handshakes”. The idea is to show different ways of thinking about a problem, and realize how seemingly different problems can be related to each other. You should encourage students to be systematic and decide on a precise and ordered way to describe what has been selected.

## Solution

1. There are different ways to approach the first problem. One is trying to list all the possible combinations. A good question to ask is: **how to write down a single combination?** One could write down two letters, the letters being the initials of the colors (e.g. BY for “blue and yellow”). Or assign numbers to the colors and write down these.

Another way is to draw each of the balls on paper, and connect possible pairs (this way it is clear that the problem is the same as the handshake problem).

Either way, one obtains <u>**10 different combinations**</u> for 5 balls. (12, 13, 14, 15, 23, 24, 25, 34, 35, 45).

To solve the problem for more balls, one can ask the following question: **Which new combinations arise when adding another ball?** The new ball can be combined with any of the 5 previous balls, giving 10+5=15 solutions for 6 balls. Similarly, we get 15+6=21 solutions for 7 balls.

A different way of solving this problem is realizing that each of the 5 balls can be combined with each of the other 4 balls, giving 5\*4=20 combinations. However, doing this we get each combination twice (e.g. we get 12 and 21, which are the same). So we need to divide the answer by 2 to get 20/2=10.

2. Again, ask the two questions: **How to write down a single combination?** The most obvious way is to write down a string of letters representing the color, e.g. (BGGBG).

A different way is to write down the two positions where the 2 blue books are. In the example, they would be in positions 1 and 4, so write 14. This is less obvious and it's fine if the students don't find it. If they do however, they will see that this problem is the same as the first one, and so there are **10 possibilities!**

**Which new combinations arise when adding a 4th green book?** There are two kinds of line-ups to consider: Those where the last book is green, and where it is red. If the last book is green, then removing it gives us a line-up for 2 red and 3 green books. We already know there are 10 of them! If the last book is red, then there are 5 different possible positions for the other red book. Thus there are 10+5 combinations for 2 red and 4 green books. Similarly, 21 for 2 red and 5 green books.

## Extension

Consider the first problem again, but this time taking 3 balls out each time. Try to decide a general rule or formula for any of the problems (e.g. picking 2 balls from N in a bag)

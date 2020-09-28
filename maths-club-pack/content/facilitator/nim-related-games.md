# Nim Related Games

## Introduction

Make sure students have first played the Nim/21 game and are familiar with the strategies for winning and losing.   

The variants on the game Nim have many different strategies, some simple and some complex. See if any students can consistently beat others and ask them what their strategy is.


## Solution

There is no simple solution to understand the optimal strategy for Nim, however by thinking strategically and in a way similar to the 21 game players will have an advantage over their opponents. A working solution using binary is presented below, however it is not expected that students will discover it or fully understand why it works. It might make for a nice extension activity to see if it actually works.   

Assume that the established rule is that the person who picks up the last object wins. You are the first player. Write the binary representation for the number of objects in each pile. For example, if there are 3, 4 and 5 objects in piles 1, 2 and 3, respectively, write these as   

Pile 1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;011   

Pile 2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;100   

Pile 3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;101  

Then, add the numbers as if they are decimals, to get 212. A winning position is one that has all even digits.To get to a winning position, change the 1 to a zero by taking two objects (binary 10) from Pile 1, leaving one object (binary 001). The second player will inevitably have to go to a losing position, which you can then turn into a winning position.

## Extension

Try to find winning strategies for other variants of the Nim game, or test the binary solution above to see if it works for standard Nim.

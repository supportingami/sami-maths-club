# Collatz Conjecture

## Introduction

The activity is interesting because it is easy to understand the rules and start generating sequences, but it
is an unsolved problem in mathematics whether all number end up at one. Many people have tried to find
a sequence that doesn’t go to one, or to prove that all sequences go to one and no one has succeeded.
There is a prize of at least $2000 dollars if you succeed!  

## Solution

The shortest sequences are going to involve powers of 2, e.g. 1,2,4,8,16,32 etc. as these numbers
“snowball” to 1. The longest sequence for a number smaller than 100 is for 97, which takes 118 steps but
finally gets to 1. The number just before, 96, only takes 12 steps!



## Extension

A computer or tablet would be very useful to try and find very long sequences. Here are some instructions for GeoGebra, which you can find online (https://www.geogebra.org/classic/spreadsheet) or it may be installed on the tablet and you do not need the internet.  

You will need to use the Mod command:   

Mod[ &lt;Dividend Number&gt; , &lt;Divisor&gt;Number ]


to check if the number is even. Mod is short for Modulo and gives the remainder when you do a division.
e.g. Mod[10,3] would be 1 because there is 1 leftover when you divide 10 by 3.  

You will also need the If command:  

If[ &lt;Condition&gt; , &lt;Then&gt; , &lt;Else&gt; ]


to choose what to do if it is even and what to do if it is odd.  

Put together, here is the formula you should put into cell A2, once you have put a starting number in A1.  

=If[Mod[A1, 2] == 0, A1 / 2, A1*3 + 1]  

Then just hover your mouse pointer in the bottom right corner and click the left button and hold down and
drag down lots of cells. You should see the sequence appear.  

If you want to be super clever you could try and combine two If statements so that if the cell was equal to 1 it would stop calculating and just say "STOP".
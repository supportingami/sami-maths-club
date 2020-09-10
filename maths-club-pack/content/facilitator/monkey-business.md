# Monkey Business

## Introduction

This is another problem where the solution seems impossible because there are too many things to consider (1000 monkeys!), but again becomes achievable once simplified and able to see patterns. To start the problem you should ensure students understand the rules, perhaps imitating with 4 students and the same number of coins or cards that can be flipped to face up or down.   

The first student flip all cards up (u):&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[u, u, u, u]   

The second student flip the evens down (d):&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[u, d, u, d]   

The third student would flip card 3:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[u, d, d, d]   

The fourth student would flip card 4: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[u, d, d, u]




## Solution

1.For the first part of the problem you only need to consider 10 monkeys (as the 11<sup>th</sup> monkey and later will not press any of the first 10 switches). So which monkeys will press switch number 10? Well, as 10 is divisible by 1, 2, 5 and 10 there are exactly 4 monkeys which will press the switch   

* Monkey 1 turns it on   

* Monkey 2 turns it off   

* Monkey 5 turns it back on   

* Monkey 10 turns it back off   

So switch 10 will be **off**.   

2.The next part is more challenging, but again relies of thinking about how many monkeys will press each switch.   

Switch 10 was off because every time one monkey turned it on another turned it off. We were able to split the number 10 into factor pairs (1x10, 2x5), which will always result in the light being turned off.   

Most numbers will be pressed by an even number of monkeys, e.g. 24 has factors (1x24, 2x12, 3x8, 4x6), so monkeys 1, 2, 3, 4, 6, 8, 12, 24 will press the switch, and as this is an even number the light will be off.   

Square numbers are the only ones which do not, e.g. 16 has factors (1x16, 2x8, **4x4**). Monkeys 1, 2, **4**, 8, 16 will press the switch, and as this is an odd number the light will stay on (monkey 4 won’t press it twice!).   

**So we just need to work out how many square numbers there are between 1 and 1000?**   

If we think about the larges square number less than 1000, **<span style="color:brown">30x30=900, 31x31=961,</span> <span style="color:red">32x32=1024</span>**  

So there will be **31 switches left on**! (switch numbers 1, 4, 9, 16, 25, 36, ... , 900, 961)   

## Extension   

How many lights would stay on if only the even numbered monkeys decided to take their turn pressing the switches?

 
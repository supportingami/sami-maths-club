# Two Eggs

## Introduction   

This mind-teaser is an interesting one because there are so many different approaches that will allow you to find out the answer, but there is only one optimal approach! Students will develop their critical thinking skills by using trial and error and thinking about how to improve their method each time.   

There are no tricks involved with this puzzle. There is no need to consider terminal velocity, potential energy or wind resistance. Both eggs are identical.   

Get students to think about the puzzle themselves before reading on.

## Solution   

<ins>Approach A - worst case 100<ins>   

The first logical approach would be to test every floor from the bottom floor to the top floor. So, we could start from the 1<sup>st</sup> floor and drop the egg from there. If it survives we can move up to try again from the 2<sup>nd</sup> floor, then the 3<sup>rd</sup> floor and so on. We keep moving a floor up each time until the egg breaks, and we get
the solution. For example, if the egg breaks on the 67<sup>th</sup> floor, we know that the highest floor than an egg
can withstand a drop is from the 66<sup>th</sup> floor. In this case, we would have dropped a single egg 67 times!   

There is also a chance that the egg will not break from the 100<sup>th</sup> floor and by using this approach we would have dropped the egg 100 times in total to find this out!   

This approach is clearly not optimal.   

<ins>Approach B - worst case 50<ins>   

Can we can halve the number of egg drops? What if we start by dropping the first egg from the 50 <sup>th</sup> floor?   

**What happens if the egg breaks from the 50<sup>th</sup> floor?**   

If the egg breaks from being dropped from the 50<sup>th</sup> floor, then it would break from every floor above this.
We would then only have 1 egg remaining to check all the floors below in a similar method to Approach A
(one floor at a time, starting from the 1<sup>st</sup> floor to the 49<sup>th</sup> floor). As a worst case, we would have to check 50 floors.   

**What happens if the egg does not break from the 50<sup>th</sup> floor?**   

If the egg did not break from being dropped from the 50<sup>th</sup> floor, then it would not break from any floor
below this. So again, we would only have 1 egg remaining to check all the floors above in a similar method to Approach A (one floor at a time, starting from the 51<sup>st</sup> floor to the 100<sup>th</sup> floor). As a worst case, we would have to check 50 floors in total.   

This is still not optimal.   

<ins>Approach C - worst case 19<ins>   

What would happen if we started off dropping our first egg at intervals of 10 floors? (for example, 10<sup>th</sup>
floor, 20<sup>th</sup> floor, 30<sup>th</sup> floor etc.).   

We would start by dropping the egg from the 10<sup>th</sup> floor. If the egg does not break, then it would not break from any floor below this and we can try again from the 20<sup>th</sup> floor. If the egg still does not break, we can try from the 30<sup>th</sup> floor, then the 40<sup>th</sup> floor and so on. Once the egg breaks from being dropped, we know that the solution is somewhere in the 9 floors below.   

For example, the egg did not break from the 90<sup>th</sup> floor but it did break from the 100<sup>th</sup> floor, so we know that the egg must break on one of the floors between 90 and 100. We test the 91<sup>st</sup> floor first then the 92<sup>nd</sup> floor and so on until the egg breaks and we have the solution.   

The worst case would be if the egg breaks from the 99<sup>th</sup> floor because this would take us 19 egg drops in total.

![](https://github.com/supportingami/sami-maths-club/blob/master/maths-club-pack/images/two-eggs-2.png?raw=true)   

Why are these not the best approaches? How can you make them optimal in their worst case?   

<ins>The optimal solution - worst case 14<ins>   

We should start by dropping an egg from the 14<sup>th</sup> floor. Can you think about why before reading on?   

**What happens if the egg breaks from the 14<sup>th</sup> floor?**   

If the egg breaks from being dropped from the 14<sup>th</sup> floor, then it would break from every floor above this. We should then check the 1<sup>st</sup> floor, then the 2<sup>nd</sup> floor, all the way up to the 13<sup>th</sup> floor (13 floors). In the worst-case scenario, we would have to check 14 floors in total: 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13.   

![](https://github.com/supportingami/sami-maths-club/blob/master/maths-club-pack/images/two-eggs-3.png?raw=true)   

**What happens if the egg does not break from the 14<sup>th</sup> floor?**   

If the egg did not break from being dropped from the 14<sup>th</sup> floor, then it would not break from any floor
below this. Then we would check the 27 <sup>th</sup> floor next. This is because if it breaks at the 27<sup>th</sup> floor, we would only have to check all the floors from the 15<sup>th</sup> to the 26<sup>th</sup> one (12 floors). Start by checking the 15<sup>th</sup> floor,then the 16<sup>th</sup> floor, all the way up to the 26<sup>th</sup> floor. In the worst-case scenario, we would again have to check 14 floors in total: 14, 27, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26.   

![](https://github.com/supportingami/sami-maths-club/blob/master/maths-club-pack/images/two-eggs-4.png?raw=true)   

**What happens if the egg still does not break?**   

If the egg did not break from the 27<sup>th</sup> floor, then you would have to check from the 39<sup>th</sup> floor. And if it breaks from being dropped from the 39<sup>th</sup> floor, you would only have to check the floors from the 28<sup>th</sup> to the 38<sup>th</sup> one (11 floors). Meaning that in the worst-case scenario, we would still only have to the check 14 floors in total: 14, 27, 39, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38.   

![](https://github.com/supportingami/sami-maths-club/blob/master/maths-club-pack/images/two-eggs-5.png?raw=true)    

Can you spot the pattern yet?   

Using the same logic, you should then move up to check the 50<sup>th</sup> floor and repeat the process. Then the
60<sup>th</sup> floor, the 69<sup>th</sup> floor, the 77<sup>th</sup> floor, the 84<sup>th</sup> floor, the 90<sup>th</sup> floor, the 99 <sup>th</sup> floor and finally the 100<sup>th</sup> floor.   

Putting this all together gives us:  

![](https://github.com/supportingami/sami-maths-club/blob/master/maths-club-pack/images/two-eggs-6.png?raw=true)   

Using this strategy, you would be able to cover all the floors and the number of attempts would never be bigger than 14!




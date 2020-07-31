# Pell Numbers

## Introduction

This activity starts with trial and error to find some values of a and b that work. Set out any correct answers that students get in a table like this, putting the smallest solutions at the top.

| b   | a   | Answer |
| --- | --- | ------ |
|     |     |        |
|     |     |        |
|     |     |        |
		
		
Students will hopefully spot some patterns appearing. If you have access to a computer or tablet, you could try to generate more solutions on a spreadsheet such as GeoGebra or Excel.

## Solution

| b   | a   | Answer |
| --- | --- | ------ |
| 0   | 1   | -1     |
| 1   | 1   | 1      |
| 2   | 3   | -1     |
| 5   | 7   | 1      |
| 12  | 17  | -1     |
| 29  | 41  | 1      |
| ... | ... | ...    |

You can find the next row for **b** by adding the previous answers for **a** and **b** together.

You can find the next for a by adding the previous answer for a and the new value for b.

e.g. **29 = 12+17** and **41=29+17**

You can also find new values for **a** and **b** by adding together twice the previous term and the term before that.

e.g. **29=2x12+5**   and **41 = 2x17+7**

Mathematically, for the **b** column, this is written as 

$\bf b_n = 2b_{(n-1)} + b_{(n-2)}$  

where $\bf b_0=0$  and $\bf b_1=1$.

$\bf \frac{a}{b}$ for each row gives an approximation to $\bf \sqrt{2}$. 

The approximation gets better as you go down the table. But it will never be perfect no matter how long you do this for!

## Extension
Try doing the activity again but starting with $\bf \sqrt{3}=\frac{a}{b}$.

More info can be found at https://en.wikipedia.org/wiki/Pell_number. 

Thanks to Kevin Buzzard from Imperial College for introducing SAMI to the activity.


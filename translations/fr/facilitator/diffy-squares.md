# Les Carrés de Diffy

## Introduction

Ce problème, au niveau plus simple, offre une façon excellente de pratiquer la soustraction. Pour les élèves plus doués, ça présente des propriétés mathématiques intéressantes.

En ce qui concerne la question posée, c'est assez difficile de trouver des suites particulièrement longues, et ce n'est pas du tout évident où les trouver. Dans la section de solutions, on présente la suite la plus longue possible sous certaines suppositions pour les nombres de départ. Cependant, si on n'a aucune restriction sur les numéros de départ à utiliser,, ce défi n'a pas de limite en ce qui concerne la difficulté.

C'est possible de choisir quatre nombres afin que la suite n'arrive jamais à `0, 0, 0, 0`. Cependant, c'est difficile de le prouver. [Voici un lien](https://mathforlove.com/2011/10/squares-of-difference-iii-a-surprising-solution/) vers un site-web qui traite du problème.

## Solution

En utilisant les nombres à un seul chiffre, la suite la plus longue à une longueur de 7. Voici un exemple d'une telle suite (en utilisant les colonnes pour rédiger la suite):

```
0, 1, 4, 9
1, 3, 5, 9
2, 2, 4, 8
0, 2, 4, 6
2, 2, 2, 6
0, 0, 4, 4
0, 4, 0, 4
4, 4, 4, 4
0, 0, 0, 0
```

Il est intéressant de noter que quatre nombres pourraient produire des suites différentes. Par exemple, commençant avec `0, 4, 1, 9` comme ligne de départ:

```
0, 4, 1, 9
4, 3, 8, 9
1, 5, 1, 5
4, 4, 4, 4
0, 0, 0, 0
```

On a réussi à raccourcir la suite simplement en échangeant la position du $1$ et du $4$. Réfléchissez à combien de longueurs différentes il est possible d'obtenir des mêmes quatre nombres de départ (voir la section Extension ci-dessous pour la solution).

Si on peut utiliser n'importe quel nombre entier inférieur à 100, alors la suite la plus longue a une longueur de 12. Voici un exemple d'une telle suite:

```
0,  7,  20, 44
7,  13, 24, 44
6,  11, 20, 37
5,  9,  17, 31
4,  8,  14, 26
4,  6,  12, 22
2,  6,  10, 18
4,  4,  8,  16
0,  4,  8,  12
4,  4,  4,  12
0,  0,  8,  8
0,  8,  0,  0
8,  8,  8,  8
0,  0,  0,  0
```

L'utilisation des fractions est un moyen efficace d'augmenter la longueur d'une suite qu'on obtient. En utilisant les fractions, on peut trouver des suites contenant des nombres inférieurs à 10 qui sont plus longues que la suite la plus longue utilisant les nombres entiers jusqu'à 100. Voici ci-dessous un exemple:

```
0, $\frac{17}{12}$, 4, $\frac{35}{4}$

$\frac{17}{12}$, $\frac{31}{12}$, $\frac{19}{4}$, $\frac{35}{4}$

$\frac{7}{6}$, $\frac{13}{6}$, 4, $\frac{22}{3}$

1, $\frac{11}{6}$, $\frac{10}{3}$, $\frac{37}{6}$

$\frac{5}{6}$, $\frac{3}{2}$, $\frac{17}{6}$, $\frac{31}{6}$

$\frac{2}{3}$, $\frac{4}{3}$, $\frac{7}{3}$, $\frac{13}{3}$

$\frac{1}{3}$, 1, 2, $\frac{11}{3}$

$\frac{1}{3}$, 1, $\frac{5}{3}$, 3

$\frac{2}{3}$, $\frac{2}{3}$, $\frac{4}{3}$, $\frac{8}{3}$

0, $\frac{2}{3}$, $\frac{4}{3}$, 2

$\frac{2}{3}$, $\frac{2}{3}$, $\frac{2}{3}$, 2

0, 0, $\frac{4}{3}$, $\frac{4}{3}$

0, $\frac{4}{3}$, 0, $\frac{4}{3}$

$\frac{4}{3}$, $\frac{4}{3}$, $\frac{4}{3}$, $\frac{4}{3}$

0, 0, 0, 0
```

(En particulier, 13 est la longueur maximum d'une suite qui contient uniquement des multiples entiers de $\frac{1}{12}$ inférieurs à 10. L'exemple ci-dessus est un tel exemple)

## Extension

Combien de suites de longueur différente sont possible à partir des même quatre nombres de départ?

Soit un carré avec des sommets `a, b, c, d`.

Supposons qu'on commence par la ligne `(a, b, c, d)` - cela veut dire que `a` est le sommet du coin supérieur gauche du carré, `b` est le sommet du coin supérieur droit, `c` est le sommet du coin inférieur droit, et `d` est le sommet du coin inférieur gauche.

En faisant pivoter le carré, on ne change pas la longueur de la suite générée par les quatres nombres, et donc on en déduit que les lignes de départ `(b, c, d, a)`, `(c, d, a, b)` et `(d, a, b, c)` produiront des suites de la même longueur que `(a, b, c, d)`.

<img src="https://github.com/supportingami/sami-maths-club/blob/master/maths-club-pack/images/diffy-squares-3.png?raw=true" width=600>

De la même façon, on ne change pas la longueur de la suite du carré en reflétant le carré dans l'une de ses quatre lignes de symétrie. Alors, les lignes de départ `(a, d, c, b)`, `(d, c, b, a)`, `(c, b, a, d)` et `(b, a, d, c)` produiront des suites de la même longueur que `(a, b, c, d)`.

<img src="https://github.com/supportingami/sami-maths-club/blob/master/maths-club-pack/images/diffy-squares-4.png?raw=true" width=600>

Alors pour chaque ligne de départ `(a, b, c, d)` il y a 8 lignes au total utilisant les nombres `a`, `b`, `c` et `d` qui génèrent des suites de la même longueur.

Combien de lignes de départ y a t'il en utilisant `a`, `b`, `c` et `d`?

Choisissons premièrement le nombre du sommet du coin supérieur gauche. Alors on a 4 choix: `a`, `b`, `c` ou `d`. Ensuite, si on choisit le nombre du sommet du coin supérieur droit, alors on peut choisir n'importe quel nombre des trois nombres restants. De la même façon, pour le sommet du coin inférieur droit, on a le choix entre deux nombres et il faut que le nombre du coin inférieur gauche soit le dernier nombre.

Alors, il y a `4 x 3 x 2 x 1 = 24` lignes possibles au total.

Mais puisque les lignes sont regroupées en groupes de 8 qui partagent la même longueur, le nombre le plus grand de longueurs différentes égale $\frac{24}{3}=3$.

Une autre façon de l'envisager c'est de fixer la position de `a` au coin supérieur gauche - cela est possible car on sait que ça ne change pas la longueur d'une suite en faisant pivoter le carré. On peut ensuite se demander combien de façons y a t'il de choisir les deux nombres (des nombres restants `b`, `c` et `d`) qui reliera à `a` par un arête?

La résponse est 3. Soit `b` et `c`, `b` et `d`, ou `c` et `d`.

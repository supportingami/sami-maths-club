# Conjecture de Syracuse

## Introduction

L'activité est intéressante car il est facile de comprendre les règles et de commencer à générer des séquences, mais c'est un problème non résolu en mathématiques si tout le nombres finissent à un. Beaucoup de gens ont essayé de trouver une séquence qui ne va pas à un, ou pour prouver que toutes les séquences vont à une et personne n'a réussi. Il y a un prix d’au moins $2000 dollars si vous réussissez!

## Solution

Les séquences les plus courtes commencent par des puissances de 2, par exemple 1,2,4,8,16,32, etc. car ces nombres «font boule de neige» jusqu'à 1. La séquence la plus longue pour un nombre inférieur à 100 est pour 97, ce qui prend 118 étapes pour aller jusqu'à 1. Le nombre juste avant, 96, ne prend que 12 étapes!



## Extension

Un ordinateur ou une tablette serait très utile pour essayer de trouver de très longues séquences. Voici quelques instructions pour GeoGebra, que vous pouvez trouver en ligne (https://www.geogebra.org/classic/spreadsheet) ou bien il peut être installé sur la tablette et vous n'avez pas besoin d'internet.

Vous devrez utiliser la commande Mod :

Mod[Dividende, Diviseur, Nombre]


pour vérifier si le numéro est pair. Mod est l’abréviation de Modulo et donne le reste lorsque vous faites une division. par exemple Mod[10,3] serait 1 parce qu'il y a 1 restant lorsque vous divisez 10 par 3.

Vous aurez également besoin de la commande Si :

If[Condition, If, Else]


pour choisir ce qu’il faut faire si c’est pair et ce qu’il faut faire si c’est impair.

Mettez ensemble, voici la formule que vous devriez mettre dans la cellule A2, une fois que vous avez mis un numéro de départ en A1.

=Si[Mod[A1, 2] == 0, A1 / 2, A1*3 + 1]

Ensuite, passez simplement le curseur de votre souris dans le coin inférieur droit et cliquez sur le bouton gauche et maintenez enfoncé et faites glisser vers le bas de nombreuses cellules. Vous devriez voir la séquence apparaître.

Si vous voulez être super intelligent, vous pouvez essayer de combiner deux instructions Si, afin que si la cellule était égale à 1, il arrêterait de calculer et juste dire "STOP".
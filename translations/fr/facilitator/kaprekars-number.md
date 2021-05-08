# Nombre de Kaprekar

## Introduction

Ce problème fournit un bon moyen de pratiquer la soustraction, et il nous montre un résultat assez intéressant.

Après avoir essayé quelques exemples, il devient tout à fait évident que tous les nombres à quatre chiffres mène à un nombre particulier, à savoir 6174 aussi connu sous le nom de *Nombre de Kaprekar*.

Les élèves remarqueront un modèle similaire pour les nombres à trois chiffres, mais avec un nombre différent qui en résulte: 495. Ils pourraient démontrer que cela se produira pour n'importe quel nombre à trois chiffres (voir la section de l'extension ci-dessous), mais c'est difficile à démontrer pour les nombres à quatre chiffres.

## Solution

Commençons par 4252, comme on a vu dans la quéstion, et appliquons l'opération définie (également connu sous le terme d' *Application de Kaprekar*):

$5422 - 2245 = 3177$  
$7731 - 1377 = 6354$  
$6543 - 3456 = 3087$  
$8730 - 0378 = 8352$  
$8532 - 2358 = 6174$  
$7641 - 1467 = 6174$  
...

Alors on voit que la suite arrive à 6174, et à ce moment là on obtiendra 6174 indéfiniment si on continue.

## Extension

Pour les nombres à trois chiffres, voici ci-dessous la preuve que l'application récurrent de l'application de Kaprekar mène toujours à 495.

Soit un nombre à trois chiffres $*abc* = 100a + 10b + c$, où $9 \geq a \geq b \geq c \geq 0$

En appliquant l'application de Kaprekar une fois on à l'équation suivante:

$(100a + 10b + c) - (100c + 10b + a) = 100(a - c) + (c - a)$

Simplifions la côté de l'équation pour arriver à: $99(a - c)$

Donc, après une seule application de l'application de Kaprekar, les seuls résultats possibles sont les multiples de 99:

099, 198, 297, 396, 495, 594, 693, 792, 891, 990

En fait, chacun de ces nombres utilise les même chiffres que exactement un autre, et les deux nombres produiront le même résultat apres l'application de Kaprekar. Donc, il suffit de considérer la manière dont une moitié de ces nombres vont changer après une deuxième application de Kaprekar.

$990 - 099 = 891$  
$981 - 189 = 792$  
$972 - 279 = 693$  
$963 - 369 = 594$  
$954 - 459 = 495$

L'organigramme ci-dessous représente une de ces opérations:

<img src="https://github.com/supportingami/sami-maths-club/blob/master/maths-club-pack/images/kaprekars-number.png?raw=true" width=400>

Après une application de l'application de Kaprekar, un des nombres de l'organigramme en résulte et donc ça arrivera à 495. Au total, n'importe quel nombre à trois chiffres atteindra 495 avec un maximum de 5 applications de Kaprekar. Par exemple, 545 nécessitera 5 applications.

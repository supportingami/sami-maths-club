# La multiplication russe

## Introduction
Il s’agit d’une méthode intéressante pour faire des multiplications – impliquant seulement la réduction de moitié, le doublement et l’ajout.

Essayez de calculer l'exemple 22 x 19 de manière traditionnelle, et puis en utilisant la méthode décrite. Les deux voies devraient donner la réponse 418.

Essayez ensuite d'autres multiplications, par exemple 25 x 37. Les élèves devraient tester leurs propres multiplications et voir si ce processus semble toujours fonctionner.


## Solution

Il fonctionnera pour deux nombres. Un aperçu des raisons pour lesquelles il fonctionne toujours peut être donné en essayant des multiplications où l'un des nombres est une puissance de deux, par exemple 30 x 36 ou 30 x 64 ou 30 x 128.


## Extension

**Comprendre comment la multiplication paysanne russe est liée aux nombres binaires**

(extrait de http://mathforum.org/dr.math/faq/faq.peasant.html)

Les nombres binaires sont des nombres écrits en [base deux](https://mathforum.org/dr.math/faq/faq.bases.html) au lieu de la base dix. Cela signifie que la valeur de position dépend de puissances de deux au lieu de puissances de dix: au lieu de uns, des dizaines et des centaines, la base deux a une valeur de position de uns, de deux, de quatre, ainsi de suite. Par exemple, quatorze en base deux est 1110 :  

        1110 (base 2)
    
        = 1 * $2^3$ + 1 * $2^2$ + 1 * $2^1$ + 0 * $2^0$
    
        = 8 + 4 + 2 + 0
    
        = 14.

La multiplication paysanne russe est en fait un moyen rapide de convertir deux nombres en forme binaire, de les multiplier ensemble et de les reconvertir dans notre système numérique. La connexion n'est pas surprenante, car les nombres binaires utilisent la base deux et la multiplication paysanne russe dépend de la multiplication et de la division par deux. Pour voir le lien plus clairement, examinons le problème 12*13.

**Réduire de moitié**

Vous pouvez convertir un nombre en forme binaire en divisant plusieurs fois par deux et en gardant une trace des restants. Essayons 12 :  

        12/2 = 6 reste 0  
    
        6/2 = 3 reste 0  
    
        3/2 = 1 reste 1  
    
        1/2 = 0 reste 1.

En lisant les restes de bas en haut, nous obtenons 1100, donc 12 en base deux est 1100.

Pourquoi cette méthode de conversion fonctionne? Essayons à nouveau de couper douze en deux, de la même manière. Cette fois, nous allons tout écrire en base deux. (Naturellement, 2 en base deux est 10.)  

        1100/10 = 110 reste 0  
    
        110/10 = 11 reste 0  
    
        11/10 = 1 reste 1  
    
        1/10 = 0 reste 1.

Diviser par deux puis prendre le reste nous donne le dernier chiffre d'un nombre en notation binaire.

Voici ce que nous savons sur 12, jusqu'à présent :  

        12 = 1100 (base 2)  
    
        = 1*$2^3$ + 1*$2^2$ + 0*2+ 0*1  
    
        = $2^3$ + $2^2$  
    
        = 8 + 4.

En divisant 12 par deux à plusieurs reprises, nous l'avons divisé en puissances de deux.

**La Propriété Distributive**

Nous essayons de multiplier 12 par 13. Une façon de le faire serait d’utiliser la multiplication longue :

![](https://github.com/supportingami/sami-maths-club/blob/master/maths-club-pack/images/russian-multiplication-4.png?raw=true)



Notez que nous ajoutons 2*13 et 10*13 pour obtenir notre réponse finale. Cela fonctionne à cause de la propriété[distributive]():  

        12 * 13  
    
        = (2 + 10) * 13  
    
        = 2 * 13 + 10 * 13.

Bien sûr, nous pouvons diviser 12 d'une manière quelconque, et obtenir toujours la bonne réponse. Utilisons nos travaux précédents pour diviser le problème en puissances de deux:  

        12 * 13  
    
        = (4 + 8) * 13  
    
        = ($2^2$ + $2^3$) * 13  
    
        = $2^2$ * 13 + $2^3$ * 13.

Si nous pouvons multiplier 13 par $2^2$ et $2^3$, nous serons finis.

**Doublement**

Le doublement répété d'un nombre le multiplie par des puissances de deux. Essayons de doubler 13:

![](https://github.com/supportingami/sami-maths-club/blob/master/maths-club-pack/images/russian-multiplication-2.png?raw=true)


Notre graphique nous dit que 22 * 13 + 23 * 13 = 52 + 104 = 156, donc 12 * 13 = 156, et nous avons terminé.

**Mettre tous ensemble**

Nous venons d'utiliser la réduction de moitié et le doublement pour convertir 12 en forme binaire, puis le multiplier par 13. La multiplication paysanne russe fait la même chose, mais comme elle laisse de côté plusieurs étapes, le processus est beaucoup plus rapide. Combinons nos étapes de doublement et de réduction de moitié pour comparer les deux méthodes.

![](https://github.com/supportingami/sami-maths-club/blob/master/maths-club-pack/images/russian-multiplication-3.png?raw=true)

Les colonnes utilisées dans la multiplication paysanne russe sont en surbrillance. Notez que lorsque le nombre dans la colonne du reste est 0, la ligne correspondante pour la multiplication des paysans russes est barrée.

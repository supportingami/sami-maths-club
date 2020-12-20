# Suite de Pell

## Introduction

Cette activité commence par tâtonnement pour trouver certaines valeurs de a et de b qui fonctionnent. Présentez toutes les bonnes réponses que les élèves obtiennent dans un tableau comme celui-ci, en mettant les plus petites solutions en haut.

| b | a | Réponse |
| - | - | ------- |
|   |   |         |
|   |   |         |
|   |   |         |


Espérons que les élèves repéreront certains modèles qui apparaissent. Si vous avez accès à un ordinateur ou à une tablette, vous pourriez essayer de générer plus de solutions sur une feuille de calcul en utilisant des logiciels tels que GeoGebra ou Excel.

## Solution

| b   | a   | Réponse |
| --- | --- | ------- |
| 0   | 1   | -1      |
| 1   | 1   | 1       |
| 2   | 3   | -1      |
| 5   | 7   | 1       |
| 12  | 17  | -1      |
| 29  | 41  | 1       |
| ... | ... | ...     |

Vous pouvez trouver la ligne suivante pour ** b ** en ajoutant les réponses précédentes pour ** a ** et ** b ** ensemble.

Vous pouvez trouver le suivant pour a en ajoutant la réponse précédente pour a et la nouvelle valeur pour b.

par exemple **29 = 12+17** et **41=29+17**

Vous pouvez également trouver de nouvelles valeurs pour ** a ** et ** b ** en additionnant deux fois le terme précédent et le terme avant cela.

par exemple **29=2x12+5**   et **41 = 2x17+7**

Mathématiquement, pour la colonne **b**, ceci est écrit comme suit

$\bf b_n = 2b_{(n-1)} + b_{(n-2)}$

où $\bf b_0=0$ et $\bf b_1=1$.

$\bf \frac{a}{b}$ pour chaque ligne donne une approximation de $\bf \sqrt{2}$.

L'approximation s'améliore au fur et à mesure que vous descendez le tableau. Mais ce ne sera jamais parfait, peu importe combien de temps vous faites cela!

## Extension
Essayez de refaire l'activité mais en commençant par $\bf\sqrt{3}=\frac{a}{b}$.

Plus d'informations peuvent être trouvées sur https://fr.wikipedia.org/wiki/Pell_number.

Merci à Kevin Buzzard du Collège Impérial d'avoir présenté SAMI à l'activité.


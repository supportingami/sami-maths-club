# Jeux liés à Nim

## Introduction

Assurez-vous que les élèves ont d'abord joué au jeu Nim/21 et qu'ils connaissent les mauvaises stratégies et les stratégies gagnantes.

Les variantes du jeu Nim ont de nombreuses stratégies différentes, certaines qui sont simples et d'autres qui sont complexes. Voyez si il y a des élèves qui gagnent régulièrement et demandez-leur quelle sont leurs stratégies.


## Solution

Il n'y a pas de solution simple pour comprendre la stratégie optimale pour Nim, mais en réfléchissant stratégiquement et d'une manière similaire aux jeux 21, les joueurs auront un avantage sur leurs adversaires. Une solution utilisant le binaire est présentée ci-dessous, mais on ne s'attend pas à ce que les étudiants la découvrent ou comprennent pleinement pourquoi cela fonctionne. Cela pourrait être une activité d'extension intéressante pour voir si cela fonctionne réellement.

Supposons que la règle établie est que la personne qui récupère le dernier objet gagne. Vous êtes le premier joueur. Écrivez la représentation binaire du nombre d'objets dans chaque pile. Par exemple, s'il y a 3, 4 et 5 objets dans les piles 1, 2 et 3, respectivement, écrivez-les comme

Pile 1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;011

Pile 2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;100

Pile 3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;101

Ensuite, additionnez les nombres comme s'ils étaient décimaux, pour obtenir 212. Une position gagnante est une position qui a tous les chiffres pairs. Pour arriver à une position gagnante, changez le 1 en zéro en prenant deux objets (binaire 10) de la pile 1, laissant un objet (binaire 001). Le deuxième joueur devra inévitablement aller dans une position perdante, que vous pourrez ensuite transformer en position gagnante.

## Extension

Essayez de trouver des stratégies gagnantes pour d'autres variantes du jeu Nim, ou testez la solution binaire ci-dessus pour voir si cela fonctionne pour Nim standard.

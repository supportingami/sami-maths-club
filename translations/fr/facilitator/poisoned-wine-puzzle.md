# Puzzle de vin empoisonné

## Introduction
Ce puzzle est intéressant car il est possible d’utiliser seulement 10 prisonniers pour trouver la bouteille. Vous pourriez commencer en demandant ce que le roi pourrait faire s'il avait 1000 prisonniers pour aider les élèves à comprendre le puzzle. Vous pouvez numéroter les prisonniers de 0 à 999, numéroter les bouteilles de 0 à 999 et les prisonniers boivent une goutte de la bouteille de vin avec leur numéro dessus. Après 24 heures, l'un des prisonniers mourra, et son numéro est le numéro de la bouteille.

Ensuite, commencez à réfléchir à des idées pour le faire avec moins de prisonniers.

La réponse à ce casse-tête est d'utiliser des nombres binaires, donc ce problème est approprié aux étudiants qui ont déjà vu des nombres binaires. Ce problème pourrait être fait en même temps que le puzzle Magic Cards et la multiplication russe, puis les nombres binaires discutés à la fin.


## Solution

Tout d’abord, alignons nos 10 prisonniers et étiquetons-les.

![](https://github.com/supportingami/sami-maths-club/blob/master/maths-club-pack/images/poisoned-wine-puzzle-2.png?raw=true)

Étiquetez également les bouteilles de vin de 0 à 999 pour que nous puissions les distinguer.

![](https://github.com/supportingami/sami-maths-club/blob/master/maths-club-pack/images/poisoned-wine-puzzle-3.png?raw=true)  
Maintenant, chaque bouteille sert de code décrivant quels prisonniers doivent en boire. Dans ce système, un ** un signifie que le prisonnier en boit **, un ** zéro signifie que le prisonnier n'en boit pas. **

Par exemple, la bouteille 1 ne doit être bue que par le prisonnier J puisque son binaire est 0000000001. Alors que, Prisonniers I et G devraient boire de la bouteille dix dont le binaire est 0000001010 parce qu’il a des 1s dans les colonnes qui correspondent aux prisonniers I et G.

Continuez ce processus jusqu’à ce que vous ayez donné des gorgées de vin de chaque bouteille. Après 24 heures, alignez les prisonniers dans l’ordre et notez ceux qui ont été empoisonnés avec des uns et marquer le reste avec des zéros. Convertissez ce nombre en décimales pour révéler quelle bouteille a été empoisonnée. Si les prisonniers A, B, C, F et I meurent, dans quelle bouteille se trouvait-il?  (914)

## Extension

S'il y avait 2000 bouteilles, combien de prisonniers auriez-vous besoin?
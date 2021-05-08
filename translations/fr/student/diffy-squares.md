# Les Carrés de Diffy

La façon de construire un carré de Diffy est la suivante:

1. Dessinez un carré et choisissez quatre nombres à placer sur chaque sommet.

2. Le long de chaque arête, écrivez la différence positive entre les nombres des sommets reliés par l'arête. Reliez ces quatre nombres afin de dessiner un nouveau carré.

3. Maintenant répétez la deuxième étape ci-dessus avec le nouveau carré. C'est-à-dire, trouvez la différence positive entre chaque paire de nombres qui partage une arête, écrivez cette différence à mi-chemin de l'arête, et reliez les nouveaux nombres.

4. A un certain moment, vous aurez un carré avec quatre zéros sur les arêtes. À ce stade, vous devez arrêter.

5. Voilà, c'est tout. Comptez à présent le nombre de carrés que vous avez dessiné, sans compter le plus grand carré à l'extérieur. Ce nombre de carrés est la *longueur* de la suite des carrés.

Voici un exemple, commençant avec 7, 15, 9, et 13:

<img src="https://github.com/supportingami/sami-maths-club/blob/master/maths-club-pack/images/diffy-squares-1.png?raw=true" width="250" />

Nous avons dessiné deux carrés plus petits, donc cette séquence a la longueur 2.

Essayez de suivre ce processus avec des nombres de départ différents.

Quelle est la suite de carrés la plus longue que vous pouvez trouver?


Astuce : Pour les suites plus longues, il peut être plus facile d'écrire vos suites comme une colonne de nombres, où chaque ligne représente un carré.

Pour notre exemple de longueur 2, nous aurions pu écrire:

<img src="https://github.com/supportingami/sami-maths-club/blob/master/maths-club-pack/images/diffy-squares-2.png?raw=true" width="200" />

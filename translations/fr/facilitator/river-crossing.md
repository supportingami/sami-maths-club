# Traverser la rivière

## Introduction

Les énigmes de la traversée des rivières sont difficiles parce qu’elles obligent les élèves à réfléchir d'une façon logique sur l’ordre de mouvement et les règles sur les berges de la rivière. Le problème exige souvent les étudiants à utiliser des essais et des erreurs en jouant différents scénarios jusqu'à ce qu'ils atteignent une boucle sans fin, une impasse ou une solution acceptable.

Une façon amusante de résoudre ce problème est de travailler en groupes avec chaque personne faisant semblant d’être soit le fermier, le loup, la chèvre ou le chou. Les élèves doivent tracer une ligne sur le sol qui illustre la rivière, puis agir physiquement sur le problème en franchissant la ligne.

Il existe une approche plus rigoureuse de ce problème qui sera introduite dans l'extension.



## Solution

Toutes les solutions commenceront par déplacer la chèvre en premier. Pouvez-vous penser pourquoi c’est le cas? C'est parce que le loup mange la chèvre et la chèvre mange le chou, indiqué par les flèches rouges ci-dessous:

![](https://github.com/supportingami/sami-maths-club/blob/master/maths-club-pack/images/river-crossing-2.png?raw=true)

Nous devons briser cette chaîne. Quand on retire un des trois objets, on ne peut pas avoir des flèches entre les deux objets qui restent. De cette façon, rien ne sera mangé lorsqu'ils seront laissés seuls.

![](https://github.com/supportingami/sami-maths-club/blob/master/maths-club-pack/images/river-crossing-3.png?raw=true)

Par conséquent, le premier mouvement sera toujours de déplacer la chèvre de l'autre côté.

Il y a deux solutions possibles à cet énigme et elles sont expliquées ci-dessous :

<ins>Solution 1<Ins>

Au début, le loup, la chèvre et le chou sont tous ensemble avec avec le fermier. Comme nous l’avons vu ci-dessus, le fermier doit d’abord amener la chèvre de l’autre côté, puis il voyage seul.

![](https://github.com/supportingami/sami-maths-club/blob/master/maths-club-pack/images/river-crossing-4.png?raw=true)

Souhaitez-vous déplacer maintenant le loup ou le chou? Dans ce cas, le fermier emmènera le chou à l'autre côté .

![](https://github.com/supportingami/sami-maths-club/blob/master/maths-club-pack/images/river-crossing-5.png?raw=true)  
Mais maintenant, la chèvre et le chou sont du même côté et ne peuvent pas être laissés seuls car la chèvre mangera le chou. Donc, le fermier doit prendre soit la chèvre ou le chou avec lui. S’il choisissait de ramener le chou avec lui, le fermier se retrouverait dans une boucle sans fin de déplacement du chou. Donc, il n’a pas d’autre choix que de ramener la chèvre avec lui.

![](https://github.com/supportingami/sami-maths-club/blob/master/maths-club-pack/images/river-crossing-6.png?raw=true)

La chèvre et le loup sont maintenant du même côté de la rivière et ne peuvent pas être laissés seuls car le loup mangera la chèvre. Il est inutile de reprendre la chèvre parce que le fermier se retrouvera dans une autre boucle sans fin de déplacer la chèvre, Il doit donc prendre le loup de l'autre côté.

![](https://github.com/supportingami/sami-maths-club/blob/master/maths-club-pack/images/river-crossing-7.png?raw=true)

Le loup et le chou peuvent être laissés seuls sur le même côté de la rivière et rien ne se mangera. Ainsi, le fermier peut retourner seul pour ramasser la chèvre et retourner de l'autre côté de la rivière.

![](https://github.com/supportingami/sami-maths-club/blob/master/maths-club-pack/images/river-crossing-8.png?raw=true)


Maintenant, le fermier, le loup, la chèvre et le chou ont tous traversé avec succès la rivière sans rien manger.

Ce processus peut être écrit plus simplement :   

        (1) Déplacez la chèvre de l'autre côté  
    
    
        (2) Déplacez le chou de l'autre côté
    
        (3) Reculez la chèvre
    
        (4) Déplacez le loup de l'autre côté
    
        (5) Déplacez la chèvre de l'autre côté
<ins> Solution 2 <Ins>

Une autre méthode alternative déplace le loup au lieu du chou à l'étape (2): 

        (1) Déplacez la chèvre de l'autre côté  
    
        (2) Déplacez le loup de l'autre côté
    
        (3) Reculez la chèvre
    
        (4) Déplacez le chou de l'autre côté
    
        (5) Déplacez la chèvre de l'autre côté

## Extension

Comment pourriez-vous représenter le problème en 3D?

Pensez à l'espace où les axes sont représentés comme le loup, la chèvre et le chou, comme ceci :

![](https://github.com/supportingami/sami-maths-club/blob/master/maths-club-pack/images/river-crossing-9.png?raw=true)

Comment cela change-t-il le problème ? Les parenthèses représentent la rive de la rivière et les trois nombres à l'intérieur représentent respectivement le loup, le chou et la chèvre. Le nombre 1 signifie qu’ils sont de l’autre côté de la rive de la rivière et le 0 signifie qu'ils ne le sont pas. Par exemple:  

        •(0,0,0) c’est là que nous avons commencé, avec les trois sur le côté de départ de la rivière.  
    
        •(1,0,1) c’est là que le loup et le chou ont traversé la rivière.  
    
        •(1,1,1) est ce que nous voulons atteindre, avec les trois de l’autre côté de la rivière.




Le problème est maintenant de passer du sommet (0,0,0) du cube au sommet (1,1,1), en utilisant les bords du cube comme un mouvement du loup, de la chèvre ou du chou.

Comment feriez-vous ceci ? Astuce : pensez aux bords qui représentent un mouvement qui aboutit à quelque chose qui s'est fait mangé.

Pouvez-vous recréer les deux solutions que nous avons trouvées ci-dessus sur ce cube?


# todo-test

Réponse à un test technique demandant une todo list avec formulaire d'ajout et une fonction custom de sort des tâches.

Durée : 1h30

Il faut réaliser une mini application de TODO list. Elle doit comprendre les fonctionnalités suivantes :

-   Typage du code avec Typescript
-   Marquage des items réalisés
-   Ajout d'item via un formulaire
-   Tri de la liste pour avoir les items réalisés affichés en dernier. Attention, la fonction de tri doit être codé à la main, sans utiliser la fonction native sort() ou filter() de Javascript. Elle doit avoir le format suivant :

customSort<T = unknown>(list: T[], compareFn:() => number): T[]

compareFn est une fonction qui fonctionne sur le même principe que celle de la fonction native sort().

Le style peut être basique, ce n'est pas un test CSS (cf: exemple.png).

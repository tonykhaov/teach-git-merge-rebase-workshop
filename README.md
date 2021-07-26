# git-conflicts-merge-rebase

C'est une mise en situation d'un vrai projet git, pour t'aider à te familiariser
avec git.

La branche de `main` correspond à celle de production (qui sera déployée sur le
site principal par exemple netflix.com, facebook.com, etc.) et on est parti de
`main` pour créer nos branches `features`. 6 branches features ont été créées et
elles contiennent chacune des commits spécifiques au développement de nouvelles
fonctionnalités qu'on s'est dispatché entre devs, dans un board Jira/Trello.

- titi/feat/53/add-react-router
- tony/feat/54/install-tailwind-css
- antho/refactor/55/remove-homepage-wording
- remy/fix/60/change-h1-to-p
- titi/chore/56/add-gitignore
- kahn/feat/40/create-about-component

# Sommaire

- Exercices
  - [Exercice 1](#exercice-1)
  - [Exercice 2](#exercice-2)
  - [Exercice 3](#exercice-3)
  - [Exercice 4](#exercice-4)
  - [Exercice 5](#exercice-5)
  - [Exercice 6](#exercice-6)
- Extras
  - [Extra 1](#extra-1)
  - [Extra 2](#extra-2)
  - [Extra 3](#extra-3)
  - [Extra 4](#extra-4)
  - [Extra 5](#extra-5)
  - [Extra 6](#extra-6)
  - [Extra 7](#extra-7)
  - [Extra 8](#extra-8)
  - [Extra 9](#extra-9)
  - [Extra 10](#extra-10)
  - [Extra 11](#extra-11)
  - [Extra 12](#extra-12)
  - [Extra 13](#extra-13)

## Setup

- Cloner ce projet
- Lancer
  `git branch -r | grep -v '\->' | while read remote; do git branch --track "${remote#origin/}" "$remote"; done`
  pour récupérer toutes les branches features qui sont sur origin

- Lancer `git remote remove origin` pour unlink origin du repo Github où t'as
  récupéré le projet
- Créer un repo Github/Gitlab
- Push ce projet cloné dans ton nouveau repo Github/Gitlab
- Lancer cette commande dans le terminal `git push --all origin` (pour push
  toutes les autres branches features que t'as en local)

# Exercices

Il faut faire les exercices/étapes dans l'ordre (de 1 à 6). Ne pas hésiter à
regarder "git graph" avant/après chaque action git et avant/après avoir mergé
les PRs sur Github. Et surtout ne pas rester bloquer, rechercher en ligne c'est
pas tricher, au contraire, surtout quand tu apprends. Le plus important c'est de
comprendre ce qu'il se passe et ce que tu fais.

### Exercice 1

- Ouvrir une PR pour merger la branche `titi/chore/56/add-gitignore` dans `main`
- Aller dans l'onglet "Files changed" de la PR ouverte
- Mettre un commentaire à la ligne 2 et écrire : "Kahn: Ah oui bien pensé
  j'avais oublié ce sale fichier `.DS_Store` !"
- Cliquer sur la proposition "Squash and merge" et merger la PR
- Ouvrir git graph, faire un `git fetch`, observer le changement, checkout vers
  `main` et faire un `git pull origin main`
- Expliquer ce qu'il s'est passé

### Exercice 2

- Ouvrir une PR pour merger la branche `tony/feat/54/install-tailwind-css` dans
  `main`
- Aller dans l'onglet "Files changed" de la PR ouverte
- Mettre un commentaire à la ligne 4 en verte et écrire : "Je pense que la
  taille de police dans notre maquette correspond plutôt à `text-8xl`"
- Checkout vers la branche `tony/feat/54/install-tailwind-css` en local
- Faire le changement et push le changement
- Aller dans l'onglet "Files changed" de la PR ouverte
- Voir ce que le commentaire de la PR est devenu
- Cliquer sur la proposition "Squash and merge" et merger la PR
- Ouvrir git graph, faire un `git fetch`, observer le changement, checkout vers
  `main` et faire un `git pull origin main`
- Expliquer ce qu'il s'est passé

### Exercice 3

- Ouvrir une PR pour merger la branche
  `antho/refactor/55/remove-homepage-wording` dans `main`
- Régler le conflit depuis Github
- Cliquer sur la proposition "Squash and merge" et merger la PR
- Ouvrir git graph, dans les icônes en haut à droite, cliquer sur le nuage (git
  fetch), observer le changement, checkout vers `main` et faire un
  `git pull origin main`
- Expliquer ce qu'il s'est passé

### Exercise 4

- Ouvrir une PR pour merger la branche `titi/feat/53/add-react-router` dans
  `main`
- Checkout vers la branche `titi/feat/53/add-react-router` en local
- Régler le conflit en local (je t'expliquerai la manière pour s'y prendre)
- Push les changements
- Cliquer sur la proposition "Squash and merge" et merger la PR
- Ouvrir git graph, dans les icônes en haut à droite, cliquer sur le nuage (git
  fetch), observer le changement, checkout vers `main` et faire un
  `git pull origin main`
- Expliquer ce qu'il s'est passé

### Exercice 5

- Merger la branche `remy/fix/60/change-h1-to-p` dans `main` avec le process de
  l'ouverture d'une PR

### Exercice 6

- Merger la branche `kahn/feat/40/create-about-component` dans `main` en local

# Extras

(repartir de zéro en supprimant le projet et le recloner)

### Extra 1

- Créer une branche et développer une feature (par exemple créer un composant X
  ou installer la librairie Y ou fixer un faux bug...)
- Arriver à merger la branche feature en passant par le process d'ouvrir une PR,
  etc.

### Extra 2

- Créer une branche de sous-feature en la tirant de
  `tony/feat/54/install-tailwind-css`
- Faire un changement (installer une librairie complémentaire à tailwind,
  modifier un className, etc.)
- Ouvrir une PR, la valider et merger la nouvelle branche dans
  `tony/feat/54/install-tailwind-css`
- Ouvrir une nouvelle PR, la valider et merger la nouvelle branche dans `main`
- Expliquer ce qu'il s'est passé

### Extra 3

- Refaire tous les exercices mais cette fois ci, ouvrir les 6 PR en même temps
  et les merger seulement sur Github
- Ouvrir git graph mais ne rien toucher, juste regarder l'état du graph
- Fetch les changements en ligne
- Expliquer ce qui a changé
- Checkout sur `main`
- Faire un `git pull`
- Expliquer ce qui a changé
- Quelle est la différence entre les branches `origin/main` et `main` ?

### Extra 4

- Refaire l'extra 3 mais ne pas git fetch, checkout sur `main` et `git pull`
  directement
- Déduire la différence entre `git fetch` et `git pull`

### Extra 5

- Refaire tous les exercices mais cette fois ci, rebase avant chaque exercice
  (sauf le premier) : il faut checkout sur la branche feature en question et
  lancer `git rebase main`
- Expliquer ce qui change lorsqu'on rebase les branches features après chaque
  changement sur `main`
- (Analogie de la voiture garée + mouvements de personnes)

### Extra 6

- Refaire l'extra 5 mais cette fois ci, merge avant chaque exercice (sauf le
  premier) il faut checkout sur `main` puis lancer `git merge` + le nom de la
  branche que tu veux viser
- Décrire à quoi ressemble le graph avec les merges
- Aller sur le repo Github, choisir un de tes branches features, cliquer sur
  `X commits` et regarder tous les commits de cette branche qui a utilisé
  `git merge`
- Déduire la différence entre `git rebase` et `git merge`

### Extra 7

- Essayer de s'imaginer ce que serait une bonne PR
- Trouver la différence entre `Create a merge commit`, `Squash and merge`,
  `Rebase and merge` pour merger une PR

### Extra 8

- Refaire l'extra 3 mais cette fois ci, et à la fin, avant de git pull, sur la
  branche `main`, faire 4 commits qui modifieront à chaque fois les fichiers
  `App.js` et `packages.txt`
- Tenter un `git pull`
- Expliquer ce qu'il s'est passé

### Extra 9

- Refaire l'extra 6 mais cette fois ci, avant de git pull, lancer la commande
  `git pull --rebase=i`
- Expliquer ce qui a changé par rapport à l'extra 6

### Extra 10

- Depuis la branche `main`, amend un changement dans le dernier commit et
  comparer le nouveau le graph qui s'affiche
- Expliquer ce qui a changé

### Extra 11

- Refaire l'extra 8 et en plus,`git rebase -i main`
- En déduire ce que fait la commande `git rebase -i main`
- Quelle est la différence entre `git rebase -i HEAD~2` et `git rebase -i main`

### Extra 12

- Répliquer ce mini projet git avec 1 branche main et 4 branches features pour
  pouvoir refaire les mêmes process de PR. Tu peux le faire en partant d'un
  projet Create-React-App

### Extra 13

- Checkout vers la branche `main`
- Faire un changement à la ligne 1 de `packages.txt`
- Lancer `git commit -a --fixup e74a6181844a3c9d3235059369f853cb7336691f`
- Lancer `git rebase -i --autosquash --root` et confirmer
- Ouvrir git graph bien regarder le graph et expliquer ce qui se passe
- Tenter de rebase n'importe qu'elle branche vers `main` et expliquer ce qui se
  passe
- Annuler le rebase avec `git rebase --abort`
- Lancer `git rebase -i main`

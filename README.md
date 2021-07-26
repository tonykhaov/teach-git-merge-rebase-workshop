# git-conflicts-merge-rebase

C'est une mise en situation d'un vrai projet git.

La branche de `master` est celle de prod et on est parti de master pour créer
nos branches `features`.

Ici, 6 branches features ont été créées, avec des commits, pour développer des
fonctionnalités qu'on s'est dispatché entre devs depuis un board Jira/Trello.

- titi/feat/53/add-react-router
- tony/feat/54/install-tailwind-css
- antho/refactor/55/remove-homepage-wording
- remy/fix/60/change-h1-to-p
- titi/chore/56/add-gitignore
- kahn/feat/40/create-about-component

## Setup

- Clone ce projet
- Créer un repo Github/Gitlab
- Push ce projet clone dans ton nouveau repo Github
- Lancer cette commande dans le terminal `git push --all origin` (pour push
  toutes les autres branches de features)

Il faut faire les exercices/étapes dans l'ordre (de 1 à 6)

### Exercice 1

- Ouvrir une PR pour merger la branche `titi/feat/53/add-react-router` dans
  `master`
- Valider la PR.
- Cliquer sur la proposition "Squash and merge"
- Expliquer ce qu'il s'est passé

### Exercice 2

- Ouvrir une PR pour merger la branche `titi/chore/56/add-gitignore` dans
  `master`
- Aller dans l'onglet "Files changed" de la PR ouverte
- Mettre un commentaire à la ligne 2 et écrire : "Kan: Ah oui bien pensé j'avais
  oublié ce sale fichier `.DS_Store` !"
- Valider la PR.
- Cliquer sur la proposition "Squash and merge"
- Expliquer ce qu'il s'est passé

### Exercice 3

- Ouvrir une PR pour merger la branche `- tony/feat/54/install-tailwind-css`
  dans `master`
- Aller dans l'onglet "Files changed" de la PR ouverte
- Mettre un commentaire à la ligne 2 et écrire : "Kan: Ah oui bien pensé j'avais
  oublié ce sale fichier `.DS_Store` !"
- Valider la PR.
- Cliquer sur la proposition "Squash and merge"
- Expliquer ce qu'il s'est passé

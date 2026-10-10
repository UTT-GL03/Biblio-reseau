# Biblio-réseau
Ce projet a pour but de réaliser un site web qui permettrait de consulter l’ensemble des collections de plusieurs médiathèques autour de Troyes et d’y rechercher des documents selon le titre et le nom de l’auteur, mais également via un système d’étiquettes selon les thèmes abordés. Ce site permettrait également aux utilisateurs de vérifier la disponibilité de l’ouvrage dans leur médiathèques de quartier, de voir le moment où il sera disponible à nouveau s’il est actuellement emprunté, de le réserver, ou, s’il ne fait pas partie de la collection de cette médiathèques, de demander à ce qu’il soit apporté par une autre médiathèques jusqu’à sa médiathèques de quartier. Le site pourrait éventuellement proposer la liste des activités organisées par les différentes médiathèques, permettre aux utilisateurs de proposer des documents qu’ils souhaiteraient voir dans leur médiathèques et de suivre les demandes d’ « import » de documents venant d’autres médiathèques pour ajouter les ouvrages très demandés à la collection des médiathèques qui ne les ont pas.

## Utilité sociale
Ce projet a une utilité sociale puisqu’il facilite l’utilisation des médiathèques, un service public qui doit être accessible à tous. Cela encourage la lecture, ce qui favorise l’éducation, la culture et l’esprit critique. De plus, en poussant les utilisateurs à se rendre en médiathèque pour récupérer les documents, il leur permettrait de se déconnecter, de sortir de chez eux et d’aller dans un endroit partagé, ce qui est bénéfique pour la santé mentale. Les médiathèques sont en effet un endroit où les personnes peuvent se rencontrer, on peut y recevoir des recommandations des bibliothécaires, et de nombreuses activités collectives y sont régulièrement organisées. Ce site peut donc avoir un impact favorable sur le territoire en ravivant les lieux de communauté que sont les médiathèques.

Par ailleurs, ce site éviterait certains déplacements inutiles si le livre recherché est actuellement indisponible ou s’il ne fait pas partie de la collection de la médiathèque. Il permettrait également de minimiser les déplacements en centralisant les demandes de documents venant d’autres médiathèques : plutôt que plusieurs trajets individuels pour aller chercher chaque livre, un seul trajet serait nécessaire pour rapporter tous les livres demandés.

À une époque où l'utilisation des bibliothèques est largement en baisse, seulement 23% de la population français ayant emprunté un livre en bibliothèque en 2025 contre 29% en 2015 ([Source : Centre national du Livre](https://centrenationaldulivre.fr/sites/default/files/2025-04/Baromètre%20Les%20Français%20et%20la%20lecture%20Infographie%202025-04-08%20OK.pdf)), et où l'on passe de plus en plus de temps en ligne, cet outil permet de reconnecter la population avec les bibliothèques et le plaisir de la lecture papier.

## Effets de la numérisation
Ce projet offre une alternative plus sociale aux plateformes entièrement numériques de livres audio ou d’ebooks puisqu’il décourage l’isolement en poussant les utilisateurs à se rendre en médiathèque et ainsi à participer à la vie de leur communauté locale. Il favorise l'utilisation des ressources municipales accessibles à tous. C’est également une solution qui est plus accessible pour les seniors ou les personnes n’ayant pas un accès facile à Internet, car ce site pourrait être disponible directement à l’intérieur des médiathèques, avec si nécessaire l’aide des bibliothécaires pour accompagner son utilisation. Enfin, au niveau de l’impact environnemental, le stockage et partage d’un seul livre déjà produit, est souvent préférable au stockage en ligne d’un ebook. De plus, ces derniers peuvent demander la production de terminaux spécialisés afin de les lire. ([Source : librinova](https://www.librinova.com/blog/produire-un-ebook-est-il-plus-ecologique-quimprimer-un-livre-papier/)). 
Nous connaissons en grande partie l'impact environnemental d'un livre neuf qui est autour de 1,3kg de CO2 venant des différentes étapes de la conception ([Source : Recyclivre](https://www.recyclivre.com/blog/actualites/infographie-le-cycle-de-vie-dun-livre/)). 

## Scénario d'usage et impacts
Nous faisons l'hypothèse que les utilisateurs peuvent fréquemment rechercher plusieurs livres. Pour cette raison, nous prendrons en compte dans notre scénario la recherche de deux livres l'un à la suite de l'autre, afin d'apprécier l'effet bénéfique du cache.

Par ailleurs nous distinguerons la réservation d'un livre de la recherche simple de l'existence d'un livre.

### Scénario : Un utilisateur veut chercher un livre par mot clé
1)	Un utilisateur se rend sur la page d'accueil du site par un favori (sans moteur de recherche). Si nécessaire, il donne son consentement. 
2)	Il entre dans la barre de recherche du site le mot clé
3)	Il parcourt la liste des livres et clique sur un livre qui l'intéresse, il lit les informations 
4)	Il revient sur la page précédente
5)	Il parcourt la liste des livres et clique sur un livre qui l'intéresse, il lit les informations 

### Scénario : Un utilisateur veut chercher un livre avec son titre 
1)	Un utilisateur se rend sur la page d'accueil du site par un favori (sans moteur de recherche). Si nécessaire, il donne son consentement. 
2)	Il entre dans la barre de recherche du site le titre du livre
3)	Il parcourt la liste des livres et clique sur le livre qu’il recherche, il lit les informations 
4)	Il entre dans la barre de recherche du site le titre d’un autre livre
5)	Il parcourt la liste des livres et clique sur un livre qu’il recherche, il lit les informations

## Impact de l'exécution des scénarios auprès de différents services concurrents
L'EcoIndex d'une page (de A à G) est calculé (sources : [EcoIndex](https://www.ecoindex.fr/comment-ca-marche/), [Octo](https://blog.octo.com/sous-le-capot-de-la-mesure-ecoindex), [GreenIT](https://github.com/cnumr/GreenIT-Analysis/blob/acc0334c712ba68939466c42af1514b5f448e19f/script/ecoIndex.js#L19-L44)) en fonction du positionnement de cette page parmi les pages mondiales concernant :
- le nombre de requêtes lancées,
- le poids des téléchargements,
- le nombre d'éléments du document.

Nous avons choisi de comparer l'impact des scénarios sur les services de plusieurs médiathèques et réseaux de médiathèques : [médiathèques du Val d'Yerres-Val de Seine](https://bibliotheques.vyvs.fr/accueil), [bibliothèques de Paris](https://bibliotheques.paris.fr/services-et-infos-pratiques.aspx), [bibliothèque universitaire de Reims](https://reimsscd.ent.sirsidynix.net.uk/client/fr_FR/default/?), [médiathèque Jacques Chirac](https://portail.mediatheque-jacques-chirac.fr/iguana/www.main.cls).

| Service                             | Score (sur 100) | Classe |  Détails des mesures  |
| :---------------------------------- | --------------: | :----: | :-------------------: |
| Val d'Yerres - Val de Seine         |     25.8/100    |  🟥 E  |   [...](https://github.com/UTT-GL03/Biblio-reseau/blob/main/benchmark/vyvs/ecoindex-environmental-statement.md)  |
| Bibliothèques de Paris              |     15.31/100   |  🟪 F  |   [...](https://github.com/UTT-GL03/Biblio-reseau/blob/main/benchmark/bibliotheques_paris/ecoindex-environmental-statement.md)  |
| Bibliothèque universitaire de Reims |     39.70/100   |  🟥 E  |   [...](https://github.com/UTT-GL03/Biblio-reseau/blob/main/benchmark/bu_reims/ecoindex-environmental-statement.md) |
| Médiathèque Jacques Chirac          |     37.71/100   |  🟥 E  |   [...](https://github.com/UTT-GL03/Biblio-reseau/blob/main/benchmark/mediatheque_jacques_chirac/ecoindex-environmental-statement.md)  |

Tab. 1 : Mesure de l'EcoIndex moyen de services de médiathèques et réseaux de médiathèques.

Les mesures de l'impact moyen de ces services (cf. Tab.1) révèlent des classes EcoIndex très faibles (E ou F).

Dans le détail, les pages les plus mal classées sont les pages de recherche, qui incluent beaucoup d’éléments différents.

## Modèle économique

| Nom de la bibliothèque              | Qui finance ?                                    | Montant des financements                    |  Financement externe/ par projet                          |    Source                                                                                                         |
| :----------------------------------:| :-----------------------------------------------------: | :-----------------------------------------: | :-------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------: |
| Val d'Yerres - Val de seine         | Communauté d'agglomération Val d'Yerres - Val de Seine  | 500 000 euros en 2025                       | Etat via DRAC/ Région Ile-de-France/ Département de l'Essone                    | [rapport d'orientation budgétaire 2025](https://www.vyvs.fr/wp-content/uploads/2025/01/ROB-2025.pdf)                   |
| Bibliothèque de Paris               | Ville de Paris                                          | 4,4 millions sur l’ensemle des bibliothèques en 2025, dont 2,6 pour le soutien aux bibliothèques et à la lecture              | DRAC Ile-de-France/ Dotation générale de décentralisation (Etat)/ Région Ile de France | [Projet budget 2025](https://cdn.paris.fr/paris/2024/12/20/bp-2025-rapport-projet-budget_2-2J4H.pdf).                              |
| Bibliothèque universitaire de Reims |     Université de Reims Champagne-Ardenne (URCA)      |  6 millions d’euros en 2025 sur l'ensemble des bibliothèques, dont 25 000 euros d'investissement | Etat/ Région Grand-Est/ UE/ Inscription                                            | [Tableau dépenses](https://www.univ-reims.fr/media-files/73254/tr-cf-2025-univ.pdf)                                                          |
| Médiathèque Jacques Chirac          | Troyes Champagne Métropole                              | 5 millions d'euros en 2025, dont 300000 pour l’investissement dans les services transverses, dont informatique                      | Dotation générale de décentralisation (Etat)/ DRAC Grand-Est/ région           | [Rapport de synthèse](https://troyes-champagne-metropole.fr/wp-content/uploads/2025/05/BP-2025-Rapport-de-synthese.pdf)|

Tab. 2 : Sources de financement des médiathèques et réseaux de médiathèques

Dans notre cas, notre proposition utiliserait certainement les subventions offerte par l'état, la région ou le département qui sont principalement données dans le cadre de projet ponctuel. 

Les aides de l’État sont en baisses dernièrement, et les médiathèques ne sont pas la priorité des municipalités. Cependant, nous proposons un service qui viendrait possiblement remplacer les sites individuels de chaque médiathèque. Cela serait moins cher car le coût serait réparti entre les bibliothèques. Nous pensons utiliser des échelons de financement pour les différentes municipalités dont la médiathèque participerait à notre site. Le financement dépendrait de la taille de la ville (nombre d’habitants) et de son nombre de médiathèques.

Pour calculer ces échelons, nous nous sommes basés sur les [bibliothèques de l’agglomération troyenne](https://troyes-champagne-metropole.fr/se-divertir/culture/les-mediatheques/). Dans cette agglomération, 5 villes sont en dessous de 5000 habitants, 2 sont entre 5000 et 10000, 2 entre 10000 et 15000 et 1 seule ville a plus de 15000 habitants : Troyes. Cette ville est aussi la seule a avoir plus d’une médiathèque. Pour vérifier que notre système était viable même dans 

_3507€ : salaire médian au coût total employeur._
_on cherche quel financement demnder pour payer 1 personne au salaire médian_

| Nombre d’habitants | Financement par mois | Financement par an | Agglomération troyenne (par mois) | Val d’Yerres/Val de Sein (par mois) | Nombre nécessaire pour un salaire médian |
| - | - | - | - | - | - |
| Nombre d’habitants | Financement par mois | Financement par an | Agglomération troyenne (par mois) | Val d’Yerres/Val de Sein (par mois) | Nombre nécessaire pour un salaire médian |
| - | - | - | - | - | - |
| Pomme | Pomme | Pomme | Pomme | Pomme | Pomme | 
| Pomme | Pomme | Pomme | Pomme | Pomme | Pomme |
| - | - | - | - | - | - |
<table>
  <tr>
    <th colspan="2">Merged Column Header</th>
    <th>Normal Column</th>
  </tr>
  <tr>
    <th>Col 1</th>
    <th>Col 2</th>
    <th>Normal Column</th>
  </tr>
  <tr>
    <td>Data A</td>
    <td>Data 1</td>
    <td>Data 2</td>
  </tr>
  <tr>
    <td>Data 3</td>
    <td>Data B</td>
    <td>Data 4</td>
  </tr>
</table>
Tab. 3 : Échelons de financement des municipalités selon le nombre d’habitants et le nombre de médoathèques.

Cependant, dans notre exemple de l’agglomération troyenne, le réseau de médiathèques est géré par la communauté d’agglomération. Le projet pourrait donc être financé entièrement grâce au budget alloué à ce réseau par le conseil communautaire.

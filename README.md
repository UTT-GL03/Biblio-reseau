# Biblio-réseau
Ce projet a pour but de réaliser un site web qui permettrait de consulter l’ensemble des collections de plusieurs médiathèques autour de Troyes et d’y rechercher des documents selon le titre et le nom de l’auteur, mais également via un système d’étiquettes selon les thèmes abordés. Ce site permettrait également aux utilisateurs de vérifier la disponibilité de l’ouvrage dans leur médiathèque de quartier, de voir le moment où il sera disponible à nouveau s’il est actuellement emprunté, de le réserver, ou, s’il ne fait pas partie de la collection de cette médiathèque, de demander à ce qu’il soit apporté par une autre médiathèque jusqu’à sa médiathèques de quartier. Le site pourrait éventuellement proposer la liste des activités organisées par les différentes médiathèques, permettre aux utilisateurs de proposer des documents qu’ils souhaiteraient voir dans leur médiathèques et de suivre les demandes d’ « import » de documents venant d’autres médiathèques pour ajouter les ouvrages très demandés à la collection des médiathèques qui ne les ont pas.

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
| Val d'Yerres - Val de seine         | Communauté d'agglomération Val d'Yerres - Val de Seine  | 500 000 euros en 2025                       | Etat via DRAC/ Région Ile-de-France/ Département de l'Essone                    | [Rapport d'orientation budgétaire 2025](https://www.vyvs.fr/wp-content/uploads/2025/01/ROB-2025.pdf)                   |
| Bibliothèque de Paris               | Ville de Paris                                          | 4,4 millions sur l’ensemle des bibliothèques en 2025, dont 2,6 pour le soutien aux bibliothèques et à la lecture              | DRAC Ile-de-France/ Dotation générale de décentralisation (Etat)/ Région Ile de France | [Projet budget 2025](https://cdn.paris.fr/paris/2024/12/20/bp-2025-rapport-projet-budget_2-2J4H.pdf).                              |
  | Bibliothèque universitaire de Reims |     Université de Reims Champagne-Ardenne (URCA)      |  6 millions d’euros en 2025 sur l'ensemble des bibliothèques, dont 25 000 d'investissement | Etat/ Région Grand-Est/ UE/ Inscription                                            | [Tableau des dépenses](https://www.univ-reims.fr/media-files/73254/tr-cf-2025-univ.pdf)                                                          |
| Médiathèque Jacques Chirac          | Troyes Champagne Métropole                              | 5 millions d'euros en 2025, dont 300 000€ pour l’investissement dans les services transverses, dont informatique                      | Dotation générale de décentralisation (Etat)/ DRAC Grand-Est/ région           | [Rapport de synthèse](https://troyes-champagne-metropole.fr/wp-content/uploads/2025/05/BP-2025-Rapport-de-synthese.pdf)|

Tab. 2 : Sources de financement des médiathèques et réseaux de médiathèques

En étudiant les sources de financement des autres médiathèques et réseaux de médiathèques (cf. Tab. 2), nous nous sommes rendu compte qu’ils sont entièrement financés par les administrations, notamment celles qui les régissent. Dans notre cas, notre proposition sera donc financée par les subventions des municipalités concernées. 

Nous proposons un service qui viendrait possiblement remplacer les sites individuels de chaque médiathèque. Cela serait moins cher car le coût serait réparti entre les bibliothèques. Nous avons donc utilisé des échelons de financement pour les différentes municipalités dont la médiathèque participe à notre site, en fonction de la taille de chaque ville (nombre d’habitants) et de son nombre de médiathèques.

Pour calculer ces échelons, nous nous sommes basés sur les [médiathèques de la vommunauté d’agglomération de Troyes Champagne Métropole](https://troyes-champagne-metropole.fr/se-divertir/culture/les-mediatheques/). Dans cette communauté d'agglomérations, 10 villes ont des médiathèques :
- 4 villes ont moins de 5 000 habitants, avec une seule médiathèque chacune.
- 2 villes ont entre 5 000 et 10 000 habitants, avec une seule médiathèque chacune.
- 3 villes ont entre 10 000 et 15 000 habitants, avec une seule médiathèque chacune.
- 1 ville a entre 60 000 et 70 000 habitants, avec 6 médiathèques.[^1]

Nous avons conçu les échelons de manière à atteindre un salaire médian[^2] pour Troyes Champagne Métropole (TCM dans le tableau). Pour vérifier que notre système était viable même dans une autre communauté d’agglomération, nous avons également vérifié le financement pour les [médiathèques du Val d’Yerres/Val de Seine]()[^3] (VYVS dans le tableau).

Les financements sont répartis de la manière suivante : 
- 50€ pour les villes en-dessous de 5 000 habitants avec une seule médiathèque.
- 150€ de plus pour chaque tranche de 5 000 habitants jusqu’à 20 000 habitants, pour les villes avec une seule médiathèque.
- 300€ de plus pour chaque tranche de 10 000 habitants à partir de 20 000 habitants, pour les villes avec une seule médiathèque.
- 25€ de plus pour chaque médiathèque supplémentaire après la première.

<table>
  <tr><th rowspan="2"> Nombre d’habitants </th><th colspan="2"> Financement par mois </th><th colspan="2"> Financement par an </th><th rowspan="2"> TCM (par mois) </th><th rowspan="2"> VYVS (par mois) </th><th colspan="3"> Nombre nécessaire pour un salaire médian </th></tr>
  <tr><th>1 médiathèque</th><th>2 médiathèques</th><th>1 médiathèque</th><th>2 médiathèques</th><th>1 médiathèque</th><th>2 médiathèques</th></tr>
  <tr><td>< 5 000</td><td style="text-align:right;">50</td><td style="text-align:right;">75</td><td style="text-align:right;">600</td><td style="text-align:right;">900</td><td style="text-align:right;">200</td><td style="text-align:right;">0</td><td style="text-align:right;">71</td><td style="text-align:right;">47</td></tr>
  <tr><td>5 000 ≤ x < 10 000</td><td style="text-align:right;">200</td><td style="text-align:right;">225</td><td style="text-align:right;">2400</td><td style="text-align:right;">2700</td><td style="text-align:right;">400</td><td style="text-align:right;">625</td><td style="text-align:right;">18</td><td style="text-align:right;">16</td></tr>
  <tr><td>10 000 ≤ x < 15 000</td><td style="text-align:right;">350</td><td style="text-align:right;">375</td><td style="text-align:right;">4200</td><td style="text-align:right;">4500</td><td style="text-align:right;">1050</td><td style="text-align:right;">350</td><td style="text-align:right;">11</td><td style="text-align:right;">10</td></tr>
  <tr><td>15 000 ≤ x < 20 000</td><td style="text-align:right;">500</td><td style="text-align:right;">525</td><td style="text-align:right;">6000</td><td style="text-align:right;">6300</td><td style="text-align:right;">0</td><td style="text-align:right;">0</td><td style="text-align:right;">8</td><td style="text-align:right;">7</td></tr>
  <tr><td>20 000 ≤ x < 30 000</td><td style="text-align:right;">800</td><td style="text-align:right;">825</td><td style="text-align:right;">9600</td><td style="text-align:right;">9900</td><td style="text-align:right;">0</td><td style="text-align:right;">2425</td><td style="text-align:right;">5</td><td style="text-align:right;">5</td></tr>
  <tr><td>30 000 ≤ x < 40 000</td><td style="text-align:right;">1100</td><td style="text-align:right;">1125</td><td style="text-align:right;">13200</td><td style="text-align:right;">13500</td><td style="text-align:right;">0</td><td style="text-align:right;">3300</td><td style="text-align:right;">4</td><td style="text-align:right;">4</td></tr>
  <tr><td>40 000 ≤ x < 50 000</td><td style="text-align:right;">1400</td><td style="text-align:right;">1425</td><td style="text-align:right;">16800</td><td style="text-align:right;">17100</td><td style="text-align:right;">0</td><td style="text-align:right;">0</td><td style="text-align:right;">3</td><td style="text-align:right;">3</td></tr>
  <tr><td>50 000 ≤ x < 60 000</td><td style="text-align:right;">1700</td><td style="text-align:right;">1725</td><td style="text-align:right;">20400</td><td style="text-align:right;">20700</td><td style="text-align:right;">0</td><td style="text-align:right;">0</td><td style="text-align:right;">3</td><td style="text-align:right;">3</td></tr>
  <tr><td>60 000 ≤ x < 70 000</td><td style="text-align:right;">2000</td><td style="text-align:right;">2025</td><td style="text-align:right;">24000</td><td style="text-align:right;">24300</td><td style="text-align:right;">2125</td><td style="text-align:right;">0</td><td style="text-align:right;">2</td><td style="text-align:right;">2</td></tr>
  <tr><td>70 000 ≤ x < 80 000</td><td style="text-align:right;">2300</td><td style="text-align:right;">2325</td><td style="text-align:right;">27600</td><td style="text-align:right;">27900</td><td style="text-align:right;">0</td><td style="text-align:right;">0</td><td style="text-align:right;">2</td><td style="text-align:right;">2</td></tr>
  <tr><td>80 000 ≤ x < 90 000</td><td style="text-align:right;">2600</td><td style="text-align:right;">2625</td><td style="text-align:right;">31200</td><td style="text-align:right;">31500</td><td style="text-align:right;">0</td><td style="text-align:right;">0</td><td style="text-align:right;">2</td><td style="text-align:right;">2</td></tr>
 <tr><td>90 000 ≤ x < 100 000</td><td style="text-align:right;">2900</td><td style="text-align:right;">2925</td><td style="text-align:right;">34800</td><td style="text-align:right;">35100</td><td style="text-align:right;">0</td><td style="text-align:right;">0</td><td style="text-align:right;">2</td><td style="text-align:right;">2</td></tr>
 <tr><th>Total</th><th></th><th></th><th></th><th></th><th style="text-align:right;">3775</th><th style="text-align:right;">6700</th><th></th><th></th></tr>
</table>

Tab. 3 : Échelons de financement des municipalités selon le nombre d’habitants et le nombre de médiathèques

Dans notre exemple de Troyes Champagne Métropole, le réseau de médiathèques est géré par la communauté d’agglomération. Le projet pourrait donc être financé entièrement grâce au budget alloué à ce réseau par le conseil communautaire.

## Maquette de l'interface et échantillon de données

Au vu des différents services comparés et des scénarios retenus, nous allons définir pour notre prototype une maquette de l'interface et un échantillon de données réalistes.

Conformément aux standards du Web, les "écrans" de notre application sont la représentation en HTML des types de ressources de notre domaine :

- Le panneau d'affichage (avec une HTTP-URI ayant pour chemin `/`), qui contient un aperçu des coups de cœur, des nouveautés et des évènements à venir.
- La liste des documents correspondant à une recherche (avec pour chemin `/?search={text}` ou `/?search={text}+type={type}`).
- Un document (avec pour chemin `/document={id}`).
- Éventuellement la liste des événènements (avec pour chemin `/evenements`) et un événement (avec pour chemin `/evenement={id}`)

Nous avons choisi d’utiliser le terme « document » plutôt que « livre » car les médiathèques, par opposition aux bibliothèques, proposent plusieurs types de documents en plus des livres.

Fig.1: Maquette de l'interface du prototype : a. type de page pour les "titres" (du jour ou d'une rubrique), b. type de page d'un article.

Dans un objectif de sobriété environnementale, les articles sont pour l'instant limités à ceux du jour et de la veille (soit 20 à 30 articles).

Pour des raisons de respect des droits d'auteurs, nous utilisons des données générées (avec `dummy-json`). Bien que fictives, ces données correspondent à la structure des services concurrents : les articles comportent un titre possiblement long, un auteur et une rubrique (voir [modèle de données](source)).





[^1]: Selon les chiffres de population de 2023 (source : [INSEE](https://www.insee.fr/fr/statistiques/1405599?geo=COM-10387+COM-10060+COM-10321+COM-10081+COM-10297+COM-10340+COM-10362+COM-10067+COM-10333+COM-10343+COM-10357))
[^2]: Basé sur le coût total employeur du salaire médian 2026 soit 3507€ environ (source : [URSSAF](https://mon-entreprise.urssaf.fr/simulateurs/salaire-brut-net))
[^3]: Selon les chiffres de population de 2023 (source : [INSEE](https://www.insee.fr/fr/statistiques/1405599?geo=COM-91691+COM-91114+COM-91201+COM-91421+COM-91191+COM-91097+COM-91215+COM-91514+COM-91657))

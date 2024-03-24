# Site Memeth vente de faut produit de marque.

Ce site a été crée pour un entrainement scolaire, le but étant d’apprendre à utiliser JavaScript et certain de ces module (Express, ejs…)

Ce site est actuellement capable de lire en local une base de données et rien de plus.
Il possède 2 pages.

## Installation 

Pour exécuter ce projet localement vous devrez suivre ces étapes :

1. Clonez le dépôt : `git clone https://github.com/MtxYohann/Essaie-site-ejs.git`
2. Installez les dépendances : `npm install`
3. Configurez votre base de données MySQL2 et configurez la connexion dans le projet.
4. Lancez le serveur : `npm start`
5. Accédez à l'application via votre navigateur web à `http://localhost:3000/product-list`.

Il faut aussi importer la base de données, le dump est dans le fichier BDD_SQL ("test.sql")
Il faut l'importer sur PhphMyadmin par exemple.

## Fonctionnalités

### CRUD

On peut pour le moment voir les produits déjà mis sur la base de données et en créer malheureusement sans les images pour le moment. Un bouton est disponible pour supprimer un produit avec une confirmation,si il y n'y a plus aucun produit un message sera écrit sur la page web.

### différentes pages 

http://localhost:3000/product-list

http://localhost:3000/product-list/create
import product from "../models/products.js"
import connection from "../config/database.js"

export const productController = (req,res,next) =>{
    product.fetchAll()
    .then(([rows, fieldData]) =>{
        res.render("product-list", {
            pageTitle: "Nos produits",
            path: "/",
            products: rows,
        })
    })
   
}
    // Display the form for creating a new pizza
export const getCreateProductForm = (req, res) => {
        res.render("create-product",{
            pageTitle: "Création produit",
            path: "/create",
            
        })
    }

// Création d'un nouveau produit
export const createProduct = async (req, res) => {
    try {
        const { name, price, description } = req.body;
        
        if (!name || !price || !description) {
            throw new Error('Toutes les valeurs sont requises.');
        }
        // Exécutez une requête SQL INSERT pour insérer les données dans la base de données
        await connection.execute('INSERT INTO product (name, price, description) VALUES (?, ?, ?)', [name, price, description]);

        // Redirigez l'utilisateur vers la liste des produits après l'insertion
        res.redirect("/product-list");
    } catch (error) {
        // Gérez les erreurs s'il y en a
        res.status(500).send(error.message);
    }
};

// Supprimer un produit
export const deleteProductById = async (req, res) => {
    try {
        const productId = req.params.id;

        const isDeleted = await product.delete(productId);

        if (isDeleted) {
            res.status(200).send(`Le produit avec l'identifiant ${productId} a été supprimé.`);
        } else {
            res.status(404).send(`Aucun produit trouvé avec l'identifiant ${productId}.`);
        }
    } catch (error) {
        console.error('Erreur lors de la suppression du produit:', error);
        res.status(500).send('Une erreur est survenue lors de la suppression du produit.');
    }
};

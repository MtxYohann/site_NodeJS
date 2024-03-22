import express from "express";
import { productController ,createProduct,getCreateProductForm,deleteProductById} from "../controllers/product.js";


const router = express.Router();

// Route pour afficher tous les produits
router.get("/",productController);

// Route pour créer un produit
router.get("/create",getCreateProductForm);
router.post("/create",createProduct);

// // Route pour supprimer un produit
router.delete('/products/:id', deleteProductById);

export default router;

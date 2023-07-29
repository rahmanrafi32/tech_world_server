import express, { Router } from 'express';
import { productsController } from './products.controller';

const router: Router = express.Router();
router.get('/product-details/:id', productsController.getProductsById);
router.get('/', productsController.getAllProducts);
router.get('/categories/:category', productsController.getProductsByCategory);
export const productRoutes = router;

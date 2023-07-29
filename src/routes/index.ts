import express, { Router } from 'express';
import { routesMap } from '../interfaces/routesMap';
import { productRoutes } from '../app/modules/products/products.routes';

const router: Router = express.Router();

const moduleRoutes: routesMap[] = [
  {
    path: '/products',
    route: productRoutes,
  },
];

moduleRoutes.forEach((route: routesMap): void => {
  router.use(route.path, route.route);
});

export default router;

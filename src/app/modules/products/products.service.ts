import getRandomProducts from '../../../helper/getRandomProducts';
import ProductsModel from './products.model';

const getAllProducts = () => {
  return getRandomProducts(6);
};

const getProductByCategory = async (category: string) => {
  return ProductsModel.find({ category });
};

const getProductById = async (_id: string) => {
  return ProductsModel.findById({ _id });
};
export const productsService = {
  getAllProducts,
  getProductByCategory,
  getProductById,
};

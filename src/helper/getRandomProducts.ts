import ProductsModel from '../app/modules/products/products.model';
import ApiError from '../app/errorHandlers/ApiError';
import httpStatus from 'http-status';

const getRandomProducts = async (count: number) => {
  try {
    return await ProductsModel.aggregate([{ $sample: { size: count } }]);
  } catch (err) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      'Internal Server Error'
    );
  }
};

export default getRandomProducts;

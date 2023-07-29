import asyncTryCatch from '../../shared/asyncTryCatch';
import customResponse from '../../shared/customResponse';
import httpStatus from 'http-status';
import { Request, Response } from 'express';
import { productsService } from './products.service';

const getAllProducts = asyncTryCatch(
  async (req: Request, res: Response): Promise<void> => {
    const result = await productsService.getAllProducts();
    customResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      data: result,
    });
  }
);

const getProductsByCategory = asyncTryCatch(
  async (req: Request, res: Response): Promise<void> => {
    const result = await productsService.getProductByCategory(
      req.params.category
    );
    customResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      data: result,
    });
  }
);

const getProductsById = asyncTryCatch(
  async (req: Request, res: Response): Promise<void> => {
    const result = await productsService.getProductById(req.params.id);
    customResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      data: result,
    });
  }
);
export const productsController = {
  getAllProducts,
  getProductsByCategory,
  getProductsById,
};

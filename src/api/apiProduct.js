import axiosInstance from './apiHelper';

export const getProducts = () => {
  return axiosInstance.get(`/products?limit=0&skip=42`);
};

export const getProductByID = (productID) => {
    return axiosInstance.get(`/products/${productID}`);
  };
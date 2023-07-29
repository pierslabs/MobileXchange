import { calculatePricePlusPercent } from '../../utils/price.utils';

const useProductDetail = ({ product }) => {
  function getRandomNumber() {
    const min = 50;
    const max = 300;
    const randomNumber = Math.random() * (max - min) + min;
    return Math.round(randomNumber);
  }

  const randomReviews = getRandomNumber();

  const transformProduct = {
    Brand: product.brand,
    Model: product.model,
    Price: parseInt(product.price),
    CPU: product.cpu,
    RAM: product.ram,
    ['O.S.']: product.os,
    ['Display resolution']: product.displayResolution,
    Battery: product.battery,
    ['Primary camera']: product.primaryCamera,
    Dimentions: product.dimentions,
    Weight: product.weight,
  };

  const price = calculatePricePlusPercent(product.price);

  return { randomReviews, transformProduct, price };
};

export default useProductDetail;

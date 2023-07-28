const useProductDetail = ({ product }) => {
  const calculatePricePlusPercent = (price) => {
    const pricePlusPercent = price * 1.2;
    return Math.round(pricePlusPercent);
  };

  const formatPrice = (price) => {
    if (typeof price === 'string') {
      price = parseInt(price);
    }
    return price.toLocaleString('es-ES', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 2,
    });
  };

  function getRandomNumber() {
    const min = 50;
    const max = 300;
    const randomNumber = Math.random() * (max - min) + min;
    return Math.round(randomNumber);
  }

  const randomReviews = getRandomNumber();

  const transformProduct = {
    brand: product.brand,
    model: product.model,
    price: parseInt(product.price),
    cpu: product.cpu,
    ram: product.ram,
    os: product.os,
    displayResolution: product.displayResolution,
    battery: product.battery,
    primaryCamera: product.primaryCamera,
    dimentions: product.dimentions,
    weight: product.weight,
  };

  const price = calculatePricePlusPercent(product.price);
  return { formatPrice, randomReviews, transformProduct, price };
};

export default useProductDetail;

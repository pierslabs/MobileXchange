export const calculatePricePlusPercent = (price) => {
  const pricePlusPercent = price * 1.2;
  return Math.round(pricePlusPercent);
};

export const formatPrice = (price) => {
  if (typeof price === 'string') {
    price = parseInt(price);
  }
  return price.toLocaleString('es-ES', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2,
  });
};

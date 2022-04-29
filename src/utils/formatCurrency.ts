export const formatCurrency = (currency: string) => {
  return currency.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
};

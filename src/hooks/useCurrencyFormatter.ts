import { useCallback } from 'react';
import { formatCurrency } from 'utils/formatCurrency';

export const useCurrencyFormatter = () => {
  return useCallback((price: string) => {
    return formatCurrency(price);
  }, []);
};

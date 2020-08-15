const formatValue = (value: number): string => {
  /**
   * Returns a value formated as a BRL currency
   * @param value number to be converted in Currency.
   */
  return Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
};

export default formatValue;

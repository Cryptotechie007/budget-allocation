import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ExpenseTotal = () => {
  const { expenses, currency } = useContext(AppContext);

  const getCurrencySymbol = () => {
    switch (currency) {
      case 'dollar':
        return '$';
      case 'pound':
        return '£';
      case 'euro':
        return '€';
      case 'rupee':
        return '₹';
      default:
        return '';
    }
  };

  const currencySymbol = getCurrencySymbol();

  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);

  return (
    <div className='alert alert-primary'>
      <span>Spent so far: {currencySymbol}{totalExpenses}</span>
    </div>
  );
};

export default ExpenseTotal;

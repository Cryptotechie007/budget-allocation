import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Remaining = () => {
  const { expenses, budget, currency } = useContext(AppContext);
  const totalExpenses = expenses.reduce((total, item) => {
    return (total = total + item.cost);
  }, 0);

  const remainingBudget = budget - totalExpenses;

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

  const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';

  return (
    <div className={`alert ${alertType}`}>
      <span>
        Remaining: {currencySymbol} {remainingBudget}
      </span>
    </div>
  );
};

export default Remaining;

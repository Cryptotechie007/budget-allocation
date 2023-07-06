import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
  const { budget, currency, dispatch } = useContext(AppContext);
  const [editMode, setEditMode] = useState(false);
  const [newBudget, setNewBudget] = useState(budget.toString());

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = () => {
    const parsedBudget = parseInt(newBudget);
    if (isNaN(parsedBudget) || parsedBudget > 20000) {
      alert('Invalid budget value! Please enter a valid budget up to £20,000.');
      return;
    }

    if (parsedBudget < 2000) {
      alert('The entered budget is less than the initial limit of £2000.');
      return;
    }

    dispatch({
      type: 'SET_BUDGET',
      payload: parsedBudget,
    });

    setEditMode(false);
  };

  const handleCancel = () => {
    setNewBudget(budget.toString());
    setEditMode(false);
  };

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

  return (
    <div className='alert alert-secondary'>
      {!editMode ? (
        <span>
          Budget: {currencySymbol} {budget}
          <button className='btn btn-sm btn-primary' onClick={handleEdit}>
            Edit
          </button>
        </span>
      ) : (
        <span>
          <input
            type='number'
            value={newBudget}
            onChange={(e) => setNewBudget(e.target.value)}
            max={20000} // Upper limit set to 20,000
          />
          <button className='btn btn-sm btn-success' onClick={handleSave}>
            Save
          </button>
          <button className='btn btn-sm btn-danger' onClick={handleCancel}>
            Cancel
          </button>
        </span>
      )}
    </div>
  );
};

export default Budget;

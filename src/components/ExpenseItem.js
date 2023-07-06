import React, { useContext } from 'react';
import { TiDelete, TiPlus, TiMinus } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
  const { dispatch, currency } = useContext(AppContext);

  const handleDeleteExpense = () => {
    dispatch({
      type: 'DELETE_EXPENSE',
      payload: props.id,
    });
  };

  const increaseAllocation = (name) => {
    const expense = {
      name: name,
      cost: 10,
    };

    dispatch({
      type: 'ADD_EXPENSE',
      payload: expense,
    });
  };

  const decreaseAllocation = (name) => {
    const expense = {
      name: name,
      cost: 10,
    };

    dispatch({
      type: 'RED_EXPENSE',
      payload: expense,
    });
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
    <tr>
      <td>{props.name}</td>
      <td>
        {currencySymbol}
        {props.cost}
      </td>
      <td>
        <button onClick={() => increaseAllocation(props.name)}>
          <TiPlus size='1.5em' />
        </button>
      </td>
      <td>
        <button onClick={() => decreaseAllocation(props.name)}>
          <TiMinus size='1.5em' />
        </button>
      </td>
      <td>
        <TiDelete size='1.5em' onClick={handleDeleteExpense} />
      </td>
    </tr>
  );
};

export default ExpenseItem;

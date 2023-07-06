import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
  const { currency, dispatch } = useContext(AppContext);

  const handleCurrencyChange = (e) => {
    const selectedCurrency = e.target.value;
    dispatch({ type: 'CHG_CURRENCY', payload: selectedCurrency });
  };

  return (
    <div className="alert alert-success">
      <label className="font-weight-bold">Currency:</label>
      <select className="form-control" value={currency} onChange={handleCurrencyChange}>
        <option value="dollar">$ Dollar</option>
        <option value="pound">£ Pound</option>
        <option value="euro">€ Euro</option>
        <option value="rupee">₹ Ruppee</option>
      </select>
    </div>
  );
};

export default Currency;

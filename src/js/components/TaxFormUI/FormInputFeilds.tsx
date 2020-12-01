import React, { useState } from 'react';
import './taxForm.css';

interface CurrencyInput {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  id: string;
  labelText: string;
  testid: string;
}

export function InputIncomeFeild({ value, handleChange, placeholder, id, labelText, testid }: CurrencyInput) {
  return (
    <div className="container">
      <label className="margin-horizontal-20">{labelText}</label>
      <div className="currencystyle">
        <span>₹</span>
        <input
          id={id}
          data-testid={testid}
          className="input-currency"
          type="number"
          value={value}
          placeholder={placeholder}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
InputIncomeFeild;

interface InputFeild {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  labelText: string;
  id: string;
  testid: string;
}

export function InputFeild({ value, handleChange, placeholder, labelText, id, testid }: InputFeild) {
  return (
    <div className="container">
      <label className="margin-horizontal-20">{labelText}</label>
      <input
        data-testid={testid}
        className="inputFeild"
        id={id}
        type="number"
        value={value}
        placeholder="Enter your Income"
        onChange={handleChange}
      />
    </div>
  );
}

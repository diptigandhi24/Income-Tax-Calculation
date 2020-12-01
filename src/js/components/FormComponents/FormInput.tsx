import React from 'react';
// import './form.css';

interface InputFeild {
  type: string;
  placeholder: string;
  labelText: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TextFeild: React.FC<InputFeild> = ({
  type,
  placeholder,
  value,
  labelText,
  onChange
}): JSX.Element => {
  return (
    <div className="margin-TB">
      <label>{labelText}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

interface Button {
  type: 'button' | 'submit' | 'reset';
  onClick: () => void;
  content: string;
}

export const Button: React.FC<Button> = ({
  type,
  onClick,
  content
}): JSX.Element => {
  return (
    <div>
      <button type={type} onClick={onClick}>
        {content}
      </button>
    </div>
  );
};

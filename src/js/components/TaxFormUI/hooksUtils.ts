import React, { useState } from 'react';
import { setFlagsFromString } from 'v8';

export function useFormFeild<T>(initialValue: T) {
  const [formFields, setFormFields] = useState<T>(initialValue);
  const createChangeHandler = (key: keyof T, value: string) => {
    setFormFields((prev: T) => ({ ...prev, [key]: value }));
  };
  return { formFields, createChangeHandler };
}

// export function useFormFeild<T>(initialValue: T) {
//   const [formFields, setFormFields] = useState<T>(initialValue);
//   const createChangeHandler = (key: keyof T) => (e: React.ChangeEvent<HTMLInputElement>) => {
//     const value = e.target.value;
//     setFormFields((prev: T) => ({ ...prev, [key]: value }));
//   };
//   return { formFields, createChangeHandler };
// }

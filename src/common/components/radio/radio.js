import React from 'react';

export default function Radio({label, value, name, checked, onChange}){
  return(
    <label>
      <input type='radio' value={value} name={name} checked={checked}
           onChange={onChange}>
      </input>
      {label}
    </label>
)};

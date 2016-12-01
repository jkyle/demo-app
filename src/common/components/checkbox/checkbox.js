import React from 'react';
import { inputLabel, checkbox } from './checkbox.styl';

export default function Checkbox({label, value, name, checked, onChange}){
  return(
    <label className={ inputLabel }>
      <input type='checkbox' value={value} name={name} checked={checked}
             className={checkbox}
             onChange={onChange}>
      </input>
      {label}
    </label>
)};

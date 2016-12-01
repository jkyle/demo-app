import React from 'react';

export default function LabeledInput({label, children}) {
  return (
    <label>
      <span>{label}</span>
      { children }
    </label>
  )
}

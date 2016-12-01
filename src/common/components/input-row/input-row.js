import React from 'react';
import { row, label, main } from './input-row.styl';

export default function LabeledInput({rowLabel, children}) {
  return (
    <div className={row}>
      <div className={label}>{rowLabel}</div>
      <div className={main}>{ children }</div>
    </div>
  )
}

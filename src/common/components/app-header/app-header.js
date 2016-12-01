import React from 'react';
import { header } from './app-header.styl';

export default function AppHeader({appName}){
  return (
    <h1 className={header}>{ appName }</h1>
  )
}

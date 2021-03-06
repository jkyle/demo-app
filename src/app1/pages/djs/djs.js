import React from 'react';
import { container, list, main } from './djs.styl';
import { DJList, EditDJ } from './components';

export default function({ selectedDj, djs, genres, selectDj, updateDj, saveDj }) {
  return(
    <div className={container}>
      <section className={list}>
        <DJList djs={djs} selectedDj={selectedDj || {}} genres={genres} onClick={dj => selectDj(dj)}></DJList>
      </section>
      <section className={main}>
        { selectedDj ?
              <EditDJ dj={selectedDj} originalDj={djs.find(dj => dj.id === selectedDj.id)} updateDj={updateDj} saveDj={saveDj} genres={genres}></EditDJ> 
            : "No dj selected."
        }
      </section>
    </div>
  )
}

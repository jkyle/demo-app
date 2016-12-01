import React from 'react';
import { availability, list, item, name, currentDj, genreContainer, genreItem } from './dj-list.styl';


function DJItem({ dj, selected, genres, onClick }){
  const djGenres = genres.filter(genre => dj.genres.includes(genre.id));
  const className = item + (selected ? ' ' + currentDj : '');
  return (
    <li className={className} onClick={() => onClick(dj)}>
      <div className={name}>{ dj.name }</div>
      <div className={genreContainer}>{ djGenres.map(genre =>
          <div className={genreItem} key={genre.id}>{ genre.title }</div  >
        ) }
      </div>
      <div className={availability}>{ dj.available ? 'Available' : 'Unavailable' }</div>
    </li>
  );
}

export default function DJList({ djs, selectedDj, genres, onClick }){
  return (
    <ul>
      { djs.map(dj => <DJItem key={dj.id} selected={selectedDj.id === dj.id} dj={dj} genres={genres} onClick={onClick}></DJItem>) }
    </ul>
  )
};

import React from 'react';
import { container } from './edit-dj.styl';
import { InputRow, Radio } from '@common/components';

const EditDJ = ({ dj, updateDj, saveDj, genres }) => {
  function changeGenres(event) {
    const value = parseInt(event.target.value);
    const idx = dj.genres.indexOf(value);
    const newGenres = idx < 0 ? [...dj.genres, value] : dj.genres.filter(id => id !== value);
    updateDj('genres', newGenres);
  }

  return (
    <section className={container}>
      <InputRow rowLabel='Name'>
        <input type='text' value={dj.name} onChange={(event) => updateDj('name', event.target.value)}></input>
      </InputRow>
      <InputRow rowLabel='Available'>
        <Radio label='Yes' value={true} name='available' checked={dj.available}
             onChange={(event) => updateDj('available', JSON.parse(event.target.value))}>
        </Radio>

        <Radio label='No' value={false} name='available' checked={!dj.available}
               onChange={(event) => updateDj('available', JSON.parse(event.target.value))}>
        </Radio>
      </InputRow>
      <InputRow rowLabel='Genre'>
        { genres.map(genre => <span key={genre.id}><input type='checkbox' value={genre.id} checked={dj.genres.includes(genre.id)} onChange={changeGenres}></input>{genre.title}</span> )}
      </InputRow>
      <InputRow>
        <button onClick={() => saveDj(dj.id, dj)}>Save</button>
      </InputRow>
    </section>
  );
}
export default EditDJ;

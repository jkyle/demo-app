import React from 'react';
import { container, button } from './edit-dj.styl';
import { InputRow, Radio, Checkbox } from '@common/components';
import isEqual from 'lodash/isEqual';

const DJAvailablilty = ['Yes', 'No', 'Maybe'];



const EditDJ = ({ dj, originalDj, updateDj, saveDj, genres }) => {
  function changeGenres(event) {
    const value = parseInt(event.target.value);
    const idx = dj.genres.indexOf(value);
    const newGenres = idx < 0 ? [...dj.genres, value] : dj.genres.filter(id => id !== value);
    updateDj('genres', newGenres);
  }

  const clean = isEqual(dj, originalDj);

  return (
    <section className={container}>
      <InputRow rowLabel='Name'>
        <input type='text' value={dj.name} onChange={(event) => updateDj('name', event.target.value)}></input>
      </InputRow>
      <InputRow rowLabel='Available'>
        {
          DJAvailablilty.map((availability, idx) => (
            <Radio key={idx} label={availability} value={availability} name='available' checked={dj.available === availability}
                 onChange={() => updateDj('available', availability)}>
            </Radio>
          ))
        }
      </InputRow>
      <InputRow rowLabel='Genre'>
        { genres.map(genre =>
          <Checkbox label={genre.title} key={genre.id} value={genre.id} checked={dj.genres.includes(genre.id)} onChange={changeGenres}></Checkbox>
        )}
      </InputRow>
      <InputRow>
        <button className={button} disabled={clean} onClick={() => saveDj(dj.id, dj)}>Save</button>
      </InputRow>
    </section>
  );
}
export default EditDJ;

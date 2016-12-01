import React from 'react';
import { connect } from 'react-redux';

import DJPage from './pages/djs/djs';

function mapStateToProps(state){
  return {
    selectedDj: state.djPage.selectedDj,
    djs: state.djs,
    genres: state.genres
  }
}

function mapDispatchToProps(dispatch){
  return {
    selectDj: (dj) => dispatch({ type: 'SELECT_DJ', dj }),
    updateDj: (field, value) => dispatch({ type: 'UPDATE_SELECTED_DJ', field, value }),
    saveDj: (id, dj) => dispatch({ type: 'UPDATE_DJ', id, dj })
  };
}

const App = (props) => (
  <DJPage { ...props }></DJPage>
);

export default connect(mapStateToProps, mapDispatchToProps)(App);

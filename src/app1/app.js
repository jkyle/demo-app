import React from 'react';
import { connect } from 'react-redux';

import DJPage from './pages/djs/djs';
import { AppHeader } from '@common/components';

import { selectDj, updateSelectedDJ, updateDj } from './action-creators';

function mapStateToProps(state){
  return {
    selectedDj: state.djPage.selectedDj,
    djs: state.djs,
    genres: state.genres
  }
}

function mapDispatchToProps(dispatch){
  return {
    selectDj: dj => dispatch(selectDj(dj)),
    updateDj: (field, value) => dispatch(updateSelectedDJ(field, value)),
    saveDj: (id, dj) => dispatch(updateDj(id, dj))
  };
}

const App = (props) => (
  <section>
    <AppHeader appName="DJ Cool People"></AppHeader>
    <DJPage { ...props }></DJPage>
  </section>
);

export default connect(mapStateToProps, mapDispatchToProps)(App);

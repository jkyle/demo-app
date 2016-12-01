export function selectDj(dj){
  return {
    type: 'SELECT_DJ',
    dj
  }
}

export function updateSelectedDJ(field, value) {
  return {
    type: 'UPDATE_SELECTED_DJ',
    field,
    value
  }
}

export function updateDj(id, dj){
  return {
    type: 'UPDATE_DJ',
    id,
    dj
  }
}

const initialState = {
  selectedDj: undefined,
  sort: undefined
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'SORT_DJS':
      return { ...state, sort: action.field }
    case 'SELECT_DJ':
      return { ...state, selectedDj: action.dj }
    case 'UPDATE_SELECTED_DJ':
      const dj = { ...state.selectedDj, [action.field]: action.value }
      return { ...state, selectedDj: dj }
    default:
      return state;
  }
}

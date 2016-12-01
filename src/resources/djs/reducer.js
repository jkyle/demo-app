const initialState = [
  {
    id: 1,
    name: 'Scott',
    genres: [1],
    available: 'Yes'
  },
  {
    id: 2,
    name: 'John',
    genres: [2,3],
    available: 'No'
  },
  {
    id: 3,
    name: 'Moby',
    genres: [1,3],
    available: 'Maybe'
  }
];

export default function(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_DJ':
      return state.map(dj => dj.id === action.id ? action.dj : dj);
    default:
      return state;
  }
}

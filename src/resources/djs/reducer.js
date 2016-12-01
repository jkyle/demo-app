const initialState = [
  {
    id: 1,
    name: 'Scott',
    genres: [1],
    available: true
  },
  {
    id: 2,
    name: 'John',
    genres: [2,3],
    available: false
  },
  {
    id: 3,
    name: 'Moby',
    genres: [1,3],
    available: true
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

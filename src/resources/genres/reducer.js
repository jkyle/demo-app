const initialState = [
  {
    id: 1,
    title: 'House'
  },
  {
    id: 2,
    title: 'Disco'
  },
  {
    id: 3,
    title: 'EDM'
  }
];

export default function(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

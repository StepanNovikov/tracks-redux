const mockApiData = [
  {
    id:1,
    name: 'Enter Sandman'
  },
  {
    id: 2,
    name: 'Welcome Hone'
  },
  {
    id: 3,
    name: 'Fade to Black'
  },
  {
    id: 4,
    name: 'Master of Puppets'
  }

]

export const getTracks = () => dispatch => {
      setTimeout(() => {
        console.log('I got tracks');
        dispatch({type: 'FETCH_TRACKS_SUCCESS', payload: mockApiData})
      }, 2000)
  }
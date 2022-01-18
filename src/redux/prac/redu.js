
const INITIAL_STATE = {
 val:4
};

const pracReducer = (state = INITIAL_STATE, action) => {
  console.log('3&')
 
  switch (action.type) {
    case 'INCRESE':
      return {
    ...state
    
      };
     
    default:
      return state;
  }
};

export default pracReducer;



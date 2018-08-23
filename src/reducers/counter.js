const initialState = 0;

export const counterReducer = (state = initialState, action) => {
    switch (action.type) {
      case "INCREMENT":
        return state;
  
      case "DECREMENT":
        return state;
      
      case "OBSERVABLE_COMPLETE":
        return state + action.payload;
  
      default:
        return state;
    }
  };
const initialState = 0

const numberReducer = (state: number = initialState, action: any) => {
  switch(action.type) {
    case 'INCREMENT':
      return state + action.payload
    case 'DECREMENT':
      return state - action.payload
    default:
      return state
  }
}

export default numberReducer;
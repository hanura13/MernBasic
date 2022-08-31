
const initialState = {
    name: 'Hanura'
}

const globalReducer = (state = initialState, action) => {
    if(action.type === 'UPDATE_NAME'){
        return{
            ...state,
            name: 'Hanura'
        }
    }
    return state;
}

export default globalReducer;
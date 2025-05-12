// action - increment , discrment, rest 
// reducer 
// store 

const { createStore } = require("redux")

// constants

const INCREMENT = 'INCREMENT'
const ADD_USER = 'ADD_USER'

const increment_By_Value = 'increment_By_Value'
const DECREMENT = 'DECREMENT'
const RESET = 'RESET'

const initialState = {
    user: ["ferdous"],
    count: 1
}
const addUser = (user) => {
    return {
        type: ADD_USER,
        payload: user
    }
}
const incrementCounterAction = () => {
    return {
        type: INCREMENT,
    }
}
const decrementCounterAction = () => {
    return {
        type: DECREMENT,
    }
}
const resetCounterAction = () => {
    return {
        type: RESET,
    }
}
const incrementCounterByValue = (value) => {
    return {
        type: increment_By_Value ,
        payload: value,
    }
}

// reduser 

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1,
            };

            case DECREMENT:
            return {
                ...state,
                count: state.count - 1 ,
            };

            case RESET:
            return {
                ...state,
                count: 0
            }
            case increment_By_Value:
            return {
                ...state,
                count: state.count + action.payload,
            }
            case ADD_USER:
            return {
                user: [...state.user, action.payload],
                count: state.count + 1,
            }
           
    
        default:
            state;
    }
}

// store 

const store = createStore(counterReducer);

store.subscribe(() => {
    console.log(store.getState());
});

//store.dispatch(incrementCounterAction())
//store.dispatch(incrementCounterByValue(10))
store.dispatch(addUser('shakil'))
store.dispatch(addUser('fahim'))
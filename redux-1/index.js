const {createStore} = require("redux")

// defining constants
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const ADD_USER = 'ADD_USER';

// state 
const initialCounterState = {
    count : 0,
    user : "shakil"
};
const initialUserState = {
    users: [
        { name: "Anjum Ferdous"},
    ]
}


// action - object - type, payload 

const incrementCounter = () => {
    return {
        type: INCREMENT,
    };
};

const decrementCounter = () => {
    return {
        type: DECREMENT,
    };
};
const addUser = () => {
    return {
        type: ADD_USER,
        payload: {name: 'shakil'}
    };
};

// create reducer for counter 

const counterReducer = (state = initialCounterState, action) => {
    switch (action.type) {
        case INCREMENT:
            return{
                ...state,
                count: state.count + 1
            }
            case DECREMENT:
                return{
                    ...state,
                    count: state.count - 1
                }
        default:
            state;
    }
}

// store - getSate(), dispatch(), subscribe()

// create store 

const store = createStore(counterReducer);

store.subscribe(() => {
    console.log(store.getState());
});

// dispatch action 
store.dispatch(incrementCounter());
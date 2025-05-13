const { createStore } = require("redux");

// products constants 
const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCTS = "ADD_PRODUCTS";


//  state

const initiaProductState = {
    products: ["sugar", "salt"],
    numberofProducts: 2,
};

// action 

const getProducts = () => {
    return {
        type: GET_PRODUCTS,
    }
};
const addProducts = (product) => {
    return {
        type: ADD_PRODUCTS,
        payload: product,
    }
};

// reducer 

const productReducer = (state = initiaProductState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state
            };          
        case ADD_PRODUCTS:
            return {
                products: [ ...state.products, action.payload],
                numberofProducts: state.numberofProducts + 1,
            };
    
        default:
            state;
    }
}

// cart  Reducer 


// store 

const store = createStore(productReducer);
store.subscribe(() => {
    console.log(store.getState())
});
store.dispatch(getProducts());
store.dispatch(addProducts("pen"));


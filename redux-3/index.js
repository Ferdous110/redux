const { createStore, combineReducers } = require("redux");

// products constants 
const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCTS = "ADD_PRODUCTS";

// cart constants

const GET_CART_ITEMS = "GET_CART_ITEMS";
const ADD_CART_ITEM = "ADD_CART_ITEM";


// product state

const initiaProductState = {
    products: ["sugar", "salt"],
    numberofProducts: 2,
};
// cart state

const initiaCartState = {
    cart: ["sugar"],
    numberofProducts: 1,
};

// product action 

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

// cart action 

const getcart = () => {
    return {
        type: GET_CART_ITEMS,
    }
};
const addcart = (product) => {
    return {
        type: ADD_CART_ITEM,
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
          return  state;
    }
}

// cart  Reducer 

// reducer 

const cartReducer = (state = initiaCartState, action) => {
    switch (action.type) {
        case GET_CART_ITEMS:
            return {
                ...state
            };          
        case ADD_CART_ITEM:
            return {
                cart: [ ...state.cart, action.payload],
                numberofProducts: state.numberofProducts + 1,
            };
    
        default:
           return state;
    }
}

// store 

const rootReducer = combineReducers ({
    producR: productReducer,
    cartR: cartReducer
})

// const store = createStore(productReducer);
const store = createStore(rootReducer);

store.subscribe(() => {
    console.log(store.getState())
});

store.dispatch(getProducts());
store.dispatch(addProducts("pen"));

store.dispatch(getcart());
store.dispatch(addcart("pen"));


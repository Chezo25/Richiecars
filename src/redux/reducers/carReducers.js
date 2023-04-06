const initialData = {
    cars: [],
    loading: false,
    error: null
};

const carReducers = (state = initialData, action) => {
    switch (action.type) {
        case 'FETCH_CARS_REQUEST':
            return {
                ...state,
                loading: true
            };
        case 'FETCH_CARS_SUCCESS':
            return {
                ...state,
                cars: action.payload,
                loading: false,
                error: null
            };
        case 'FETCH_CARS_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
};


// export const carReducers = (state = initialData, action, ) => {

//     switch (action.type) {
//         default: return state
//     }
// }

export default carReducers;
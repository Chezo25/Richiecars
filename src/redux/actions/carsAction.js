import axios from 'axios';

// Define action types
export const FETCH_CARS_REQUEST = 'FETCH_CARS_REQUEST';
export const FETCH_CARS_SUCCESS = 'FETCH_CARS_SUCCESS';
export const FETCH_CARS_FAILURE = 'FETCH_CARS_FAILURE';

// Define action creators
export const fetchCarsRequest = () => {
    return {
        type: FETCH_CARS_REQUEST,
    };
};

export const fetchCarsSuccess = (cars) => {
    return {
        type: FETCH_CARS_SUCCESS,
        payload: cars,
    };
};

export const fetchCarsFailure = (error) => {
    return {
        type: FETCH_CARS_FAILURE,
        payload: error,
    };
};

// Define async action creator
export const fetchCars = () => {
    return (dispatch) => {
        dispatch(fetchCarsRequest());
        axios
            .get('/api/cars') // replace with your API endpoint
            .then((response) => {
                const cars = response.data;
                dispatch(fetchCarsSuccess(cars));
            })
            .catch((error) => {
                const errorMsg = error.message;
                dispatch(fetchCarsFailure(errorMsg));
            });
    };
};
const initialData = {
    cars: [{
            id: 1,
            name: "Lamborghini Aventador",
            description: "A mid-engine sports car produced by the Italian manufacturer Lamborghini.",
            image: "https://th.bing.com/th/id/OIP.tUFvJ8aqzD_3X_Cf9UMWhQHaE8?pid=ImgDet&rs=1",
            price: 417826,
            isLuxury: true
        },
        {
            id: 2,
            name: "Bugatti Chiron",
            description: "A mid-engine sports car developed and manufactured in Molsheim, France by Bugatti Automobiles S.A.S.",
            image: "https://media.torque.com.sg/public/2019/03/Bugatti-Chiron-front-exterior-4.jpg",
            price: 3000000,
            isLuxury: true
        },
        {
            id: 3,
            name: "Ferrari SF90 Stradale",
            description: "A mid-engine PHEV sports car manufactured by Italian automobile manufacturer Ferrari.",
            image: "https://hips.hearstapps.com/hmg-prod/images/2021-ferrari-sf90-stradale-101-1626707790.jpg?crop=1xw:1xh;center,top&resize=980:*",
            price: 625000,
            isLuxury: true
        },
        {
            id: 4,
            name: "Rolls-Royce Ghost",
            description: "A full-sized luxury car manufactured by Rolls-Royce Motor Cars.",
            image: "https://www.autodetective.com/image/medium/rolls-royce/ghost/2014/275871.jpg",
            price: 332350,
            isLuxury: true
        },
        {
            id: 5,
            name: "Bentley Continental GT",
            description: "A grand tourer manufactured and marketed by British automaker Bentley Motors since 2003.",
            image: "https://media.gettyimages.com/id/169860195/photo/bentley.jpg?s=2048x2048&w=gi&k=20&c=6K5cZV0nJW88_6ZsKyHMrSaxXPvpRbLZxdVHJo3YBGw=",
            price: 214600,
            isLuxury: true
        }
    ],
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
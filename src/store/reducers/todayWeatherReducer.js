import { weatherActionTypes } from '../actions/todayWeatherActions';

const initialState = {
   cityData: null,
   loadingRequest: false,
   error: null,
};

export const todayWeatherReducer = (state = initialState, action) => {
   switch (action.type) {
      case weatherActionTypes.FETCH_CITY_DATA_REQUEST:
         return {
            ...state,
            loadingRequest: true,
            error: null,
         };
      case weatherActionTypes.FETCH_CITY_DATA_SUCCESS:
         return {
            ...state,
            cityData: action.payload,
            loadingRequest: false,
            error: null,
         };
      case weatherActionTypes.FETCH_CITY_DATA_FAILURE:
         return {
            ...state,
            loadingRequest: false,
            error: action.payload,
         };
      default:
         return state;
   }
};

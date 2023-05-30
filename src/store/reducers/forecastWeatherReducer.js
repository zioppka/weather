import { forecastActionTypes } from '../actions/forecastWeatherActions';

const initialState = {
   forecastData: null,
   loadingRequest: false,
   error: null,
};

export const forecastWeatherReducer = (state = initialState, action) => {
   switch (action.type) {
      case forecastActionTypes.FETCH_FORECAST_DATA_REQUEST:
         return {
            ...state,
            loadingRequest: true,
            error: null,
         };
      case forecastActionTypes.FETCH_FORECAST_DATA_SUCCESS:
         return {
            ...state,
            forecastData: action.payload,
            loadingRequest: false,
            error: null,
         };
      case forecastActionTypes.FETCH_FORECAST_DATA_FAILURE:
         return {
            ...state,
            loadingRequest: false,
            error: action.payload,
         };
      default:
         return state;
   }
};

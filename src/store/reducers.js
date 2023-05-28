import { actionTypes } from './actions';

const initialState = {
   cityData: null,
   loading: false,
   error: null,
};

export const cityDataReducer = (state = initialState, action) => {
   switch (action.type) {
      case actionTypes.FETCH_CITY_DATA_REQUEST:
         return {
            ...state,
            loadingRequest: true,
            error: null,
         };
      case actionTypes.FETCH_CITY_DATA_SUCCESS:
         return {
            ...state,
            cityData: action.payload,
            loadingRequest: false,
            error: null,
         };
      case actionTypes.FETCH_CITY_DATA_FAILURE:
         return {
            ...state,
            loadingRequest: false,
            error: action.payload,
         };
      default:
         return state;
   }
};

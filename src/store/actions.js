import { api } from '../helper';

export const actionTypes = {
   FETCH_CITY_DATA_REQUEST: 'FETCH_CITY_DATA_REQUEST',
   FETCH_CITY_DATA_SUCCESS: 'FETCH_CITY_DATA_SUCCESS',
   FETCH_CITY_DATA_FAILURE: 'FETCH_CITY_DATA_FAILURE',
};

export const fetchCityDataRequest = () => {
   return {
      type: actionTypes.FETCH_CITY_DATA_REQUEST,
   };
};

export const fetchCityDataSuccess = (data) => {
   return {
      type: actionTypes.FETCH_CITY_DATA_SUCCESS,
      payload: data,
   };
};

export const fetchCityDataFailure = (err) => {
   return {
      type: actionTypes.FETCH_CITY_DATA_FAILURE,
      payload: err,
   };
};

export const fetchCityData = (city) => {
   const fetchUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric`;
   return (dispatch) => {
      dispatch(fetchCityDataRequest());

      fetch(fetchUrl)
         .then((response) => {
            return response.json();
         })

         .then((data) => {
            if (data.cod === '404') {
               throw new Error('City not found');
            } else if (data.cod === '400') {
               throw new Error('Enter the city');
            }
            dispatch(fetchCityDataSuccess(data));
         })
         .catch((err) => {
            dispatch(fetchCityDataFailure(err.message));
         });
   };
};

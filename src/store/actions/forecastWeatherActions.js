import { api } from '../../helper';

export const forecastActionTypes = {
   FETCH_FORECAST_DATA_REQUEST: 'FETCH_FORECAST_DATA_REQUEST',
   FETCH_FORECAST_DATA_SUCCESS: 'FETCH_FORECAST_DATA_SUCCESS',
   FETCH_FORECAST_DATA_FAILURE: 'FETCH_FORECAST_DATA_FAILURE',
};

export const fetchForecastRequest = () => {
   return {
      type: forecastActionTypes.FETCH_FORECAST_DATA_REQUEST,
   };
};

export const fetchForecastSuccess = (data) => {
   return {
      type: forecastActionTypes.FETCH_FORECAST_DATA_SUCCESS,
      payload: data,
   };
};

export const fetchForecastFailure = (err) => {
   return {
      type: forecastActionTypes.FETCH_FORECAST_DATA_FAILURE,
      payload: err,
   };
};

export const fetchForecastData = (city) => {
   const fetchUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${api}&units=metric`;
   return (dispatch) => {
      dispatch(fetchForecastRequest());

      fetch(fetchUrl)
         .then((response) => {
            return response.json();
         })

         .then((data) => {
            dispatch(fetchForecastSuccess(data));
         })

         .catch((err) => {
            dispatch(fetchForecastFailure(err.message));
         });
   };
};

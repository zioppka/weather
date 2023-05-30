import { applyMiddleware, combineReducers, createStore } from 'redux';
import { todayWeatherReducer } from './reducers/todayWeatherReducer';
import { forecastWeatherReducer } from './reducers/forecastWeatherReducer';
import thunk from 'redux-thunk';

export const rootReducer = combineReducers({
   weather: todayWeatherReducer,
   forecast: forecastWeatherReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

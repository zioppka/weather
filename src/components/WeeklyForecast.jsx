import { WeekItem } from './WeekItem';
import { useSelector } from 'react-redux';
import { Loader } from './Loader';
import { useEffect } from 'react';

export function WeeklyForecast() {
   const loading = useSelector((state) => state.forecast.loadingRequest);

   const forecastData = useSelector((state) => state.forecast.forecastData);
   const forecastDays = forecastData
      ? forecastData.forecast.forecastday.slice(1, 6)
      : null;

   useEffect(() => {
      console.log(forecastDays);
   }, [forecastDays]);
   return (
      <div className={'large-bot-block'}>
         <div className="week-items">
            {loading ? (
               <Loader />
            ) : forecastDays ? (
               forecastDays.map((item, index) => (
                  <WeekItem key={index} forecast={item} />
               ))
            ) : null}
         </div>
      </div>
   );
}

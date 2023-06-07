import clouds from '../images/clouds.svg';
import tag from '../images/icons/location.svg';
import { TempOther } from './TempOther';
import { useSelector } from 'react-redux';

export function TemperatureBlock() {
   const cityData = useSelector((state) => state.weather.cityData);
   const forecastData = useSelector((state) => state.forecast.forecastData);

   const forecastDays = forecastData ? forecastData.forecast.forecastday : 0;

   return (
      <div className={'temperature-block'}>
         <img src={clouds} alt="clouds" className={'clouds-temp'} />
         <div className="city">
            <img src={tag} alt="tag" />
            <h2>{cityData ? cityData.name : 'City'}</h2>
         </div>

         <div className="temperatures">
            <h1 className={'temp-now'}>
               {cityData ? Math.round(cityData.main.temp) : '0'}
               <div className={'celsius'}>°C</div>
            </h1>
            <div className="temp-other">
               <p className="temp-day">
                  {forecastData
                     ? Math.round(forecastDays[0].hour[12].temp_c) + '°'
                     : '0°'}
               </p>
               <p className="temp-tonight">
                  {forecastData
                     ? Math.round(forecastDays[0].hour[0].temp_c) + '°'
                     : '0°'}
               </p>
            </div>
         </div>

         <TempOther />
      </div>
   );
}

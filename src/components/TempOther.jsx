import wind from '../images/icons/wind.svg';
import humidity from '../images/icons/humidity.svg';
import clouds from '../images/icons/clouds.svg';
import { useSelector } from 'react-redux';

export function TempOther() {
   const cityData = useSelector((state) => state.weather.cityData);
   return (
      <div className={'temp-other-info'}>
         <div className="block-other">
            <img src={wind} alt="wind" />
            <div className="info-other">
               <h3>Wind</h3>
               <p>{cityData ? Math.round(cityData.wind.speed) : '0'} km/h</p>
            </div>
         </div>

         <div className="block-other">
            <img src={humidity} alt="humidity" />
            <div className="info-other">
               <h3>Humidity</h3>
               <p>{cityData ? Math.round(cityData.main.humidity) : '0'} %</p>
            </div>
         </div>

         <div className="block-other">
            <img src={clouds} alt="rain" />
            <div className="info-other">
               <h3>Clouds</h3>
               <p>{cityData ? Math.round(cityData.clouds.all) : '0'} %</p>
            </div>
         </div>
      </div>
   );
}

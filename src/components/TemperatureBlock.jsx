import clouds from '../images/clouds.svg';
import tag from '../images/icons/location.svg';
import { useState } from 'react';
import { TempOther } from './TempOther';

export function TemperatureBlock() {
   const [city, setCity] = useState('City');

   return (
      <div className={'temperature-block'}>
         <img src={clouds} alt="clouds" className={'clouds-temp'} />

         <div className="city">
            <img src={tag} alt="tag" />
            <h2>{city}</h2>
         </div>

         <div className="temperatures">
            <h1 className={'temp-now'}>
               18
               <div className={'celsius'}>°C</div>
            </h1>
            <div className="temp-other">
               <p className="temp-day">22°</p>
               <p className="temp-tonight">16°</p>
            </div>
         </div>

         <TempOther />
      </div>
   );
}

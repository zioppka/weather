import wind from '../images/icons/wind.svg';
import humidity from '../images/icons/humidity.svg';
import rain from '../images/icons/rain.svg';

export function TempOther() {
   return (
      <div className={'temp-other-info'}>
         <div className="block-other">
            <img src={wind} alt="wind" />
            <div className="info-other">
               <h3>Wind</h3>
               <p>17 km/h</p>
            </div>
         </div>

         <div className="block-other">
            <img src={humidity} alt="humidity" />
            <div className="info-other">
               <h3>Humidity</h3>
               <p>31 %</p>
            </div>
         </div>

         <div className="block-other">
            <img src={rain} alt="rain" />
            <div className="info-other">
               <h3>Rain</h3>
               <p>10%</p>
            </div>
         </div>
      </div>
   );
}

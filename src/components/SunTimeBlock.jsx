import sunTime from '../images/icons/sun-time.svg';
import sunset from '../images/icons/sunset.svg';
import sunrise from '../images/icons/sunrise.svg';
import { useSelector } from 'react-redux';
import { getTime } from '../helper';

export function SunTimeBlock() {
   const cityData = useSelector((state) => state.cityData);

   return (
      <div className={'small-top-block'}>
         <div className={'block-header'}>
            <img src={sunTime} alt="air" />
            <h3 className="block-title">Sun Hours</h3>
         </div>
         <div className="suns-info">
            <div className="sun-info">
               <p>Sunrise:</p>
               <h2 className={'sun-time'}>
                  {cityData ? getTime(cityData.sys.sunrise) : '00:00'}
               </h2>
               <img src={sunrise} alt={'sunrise'} />
            </div>

            <div className="sun-info">
               <p>Sunset:</p>
               <h2 className={'sun-time'}>
                  {cityData ? getTime(cityData.sys.sunset) : '00:00'}
               </h2>
               <img src={sunset} alt={'sunset'} />
            </div>
         </div>
      </div>
   );
}

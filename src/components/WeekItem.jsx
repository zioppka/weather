import clouds from '../images/icons/clouds.svg';

export function WeekItem() {
   return (
      <div className="week-item">
         <h2 className={'weekday'}>Monday, 3</h2>
         <img src={clouds} alt="weather" />
         <div className={'weekday-temps'}>
            <p className={'weekday-day-temp'}>21°</p>
            <p className={'weekday-night-temp'}>16°</p>
         </div>
      </div>
   );
}

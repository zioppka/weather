export function WeekItem({ forecast }) {
   const dayTemp = forecast ? Math.round(forecast.hour[12].temp_c) : '';
   const nightTemp = forecast ? Math.round(forecast.hour[0].temp_c) : '';

   const dateObj = new Date(forecast.date);
   const options = { day: 'numeric', weekday: 'long' };
   const formattedWeekday = new Intl.DateTimeFormat('en', options).format(
      dateObj
   );

   return (
      <div className="week-item">
         <h2 className={'weekday'}>{formattedWeekday}</h2>
         <img src={forecast.day.condition.icon} alt="weather" />
         <div className={'weekday-temps'}>
            <p className={'weekday-day-temp'}>{dayTemp}°</p>
            <p className={'weekday-night-temp'}>{nightTemp}°</p>
         </div>
      </div>
   );
}

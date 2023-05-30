import { WeekItem } from './WeekItem';

export function WeeklyForecast() {
   return (
      <div className={'large-bot-block'}>
         <div className="week-items">
            <WeekItem />
            <WeekItem />
            <WeekItem />
            <WeekItem />
            <WeekItem />
         </div>
      </div>
   );
}

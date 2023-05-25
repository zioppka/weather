import { TemperatureBlock } from './TemperatureBlock';
import { AirQualityBlock } from './AirQualityBlock';
import { SunTimeBlock } from './SunTimeBlock';
import { WeeklyForecast } from './WeeklyForecast';

export function WeatherMain() {
   return (
      <div className={'weather-main'}>
         <TemperatureBlock />
         <div className="other-blocks">
            <AirQualityBlock />
            <SunTimeBlock />
            <WeeklyForecast />
         </div>
      </div>
   );
}

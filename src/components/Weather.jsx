import { Input } from './Input';
import { WeatherMain } from './WeatherMain';

export function Weather() {
   return (
      <section className="weather-app">
         <div className="container">
            <Input />
            <WeatherMain />
         </div>
      </section>
   );
}

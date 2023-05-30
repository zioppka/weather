import { Input } from './Input';
import { WeatherMain } from './WeatherMain';
import { useSelector } from 'react-redux';
import { Loader } from './Loader';

export function Weather() {
   const loading = useSelector((state) => state.weather.loadingRequest);

   return (
      <section className="weather-app">
         <div className="container">
            <Input />
            {loading ? <Loader /> : <WeatherMain />}
         </div>
      </section>
   );
}

import air from '../images/icons/air.svg';

export function AirQualityBlock() {
   return (
      <div className={'small-top-block'}>
         <div className={'block-header'}>
            <img src={air} alt="air" />
            <h3 className="block-title">Air quality</h3>
         </div>
         <p className={'block-subtitle'}>Boa</p>
         <h1 className={'small-block-number'}>21</h1>
      </div>
   );
}

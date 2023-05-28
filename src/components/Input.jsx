import search from '../images/icons/search.svg';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCityData } from '../store/actions';

export function Input() {
   const [value, setValue] = useState('');
   const dispatch = useDispatch();
   const err = useSelector((state) => state.error);

   const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(fetchCityData(value));
      setValue('');
   };

   const handleChange = (e) => {
      setValue(e.target.value);
   };

   return (
      <div className={'input-block'}>
         <div className={err ? 'error-input active' : 'error-input inactive'}>
            {err ? err : null}
         </div>
         <form className={'input-form'} onSubmit={(e) => handleSubmit(e)}>
            <input
               type={'text'}
               className={'input'}
               placeholder={'Enter city'}
               maxLength={50}
               value={value}
               onChange={(e) => handleChange(e)}
            />
            <button type={'submit'}>
               <img src={search} alt="search" />
            </button>
         </form>
      </div>
   );
}

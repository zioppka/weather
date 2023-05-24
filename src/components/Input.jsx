import search from '../images/icons/search.svg';
import { useState } from 'react';

export function Input() {
   const [value, setValue] = useState('');

   const handleSubmit = (e) => {
      e.preventDefault();
      setValue('');
   };

   const handleChange = (e) => {
      setValue(e.target.value);
   };

   return (
      <div className={'input-block'}>
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

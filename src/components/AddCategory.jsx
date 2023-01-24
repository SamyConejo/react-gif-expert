import { useState } from "react"
import PropTypes from 'prop-types';

export const AddCategory = ({onNewCategorie}) => {

  const [inputValue, setInputValue] = useState('')

  const onInputChange = (event)=>{
    
    setInputValue(event.target.value);
  }

  const onSubmitForm = (event)=>{
    event.preventDefault();
    if ( inputValue.trim().length <=1 ) return;
    onNewCategorie( inputValue.trim() );
    setInputValue('');
    // setCategories( oldItems =>[inputValue, ...oldItems]);
    // setInputValue('');
  }

  return (
    <form onSubmit={(event)=>{onSubmitForm(event)}}>
        <input
            type='text'
            placeholder='Buscar'
            value={inputValue} 
            onChange={onInputChange}  
        />
    </form>
   
  )
}

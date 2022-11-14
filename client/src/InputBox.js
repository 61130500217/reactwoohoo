import React, { useState, useCallback} from "react";
import {KEY_RETURN} from 'keycode-js'

const InputBox = (props) => {
     const {addNewItem} = props;
     const [value, setValue] = useState('');
     const handleKeyUpEvent = useCallback( e => {
          if(e.keyCode === KEY_RETURN) {
               //Add new todo here + clear text box
               addNewItem(e.target.value);
               setValue('');
          }
     }, [addNewItem, setValue]);
     
     const handleChangeEvent = useCallback(
          e => {
               setValue(e.target.value);
          }, [setValue]
     )
     return (
     <input type="text" 
     className="form-control add-todo" 
     value={value}
     onKeyUp={handleKeyUpEvent}
     onChange={handleChangeEvent}
     placeholder="add new0"/> )
}
export default InputBox
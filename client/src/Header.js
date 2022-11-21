import React from 'react'
import InputBox from './InputBox';

const Header = (props) => {
     const {title, addNew} = props;
     return (
     <header>
          <h1>{title.toUpperCase()}</h1>
          <InputBox addNee={addNew} />
     </header>

     )
}
export default Header
import React from 'react'

const Footer = (props) => {
     const {count } = props;

     return (
          <div className="todo=footer" >
               <span className="count-todos">{count}</span>
               {' item left '}
          </div>
     )
}
export default Footer